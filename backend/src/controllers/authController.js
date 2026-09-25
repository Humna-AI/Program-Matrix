import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../prisma.js';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-12345-change-me-in-production';

/**
 * Hash plain password using SHA-256
 */
export const hashPassword = (password) => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

export const register = async (req, res) => {
  const { name, email, password, role, avatar } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required.' });
  }

  // Validate role
  const allowedRoles = ['admin', 'manager', 'employee', 'executive'];
  const userRole = role && allowedRoles.includes(role.toLowerCase()) ? role.toLowerCase() : 'employee';

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'A user with this email already exists.' });
    }

    // Store password as SHA-256 hash
    const passwordHash = hashPassword(password);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role: userRole,
        avatar: avatar || null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
      },
    });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error during registration.' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const user = await prisma.user.findFirst({ where: { email: normalizedEmail } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Compute incoming SHA-256 hash
    const incomingHash = hashPassword(password);
    let isMatch = incomingHash === user.passwordHash;

    // Backward-compatible verification and auto-migration if previously stored as bcrypt
    if (!isMatch && (user.passwordHash.startsWith('$2a$') || user.passwordHash.startsWith('$2b$'))) {
      isMatch = await bcrypt.compare(password, user.passwordHash);
      if (isMatch) {
        // Automatically upgrade stored hash to SHA-256
        await prisma.user.update({
          where: { id: user.id },
          data: { passwordHash: incomingHash },
        });
      }
    }

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.json({
      message: 'Logged in successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error during login.' });
  }
};

export const logout = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });
  res.json({ message: 'Logged out successfully' });
};

export const me = (req, res) => {
  res.json({ user: req.user });
};

/**
 * Any authenticated user can update their profile (Name and/or Avatar photo)
 */
export const updateProfile = async (req, res) => {
  const userId = req.user.id;
  const { name, avatar } = req.body;

  try {
    const updateData = {};
    if (typeof name === 'string' && name.trim()) {
      updateData.name = name.trim();
    }
    if (avatar !== undefined) {
      updateData.avatar = avatar || null;
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
      },
    });

    res.json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Failed to update profile.' });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
      },
      orderBy: { name: 'asc' },
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users.' });
  }
};

/**
 * Fetch all user accounts with task counts and statistics for Admin
 */
export const getAdminUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
        _count: {
          select: {
            assignedTasks: true,
            createdTasks: true,
            projects: true,
          },
        },
      },
      orderBy: { id: 'asc' },
    });

    const stats = {
      total: users.length,
      admin: users.filter((u) => u.role === 'admin').length,
      manager: users.filter((u) => u.role === 'manager').length,
      executive: users.filter((u) => u.role === 'executive').length,
      employee: users.filter((u) => u.role === 'employee').length,
    };

    res.json({ users, stats });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user accounts.' });
  }
};

/**
 * Admin: Change / Reset password for any user account
 */
export const adminChangePassword = async (req, res) => {
  const { id } = req.params;
  const { newPassword } = req.body;

  if (!newPassword || newPassword.trim().length < 4) {
    return res.status(400).json({ error: 'New password must be at least 4 characters long.' });
  }

  try {
    const targetUser = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    if (!targetUser) {
      return res.status(404).json({ error: 'User account not found.' });
    }

    const passwordHash = hashPassword(newPassword.trim());
    await prisma.user.update({
      where: { id: parseInt(id) },
      data: { passwordHash },
    });

    res.json({ message: `Password for ${targetUser.name} (${targetUser.email}) was updated successfully.` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update user password.' });
  }
};

/**
 * Admin: Delete user account
 */
export const adminDeleteUser = async (req, res) => {
  const { id } = req.params;
  const currentAdminId = req.user.id;

  if (parseInt(id) === currentAdminId) {
    return res.status(400).json({ error: 'Safety protection: You cannot delete your own active Admin account.' });
  }

  try {
    const targetUser = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    if (!targetUser) {
      return res.status(404).json({ error: 'User account not found.' });
    }

    await prisma.user.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: `User account ${targetUser.name} (${targetUser.email}) was deleted successfully.` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete user account.' });
  }
};

/**
 * Admin: Create a new user account directly
 */
export const adminCreateUser = async (req, res) => {
  const { name, email, password, role, avatar } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required.' });
  }

  const allowedRoles = ['admin', 'manager', 'employee', 'executive'];
  const userRole = role && allowedRoles.includes(role.toLowerCase()) ? role.toLowerCase() : 'employee';

  try {
    const existing = await prisma.user.findUnique({ where: { email: email.trim().toLowerCase() } });
    if (existing) {
      return res.status(400).json({ error: 'A user with this email already exists.' });
    }

    const passwordHash = hashPassword(password.trim());
    const newUser = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        passwordHash,
        role: userRole,
        avatar: avatar || null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
      },
    });

    res.status(201).json({ message: 'User account created successfully.', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user account.' });
  }
};

/**
 * Admin: Update user profile details (Name, Email, Role, Avatar)
 */
export const adminUpdateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, role, avatar } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const allowedRoles = ['admin', 'manager', 'employee', 'executive'];
  const userRole = role && allowedRoles.includes(role.toLowerCase()) ? role.toLowerCase() : 'employee';

  try {
    const targetUser = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    if (!targetUser) {
      return res.status(404).json({ error: 'User account not found.' });
    }

    const normalizedEmail = email.trim().toLowerCase();
    if (normalizedEmail !== targetUser.email) {
      const emailInUse = await prisma.user.findUnique({ where: { email: normalizedEmail } });
      if (emailInUse && emailInUse.id !== targetUser.id) {
        return res.status(400).json({ error: 'This email is already in use by another account.' });
      }
    }

    const updateData = {
      name: name.trim(),
      email: normalizedEmail,
      role: userRole,
    };

    if (avatar !== undefined) {
      updateData.avatar = avatar || null;
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
      },
    });

    res.json({ message: `Account for ${updatedUser.name} updated successfully.`, user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update user profile.' });
  }
};


