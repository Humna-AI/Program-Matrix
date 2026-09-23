import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../prisma.js';
import { sendAdminPasswordRecoveryEmail } from '../utils/emailService.js';
import { logSecurityEvent } from '../utils/auditLogger.js';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-12345-change-me-in-production';

const hashValue = (value) => crypto.createHash('sha256').update(value).digest('hex');

function generateEmergencyKey() {
  const parts = [];
  for (let i = 0; i < 3; i++) {
    parts.push(crypto.randomBytes(2).toString('hex').toUpperCase());
  }
  return `ADM-${parts.join('-')}`;
}

/**
 * Validate password complexity:
 * - Minimum 12 characters
 * - Uppercase, Lowercase, Number, Special Character
 */
function validatePasswordComplexity(password) {
  if (!password || typeof password !== 'string') {
    return { valid: false, error: 'Password is required.' };
  }
  if (password.length < 12) {
    return { valid: false, error: 'Password must be at least 12 characters in length.' };
  }
  if (!/[A-Z]/.test(password)) {
    return { valid: false, error: 'Password must contain at least one uppercase letter (A-Z).' };
  }
  if (!/[a-z]/.test(password)) {
    return { valid: false, error: 'Password must contain at least one lowercase letter (a-z).' };
  }
  if (!/[0-9]/.test(password)) {
    return { valid: false, error: 'Password must contain at least one numeric digit (0-9).' };
  }
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return { valid: false, error: 'Password must contain at least one special character (!@#$%^&*...).' };
  }
  return { valid: true };
}

/**
 * 1. Dedicated Admin Login
 */
export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Admin email and password are required.' });
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const user = await prisma.user.findUnique({ where: { email: normalizedEmail } });

    if (!user) {
      await logSecurityEvent({
        event: 'ADMIN_LOGIN_FAILED_NONEXISTENT',
        req,
        details: `Login attempt with non-existent email: ${normalizedEmail}`,
      });
      return res.status(401).json({ error: 'Invalid Administrator credentials.' });
    }

    // Role check: Only administrators are authorized
    if (user.role !== 'admin') {
      await logSecurityEvent({
        userId: user.id,
        event: 'ADMIN_LOGIN_ACCESS_DENIED_NON_ADMIN',
        req,
        details: `Non-admin user (${user.email}, role: ${user.role}) attempted admin portal login`,
      });
      return res.status(403).json({
        error: 'Access denied: This login portal is strictly reserved for Administrator accounts.',
      });
    }

    // Hash check
    const incomingHash = hashValue(password);
    let isMatch = incomingHash === user.passwordHash;

    if (!isMatch && (user.passwordHash.startsWith('$2a$') || user.passwordHash.startsWith('$2b$'))) {
      isMatch = await bcrypt.compare(password, user.passwordHash);
      if (isMatch) {
        await prisma.user.update({
          where: { id: user.id },
          data: { passwordHash: incomingHash },
        });
      }
    }

    if (!isMatch) {
      await logSecurityEvent({
        userId: user.id,
        event: 'ADMIN_LOGIN_FAILED_WRONG_PASSWORD',
        req,
        details: `Failed password for admin: ${normalizedEmail}`,
      });
      return res.status(401).json({ error: 'Invalid Administrator credentials.' });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Set HTTP-only Cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    await logSecurityEvent({
      userId: user.id,
      event: 'ADMIN_LOGIN_SUCCESS',
      req,
      details: `Admin ${user.email} authenticated successfully`,
    });

    res.json({
      message: 'Admin authenticated successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ error: 'Server error during Administrator authentication.' });
  }
};

/**
 * 2. Admin Forgot Password Request (6-Digit Code Generation)
 */
export const adminForgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email || !email.trim()) {
    return res.status(400).json({ error: 'Registered Administrator email is required.' });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const genericResponse = {
    message: 'If an Administrator account exists with this email address, a 6-digit verification code has been dispatched.',
  };

  try {
    const admin = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    // Enforce generic response even if email doesn't exist or isn't admin
    if (!admin || admin.role !== 'admin') {
      await logSecurityEvent({
        event: 'PASSWORD_RESET_ATTEMPT_NON_ADMIN',
        req,
        details: `Recovery requested for non-admin/unregistered email: ${normalizedEmail}`,
      });
      return res.json(genericResponse);
    }

    // Invalidate previous active password resets for this admin
    await prisma.adminPasswordReset.updateMany({
      where: { adminId: admin.id, isUsed: false },
      data: { isUsed: true },
    });

    // Generate cryptographically secure random 6-digit code (100000 - 999999)
    const verificationCode = crypto.randomInt(100000, 1000000).toString();
    const codeHash = hashValue(verificationCode);
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await prisma.adminPasswordReset.create({
      data: {
        adminId: admin.id,
        codeHash,
        expiresAt,
        attempts: 0,
        isUsed: false,
      },
    });

    // Send code via Email Service
    await sendAdminPasswordRecoveryEmail({
      to: admin.email,
      adminName: admin.name,
      code: verificationCode,
      expiresInMinutes: 10,
    });

    await logSecurityEvent({
      userId: admin.id,
      event: 'PASSWORD_RESET_REQUESTED',
      req,
      details: `Verification code generated and dispatched for admin: ${admin.email}`,
    });

    return res.json(genericResponse);
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ error: 'Server error while processing recovery request.' });
  }
};

