#!/usr/bin/env node
/**
 * SMTP Diagnostic & Verification Test Utility
 * 
 * Usage:
 *   node src/utils/testEmail.js [optionalRecipientEmail]
 *   npm run test:email -- humna@jobs-group.org
 */

import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../../.env') });

import { verifySmtpConnection, sendAdminPasswordRecoveryEmail } from './emailService.js';

async function runEmailTest() {
  console.log('================================================================');
  console.log('📧  PROGRAM MATRIX: SMTP CONFIGURATION & DELIVERY TEST');
  console.log('================================================================\n');

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, EMAIL_FROM } = process.env;

  console.log('Current SMTP Configuration in Environment:');
  console.log(`  • Sender (EMAIL_FROM): ${EMAIL_FROM || 'info@jobs-group.org'}`);
  console.log(`  • SMTP User:           ${SMTP_USER || '(not set)'}`);
  console.log(`  • SMTP Host:           ${SMTP_HOST || '(not set)'}`);
  console.log(`  • SMTP Port:           ${SMTP_PORT || '465'}`);
  console.log(`  • SMTP Secure (SSL):   ${SMTP_SECURE || 'true'}`);
  console.log(`  • SMTP Pass:           ${SMTP_PASS ? '******** (configured)' : '❌ (empty/not set)'}`);
  console.log('----------------------------------------------------------------\n');

  console.log('🔍 1. Verifying SMTP Transporter Connection...');
  const verifyResult = await verifySmtpConnection();

  if (!verifyResult.configured) {
    console.log(`⚠️  Status: ${verifyResult.message}`);
    console.log('ℹ️  Tip: Add your password to SMTP_PASS in backend/.env to enable live sending.\n');
  } else if (!verifyResult.ok) {
    console.error(`❌ SMTP Connection Failed: ${verifyResult.message}\n`);
    console.error('Possible Causes:');
    console.error('  1. Incorrect SMTP_PASS password.');
    console.error('  2. Incorrect SMTP_HOST server address.');
    console.error('  3. Port/SSL mismatch (Port 465 requires SMTP_SECURE=true, Port 587 requires SMTP_SECURE=false).\n');
  } else {
    console.log(`✅ Success: ${verifyResult.message}\n`);
  }

  const recipient = process.argv[2] || process.env.TEST_EMAIL_TO || 'humna@jobs-group.org';

  console.log(`✉️  2. Dispatching Sample Test Password Recovery Code to: ${recipient}...`);
  const result = await sendAdminPasswordRecoveryEmail({
    to: recipient,
    adminName: 'Administrator',
    code: '849201',
    expiresInMinutes: 10,
  });

  console.log('\n----------------------------------------------------------------');
  console.log(`Result Mode: ${result.mode}`);
  if (result.mode === 'smtp') {
    console.log(`🎉 LIVE EMAIL DISPATCHED via info@jobs-group.org!`);
    console.log(`Message ID: ${result.messageId}`);
    console.log(`Please check the inbox and spam folder of ${recipient}.`);
  } else {
    console.log(`ℹ️  Running in Local Fallback Mode (Console Logger).`);
    console.log(`Once you enter SMTP_PASS in backend/.env, emails will deliver straight to ${recipient}.`);
  }
  console.log('================================================================\n');

  process.exit(0);
}

runEmailTest();
