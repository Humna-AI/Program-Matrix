import nodemailer from 'nodemailer';

/**
 * Creates nodemailer transporter if SMTP credentials are provided in environment
 */
export function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SERVICE, SMTP_SECURE } = process.env;

  // 1. Direct Service (e.g. 'gmail', 'hotmail', 'yahoo', 'fastmail')
  if (SMTP_SERVICE && SMTP_USER && SMTP_PASS) {
    return nodemailer.createTransport({
      service: SMTP_SERVICE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
  }

  // 2. Custom Host / Port SMTP (e.g. mail.jobs-group.org, office365, etc.)
  if ((SMTP_HOST || SMTP_USER) && SMTP_PASS) {
    const host = SMTP_HOST || (SMTP_USER && SMTP_USER.includes('@') ? `mail.${SMTP_USER.split('@')[1]}` : 'localhost');
    const port = parseInt(SMTP_PORT || '465', 10);
    const isSecure = SMTP_SECURE !== undefined ? SMTP_SECURE === 'true' : (port === 465);

    return nodemailer.createTransport({
      host,
      port,
      secure: isSecure,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Prevents self-signed cert blocks in development / shared hosting
      },
    });
  }
  return null;
}

/**
 * Verify SMTP connection and credentials
 */
export async function verifySmtpConnection() {
  const transporter = createTransporter();
  if (!transporter) {
    return {
      configured: false,
      message: 'SMTP credentials (SMTP_USER & SMTP_PASS) are not set in backend/.env',
    };
  }
  try {
    await transporter.verify();
    return {
      configured: true,
      ok: true,
      message: 'SMTP transporter verified and ready to send emails.',
    };
  } catch (error) {
    return {
      configured: true,
      ok: false,
      message: error.message,
    };
  }
}

/**
 * Send 6-digit password recovery verification code to an Administrator
 * @param {Object} options
 * @param {string} options.to - Recipient admin email
 * @param {string} options.adminName - Administrator name
 * @param {string} options.code - 6-digit verification code
 * @param {number} [options.expiresInMinutes=10] - Code lifespan in minutes
 */
export async function sendAdminPasswordRecoveryEmail({ to, adminName = 'Program Manager', code, expiresInMinutes = 10 }) {
  const fromEmail = process.env.EMAIL_FROM || '"Program Matrix Security" <info@jobs-group.org>';
  const subject = `[Program Matrix] Program Manager Password Recovery Code: ${code}`;
  
  const textContent = `
Hello ${adminName},

You recently requested a password recovery for your Program Manager account in the Program Matrix (Program & Project Tracking Management System).

Your 6-Digit Verification Code is:
-------------------------
${code}
-------------------------

This code will expire in ${expiresInMinutes} minutes.
Maximum 5 verification attempts are allowed.

SECURITY NOTICE:
If you did not request this verification code, please ignore this email or review your account security immediately. Program Matrix staff will NEVER ask for this code.

Regards,
Program Matrix Security System
`.trim();

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Program Manager Password Recovery</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0b0f19; padding: 40px 15px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
          <!-- Header -->
          <tr>
            <td style="padding: 32px 32px 24px; text-align: center; background: linear-gradient(135deg, #1e1b4b 0%, #311042 100%); border-bottom: 1px solid #374151;">
              <div style="display: inline-block; width: 44px; height: 44px; line-height: 44px; background: #6366f1; border-radius: 12px; color: #ffffff; font-size: 20px; font-weight: bold; margin-bottom: 12px;">🛡️</div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">Program Matrix</h1>
              <p style="margin: 6px 0 0; font-size: 13px; color: #a5b4fc; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Program & Project Tracking Management System</p>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 32px;">
              <p style="margin: 0 0 16px; font-size: 15px; color: #f3f4f6;">Hello <strong>${adminName}</strong>,</p>
              <p style="margin: 0 0 24px; font-size: 14px; line-height: 1.6; color: #9ca3af;">
                A password recovery was initiated for your Program Manager account (<span style="color: #e5e7eb;">${to}</span>). Use the verification code below to authorize your password reset:
              </p>
              
              <!-- Code Box -->
              <div style="text-align: center; margin: 28px 0; padding: 20px; background-color: #030712; border: 1px dashed #6366f1; border-radius: 12px;">
                <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; color: #818cf8; display: block; margin-bottom: 8px;">Your 6-Digit Verification Code</span>
                <span style="font-size: 36px; font-weight: 800; letter-spacing: 8px; color: #38bdf8; font-family: monospace;">${code}</span>
                <span style="font-size: 12px; color: #ef4444; display: block; margin-top: 8px;">⏱️ Expires in ${expiresInMinutes} minutes (Single-Use Only)</span>
              </div>
              
              <!-- Security Advisory -->
              <div style="padding: 16px; background-color: #1e1b4b; border-left: 4px solid #6366f1; border-radius: 6px; margin: 24px 0;">
                <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #c7d2fe;">
                  <strong>Security Reminder:</strong> Program Matrix staff will never ask you for this verification code. If you did not request this recovery, please investigate your server security immediately.
                </p>
              </div>
              
              <p style="margin: 24px 0 0; font-size: 12px; color: #6b7280; text-align: center;">
                This is an automated security notification. Do not reply to this email.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 16px 32px; background-color: #030712; border-top: 1px solid #1f2937; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #4b5563;">
                © 2026 Program Matrix • Program & Project Tracking Management System
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

  const transporter = createTransporter();

  if (transporter) {
    try {
      const info = await transporter.sendMail({
        from: fromEmail,
        to,
        subject,
        text: textContent,
        html: htmlContent,
      });
      console.log(`[EMAIL SERVICE] Verification email sent to ${to}: ${info.messageId}`);
      return { success: true, mode: 'smtp', messageId: info.messageId };
    } catch (error) {
      console.error('[EMAIL SERVICE ERROR] SMTP delivery failed:', error.message);
      // Still log fallback below so developer/admin is not blocked
    }
  }

  // Development / Offline Fallback Logger
  console.log('\n================================================================');
  console.log('✉️  [EMAIL DISPATCH - DEVELOPMENT & TESTING FALLBACK]');
  console.log('----------------------------------------------------------------');
  console.log(`  To:           ${to}`);
  console.log(`  Recipient:    ${adminName} (Program Manager)`);
  console.log(`  Subject:      ${subject}`);
  console.log(`  🔑 CODE:      >>> ${code} <<<`);
  console.log(`  Expires In:   ${expiresInMinutes} minutes`);
  console.log('----------------------------------------------------------------');
  console.log('  * Note: Configure SMTP_HOST/SMTP_USER/SMTP_PASS in .env for live email.');
  console.log('================================================================\n');

  return { success: true, mode: 'local_debug', code };
}