/**
 * 3. Verify 6-Digit Verification Code
 */
export const adminVerifyCode = async (req, res) => {
  const { email, code } = req.body;

  if (!email || !code) {
    return res.status(400).json({ error: 'Email and 6-digit verification code are required.' });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const trimmedCode = code.toString().trim();

  if (!/^\d{6}$/.test(trimmedCode)) {
    return res.status(400).json({ error: 'Verification code must be exactly 6 digits.' });
  }

  try {
    const admin = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!admin || admin.role !== 'admin') {
      return res.status(400).json({ error: 'Invalid or expired verification code.' });
    }

    // Find latest active reset record
    const resetRecord = await prisma.adminPasswordReset.findFirst({
      where: {
        adminId: admin.id,
        isUsed: false,
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!resetRecord) {
      return res.status(400).json({ error: 'Verification code has expired or has already been used. Please request a new code.' });
    }

    // Check maximum attempt threshold (5 attempts)
    if (resetRecord.attempts >= 5) {
      await prisma.adminPasswordReset.update({
        where: { id: resetRecord.id },
        data: { isUsed: true },
      });
      await logSecurityEvent({
        userId: admin.id,
        event: 'VERIFICATION_CODE_ATTEMPTS_EXCEEDED',
        req,
        details: `Max attempts exceeded for admin: ${admin.email}`,
      });
      return res.status(400).json({ error: 'Maximum verification attempts exceeded (5/5). Code has been invalidated. Please request a new code.' });
    }

    const incomingCodeHash = hashValue(trimmedCode);

    if (incomingCodeHash !== resetRecord.codeHash) {
      const newAttempts = resetRecord.attempts + 1;
      await prisma.adminPasswordReset.update({
        where: { id: resetRecord.id },
        data: { attempts: newAttempts },
      });

      await logSecurityEvent({
        userId: admin.id,
        event: 'VERIFICATION_CODE_FAILED',
        req,
        details: `Incorrect code attempt (${newAttempts}/5) for admin: ${admin.email}`,
      });

      const remaining = 5 - newAttempts;
      if (remaining <= 0) {
        await prisma.adminPasswordReset.update({
          where: { id: resetRecord.id },
          data: { isUsed: true },
        });
        return res.status(400).json({ error: 'Maximum verification attempts exceeded. Code has been invalidated. Please request a new code.' });
      }

      return res.status(400).json({
        error: `Incorrect verification code. ${remaining} attempt${remaining === 1 ? '' : 's'} remaining.`,
      });
    }

    // Code is valid! Invalidate the code immediately (single-use)
    // Generate a secure single-use resetToken for password creation step
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenHash = hashValue(resetToken);

    await prisma.adminPasswordReset.update({
      where: { id: resetRecord.id },
      data: {
        isUsed: true,
        resetTokenHash,
      },
    });

    await logSecurityEvent({
      userId: admin.id,
      event: 'VERIFICATION_CODE_SUCCESS',
      req,
      details: `Code verified successfully for admin: ${admin.email}`,
    });

    res.json({
      message: 'Verification code confirmed successfully.',
      resetToken,
    });
  } catch (error) {
    console.error('Verify code error:', error);
    res.status(500).json({ error: 'Server error during code verification.' });
  }
};

/**
 * 4. Create New Password using single-use Reset Token
 */
export const adminResetPassword = async (req, res) => {
  const { email, resetToken, newPassword, confirmPassword } = req.body;

  if (!email || !resetToken || !newPassword || !confirmPassword) {
    return res.status(400).json({ error: 'All fields (email, reset token, new password, confirm password) are required.' });
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ error: 'Password and Confirm Password do not match.' });
  }

  const complexityCheck = validatePasswordComplexity(newPassword);
  if (!complexityCheck.valid) {
    return res.status(400).json({ error: complexityCheck.error });
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const admin = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!admin || admin.role !== 'admin') {
      return res.status(400).json({ error: 'Invalid or expired password reset session.' });
    }

    const tokenHash = hashValue(resetToken);

    // Look for reset record that was validated within the last 15 minutes
    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);
    const validResetRecord = await prisma.adminPasswordReset.findFirst({
      where: {
        adminId: admin.id,
        resetTokenHash: tokenHash,
        createdAt: { gte: fifteenMinutesAgo },
      },
    });

    if (!validResetRecord) {
      return res.status(400).json({ error: 'Password reset session is invalid or has expired. Please restart the recovery process.' });
    }

    // Hash the new password with SHA-256
    const newPasswordHash = hashValue(newPassword);

    // Update password
    await prisma.user.update({
      where: { id: admin.id },
      data: { passwordHash: newPasswordHash },
    });

    // Invalidate ALL outstanding reset tokens for this admin
    await prisma.adminPasswordReset.updateMany({
      where: { adminId: admin.id },
      data: { resetTokenHash: null, isUsed: true },
    });

    // Invalidate existing sessions by clearing cookie
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    await logSecurityEvent({
      userId: admin.id,
      event: 'PASSWORD_RESET_SUCCESS',
      req,
      details: `Admin password successfully updated for: ${admin.email}`,
    });

    res.json({
      message: 'Password has been updated successfully. Please sign in with your new credentials.',
    });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ error: 'Server error during password reset.' });
  }
};

