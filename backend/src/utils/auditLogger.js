import prisma from '../prisma.js';

/**
 * Record a security event into the SecurityAuditLog table
 * @param {Object} options
 * @param {number|null} options.userId - User ID if known
 * @param {string} options.event - Event code (e.g. 'ADMIN_LOGIN_SUCCESS')
 * @param {import('express').Request} [options.req] - Express request object to extract IP and user-agent
 * @param {string} [options.details] - Sanitized details or context
 */
export async function logSecurityEvent({ userId = null, event, req = null, details = null }) {
  try {
    let ipAddress = null;
    let userAgent = null;

    if (req) {
      ipAddress = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || req.ip || null;
      if (typeof ipAddress === 'string' && ipAddress.includes(',')) {
        ipAddress = ipAddress.split(',')[0].trim();
      }
      userAgent = req.headers['user-agent'] || null;
      if (userAgent && userAgent.length > 255) {
        userAgent = userAgent.substring(0, 255);
      }
    }

    await prisma.securityAuditLog.create({
      data: {
        userId: userId ? parseInt(userId) : null,
        event,
        ipAddress: ipAddress ? String(ipAddress) : null,
        userAgent: userAgent ? String(userAgent) : null,
        details: details ? String(details) : null,
      },
    });
  } catch (err) {
    // Audit logging should never crash request handling, but log to stderr for monitoring
    console.error('[SECURITY AUDIT ERROR] Failed to record audit log:', err.message);
  }
}
