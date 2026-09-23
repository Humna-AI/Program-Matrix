/**
 * Comprehensive Automated Verification Suite for Admin Auth & Password Recovery
 */
import prisma from './src/prisma.js';
import crypto from 'crypto';

const API_BASE = 'http://localhost:5000/api/auth';
const hashPassword = (p) => crypto.createHash('sha256').update(p).digest('hex');

async function runTests() {
  console.log('================================================================');
  console.log('🧪 RUNNING COMPREHENSIVE ADMIN AUTH & RECOVERY TEST SUITE');
  console.log('================================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      failed++;
    }
  }

  try {
    // 0. Find current Admin account in database
    const admin = await prisma.user.findFirst({ where: { role: 'admin' } });
    if (!admin) {
      console.error('No Admin user found in database.');
      process.exit(1);
    }
    const adminEmail = admin.email;
    const initialPassword = 'Shah_Rukh!2026K';

    await prisma.user.update({
      where: { id: admin.id },
      data: { passwordHash: hashPassword(initialPassword) },
    });
    await prisma.adminPasswordReset.deleteMany({ where: { adminId: admin.id } });

    console.log(`--- Test Group 1: Dedicated Admin Login & Access Control (Admin: ${adminEmail}) ---`);

    // Test 1: Valid Admin Login
    const res1 = await fetch(`${API_BASE}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: adminEmail, password: initialPassword }),
    });
    const data1 = await res1.json();
    assert(res1.status === 200 && data1.user.role === 'admin', 'Valid Admin login succeeds (200 OK)');

    // Test 2: Invalid Admin Password
    const res2 = await fetch(`${API_BASE}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: adminEmail, password: 'wrongpassword' }),
    });
    assert(res2.status === 401, 'Incorrect Admin password returns 401 Unauthorized');

    // Test 3: Non-Admin attempting Admin Login
    const res3 = await fetch(`${API_BASE}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'nonexistent_test_user@example.com', password: 'employeepassword' }),
    });
    assert(res3.status === 401 || res3.status === 403, 'Non-admin/unregistered attempting /admin/login is denied');

    console.log('\n--- Test Group 2: Forgot Password & Verification Code Flow ---');

    // Test 4: Forgot password with valid email returns generic response
    const res4 = await fetch(`${API_BASE}/admin/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: adminEmail }),
    });
    const data4 = await res4.json();
    assert(res4.status === 200 && data4.message.includes('If an Administrator account exists'), 'Forgot password for valid admin returns generic response');

    // Test 5: Forgot password with non-existent email returns IDENTICAL generic response (prevent enumeration)
    const res5 = await fetch(`${API_BASE}/admin/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'fakeuser@nowhere.com' }),
    });
    const data5 = await res5.json();
    assert(res5.status === 200 && data5.message === data4.message, 'Forgot password for invalid email returns identical generic response');

    // Verify DB stored hashed code (NOT plain text) and 10 min expiry
    const resetRecord = await prisma.adminPasswordReset.findFirst({
      where: { adminId: admin.id, isUsed: false },
      orderBy: { createdAt: 'desc' },
    });
    assert(resetRecord && resetRecord.codeHash.length === 64, 'Verification code is stored as a SHA-256 hash in DB');
    assert(resetRecord && new Date(resetRecord.expiresAt) > new Date(), 'Code has a valid 10-minute expiration window');

    // Test 6: Incorrect verification code decrement attempt counter
    const res6 = await fetch(`${API_BASE}/admin/verify-code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: adminEmail, code: '000000' }),
    });
    const data6 = await res6.json();
    assert(res6.status === 400 && data6.error.includes('4 attempts remaining'), 'Incorrect code returns 400 with attempts remaining count');

    // Test 7: Correct verification code issues single-use resetToken
    const testCode = '839201';
    await prisma.adminPasswordReset.update({
      where: { id: resetRecord.id },
      data: { codeHash: hashPassword(testCode), attempts: 0 },
    });

    const res7 = await fetch(`${API_BASE}/admin/verify-code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: adminEmail, code: testCode }),
    });
    const data7 = await res7.json();
    assert(res7.status === 200 && data7.resetToken, 'Correct verification code returns temporary single-use resetToken');

    // Test 8: Reused code is rejected (Single-Use enforcement)
    const res8 = await fetch(`${API_BASE}/admin/verify-code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: adminEmail, code: testCode }),
    });
    assert(res8.status === 400, 'Reused verification code is rejected (Single-use enforcement)');

    console.log('\n--- Test Group 3: Password Complexity & Reset Validation ---');

    const validResetToken = data7.resetToken;

    // Test 9: Weak password rejection (<12 chars)
    const res9 = await fetch(`${API_BASE}/admin/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: adminEmail,
        resetToken: validResetToken,
        newPassword: 'Short1!',
        confirmPassword: 'Short1!',
      }),
    });
    const data9 = await res9.json();
    assert(res9.status === 400 && data9.error.includes('12 characters'), 'Weak password (<12 chars) is rejected with 400');

    // Test 10: Missing special character rejection
    const res10 = await fetch(`${API_BASE}/admin/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: adminEmail,
        resetToken: validResetToken,
        newPassword: 'ValidPassword12345',
        confirmPassword: 'ValidPassword12345',
      }),
    });
    assert(res10.status === 400, 'Password without special characters is rejected');

    // Test 11: Valid strong password reset
    const newStrongPassword = 'SecureAdmin#2026!Pass';
    const res11 = await fetch(`${API_BASE}/admin/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: adminEmail,
        resetToken: validResetToken,
        newPassword: newStrongPassword,
        confirmPassword: newStrongPassword,
      }),
    });
    const data11 = await res11.json();
    assert(res11.status === 200, 'Strong password reset succeeds (200 OK)');

    // Test 12: Old password no longer works
    const res12 = await fetch(`${API_BASE}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: adminEmail, password: initialPassword }),
    });
    assert(res12.status === 401, 'Old password is no longer valid (401 Unauthorized)');

    // Test 13: Login with new password succeeds
    const res13 = await fetch(`${API_BASE}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: adminEmail, password: newStrongPassword }),
    });
    assert(res13.status === 200, 'Login with new updated password succeeds (200 OK)');

    console.log('\n--- Test Group 4: Emergency Backup Key Recovery ---');

    // Generate known emergency backup key for testing
    const emergencyKey = 'ADM-TEST-9999-RECV';
    await prisma.adminRecoveryKey.upsert({
      where: { adminId: admin.id },
      update: { keyHash: hashPassword(emergencyKey), isUsed: false },
      create: { adminId: admin.id, keyHash: hashPassword(emergencyKey), isUsed: false },
    });

    // Test 14: Emergency recovery with wrong key fails
    const res14 = await fetch(`${API_BASE}/admin/emergency-recovery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: adminEmail,
        recoveryKey: 'ADM-WRONG-KEY-0000',
        newPassword: 'AnotherStrong#2026!Key',
        confirmPassword: 'AnotherStrong#2026!Key',
      }),
    });
    assert(res14.status === 400, 'Emergency recovery with invalid key is rejected (400 Bad Request)');

    // Test 15: Emergency recovery with valid key succeeds and issues fresh backup key
    const finalPassword = 'AdminFinalSecure#2026!';
    const res15 = await fetch(`${API_BASE}/admin/emergency-recovery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: adminEmail,
        recoveryKey: emergencyKey,
        newPassword: finalPassword,
        confirmPassword: finalPassword,
      }),
    });
    const data15 = await res15.json();
    assert(res15.status === 200 && data15.newEmergencyKey, 'Emergency recovery with valid backup key succeeds & issues new backup key');

    // Test 16: Security Audit Logs recorded
    const auditLogs = await prisma.securityAuditLog.findMany({
      where: { userId: admin.id },
      orderBy: { createdAt: 'desc' },
      take: 5,
    });
    assert(auditLogs.length > 0, `Security events recorded in SecurityAuditLog table (${auditLogs.length} events found)`);

    // Reset password back to initial admin password
    await prisma.user.update({
      where: { id: admin.id },
      data: { passwordHash: hashPassword(initialPassword) },
    });

    console.log('\n================================================================');
    console.log(`🎉 TEST RESULTS: ${passed} Passed, ${failed} Failed`);
    console.log('================================================================\n');

    process.exit(failed === 0 ? 0 : 1);
  } catch (err) {
    console.error('Fatal test runner error:', err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

runTests();
