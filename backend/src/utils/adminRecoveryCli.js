#!/usr/bin/env node
/**
 * Server-Side Authorized Admin Account Recovery Tool
 * Usage:
 *   node src/utils/adminRecoveryCli.js [adminEmail] [newPassword]
 *   npm run admin:recover -- admin@example.com MyStrongP@ssw0rd123!
 */

import crypto from 'crypto';
import prisma from '../prisma.js';
import { logSecurityEvent } from './auditLogger.js';

const hashPassword = (password) => crypto.createHash('sha256').update(password).digest('hex');

function generateRandomKey() {
  const parts = [];
  for (let i = 0; i < 3; i++) {
    parts.push(crypto.randomBytes(2).toString('hex').toUpperCase());
  }
  return `ADM-${parts.join('-')}`;
}

async function runCliRecovery() {
  const args = process.argv.slice(2);
  const email = args[0] || 'admin@example.com';
  let newPassword = args[1];

  console.log('================================================================');
  console.log('🛡️  PROGRAM MATRIX: AUTHORIZED ADMIN ACCOUNT RECOVERY CLI');
  console.log('================================================================');

  try {
    const admin = await prisma.user.findUnique({
      where: { email: email.trim().toLowerCase() },
    });

    if (!admin || admin.role !== 'admin') {
      console.error(`❌ ERROR: No Administrator account found with email "${email}".`);
      process.exit(1);
    }

    if (!newPassword) {
      // Generate a strong temporary password if not supplied
      const randomPart = crypto.randomBytes(6).toString('base64').replace(/[^a-zA-Z0-9]/g, '');
      newPassword = `Admin@${randomPart}#2026!`;
    }

    // Password validation check
    if (newPassword.length < 12) {
      console.error('❌ ERROR: Password must be at least 12 characters.');
      process.exit(1);
    }

    const passwordHash = hashPassword(newPassword);

    // Update password
    await prisma.user.update({
      where: { id: admin.id },
      data: { passwordHash },
    });

    // Invalidate all active password resets
    await prisma.adminPasswordReset.updateMany({
      where: { adminId: admin.id, isUsed: false },
      data: { isUsed: true },
    });

    // Generate or update Emergency Recovery Key
    const newEmergencyKey = generateRandomKey();
    const emergencyKeyHash = hashPassword(newEmergencyKey);

    await prisma.adminRecoveryKey.upsert({
      where: { adminId: admin.id },
      update: {
        keyHash: emergencyKeyHash,
        isUsed: false,
      },
      create: {
        adminId: admin.id,
        keyHash: emergencyKeyHash,
        isUsed: false,
      },
    });

    // Record audit event
    await logSecurityEvent({
      userId: admin.id,
      event: 'CLI_ADMIN_RECOVERY_SUCCESS',
      details: `Admin password reset via server CLI for ${admin.email}`,
    });

    console.log(`✅ SUCCESS: Admin account recovered successfully!`);
    console.log('----------------------------------------------------------------');
    console.log(`  Admin Email:           ${admin.email}`);
    console.log(`  New Password:          ${newPassword}`);
    console.log(`  Emergency Backup Key:  ${newEmergencyKey}`);
    console.log('----------------------------------------------------------------');
    console.log('  * Outstanding reset tokens and sessions have been invalidated.');
    console.log('  * You can now login at /admin-login with the new password.');
    console.log('================================================================\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Fatal error during Admin recovery:', error.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

runCliRecovery();