/**
 * 5. Emergency Recovery Key Fallback (if Admin lost email access)
 */
export const adminEmergencyRecovery = async (req, res) => {
  const { email, recoveryKey, newPassword, confirmPassword } = req.body;

  if (!email || !recoveryKey || !newPassword || !confirmPassword) {
    return res.status(400).json({ error: 'All fields (email, recovery key, new password, confirm password) are required.' });
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ error: 'Password and Confirm Password do not match.' });
  }

  const complexityCheck = validatePasswordComplexity(newPassword);
  if (!complexityCheck.valid) {
    return res.status(400).json({ error: complexityCheck.error });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedKey = recoveryKey.trim().toUpperCase();

  try {
    const admin = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!admin || admin.role !== 'admin') {
      return res.status(400).json({ error: 'Invalid Administrator email or emergency recovery key.' });
    }

    const keyHash = hashValue(normalizedKey);

    const record = await prisma.adminRecoveryKey.findFirst({
      where: {
        adminId: admin.id,
        keyHash,
        isUsed: false,
      },
    });

    if (!record) {
      await logSecurityEvent({
        userId: admin.id,
        event: 'EMERGENCY_RECOVERY_KEY_FAILED',
        req,
        details: `Invalid emergency key attempt for admin: ${admin.email}`,
      });
      return res.status(400).json({ error: 'Invalid or already used emergency recovery key.' });
    }

    // Set new password
    const newPasswordHash = hashValue(newPassword);
    await prisma.user.update({
      where: { id: admin.id },
      data: { passwordHash: newPasswordHash },
    });

    // Invalidate old recovery key
    await prisma.adminRecoveryKey.update({
      where: { id: record.id },
      data: { isUsed: true },
    });

    // Invalidate all reset records
    await prisma.adminPasswordReset.updateMany({
      where: { adminId: admin.id },
      data: { isUsed: true, resetTokenHash: null },
    });

    // Generate a fresh new emergency recovery key for future backup
    const newBackupKey = generateEmergencyKey();
    const newBackupKeyHash = hashValue(newBackupKey);

    await prisma.adminRecoveryKey.upsert({
      where: { adminId: admin.id },
      update: {
        keyHash: newBackupKeyHash,
        isUsed: false,
      },
      create: {
        adminId: admin.id,
        keyHash: newBackupKeyHash,
        isUsed: false,
      },
    });

    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    await logSecurityEvent({
      userId: admin.id,
      event: 'EMERGENCY_RECOVERY_USED',
      req,
      details: `Admin account recovered using emergency backup key for: ${admin.email}`,
    });

    res.json({
      message: 'Admin account recovered successfully. Please save your new emergency backup key securely.',
      newEmergencyKey: newBackupKey,
    });
  } catch (error) {
    console.error('Emergency recovery error:', error);
    res.status(500).json({ error: 'Server error during emergency recovery.' });
  }
};

/**
 * 6. Admin Panel: Get or Generate Emergency Backup Key
 */
export const adminGetRecoveryKey = async (req, res) => {
  const adminId = req.user.id;

  try {
    const existing = await prisma.adminRecoveryKey.findFirst({
      where: { adminId, isUsed: false },
      orderBy: { createdAt: 'desc' },
    });

    res.json({
      hasActiveKey: !!existing,
      createdAt: existing ? existing.createdAt : null,
    });
  } catch (error) {
    console.error('Get recovery key error:', error);
    res.status(500).json({ error: 'Failed to retrieve recovery key status.' });
  }
};

export const adminGenerateRecoveryKey = async (req, res) => {
  const adminId = req.user.id;

  try {
    const newKey = generateEmergencyKey();
    const keyHash = hashValue(newKey);

    await prisma.adminRecoveryKey.upsert({
      where: { adminId },
      update: {
        keyHash,
        isUsed: false,
      },
      create: {
        adminId,
        keyHash,
        isUsed: false,
      },
    });

    await logSecurityEvent({
      userId: adminId,
      event: 'ADMIN_GENERATED_NEW_RECOVERY_KEY',
      req,
      details: `Admin ID ${adminId} generated a new emergency backup key`,
    });

    res.json({
      message: 'New Emergency Backup Key generated successfully. Save this key in a secure location.',
      recoveryKey: newKey,
    });
  } catch (error) {
    console.error('Generate recovery key error:', error);
    res.status(500).json({ error: 'Failed to generate emergency recovery key.' });
  }
};
