import rateLimit from 'express-rate-limit';

/**
 * Rate limiter for Admin Login attempts
 */
export const adminLoginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many Admin login attempts from this IP address. Please try again after 15 minutes.',
  },
});

/**
 * Rate limiter for Password Reset / Verification Code Requests
 */
export const forgotPasswordLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many password recovery requests. Please wait 15 minutes before requesting a new code.',
  },
});

/**
 * Rate limiter for Verification Code Attempts
 */
export const verifyCodeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many verification attempts from this IP. Please wait 15 minutes or request a new code.',
  },
});

/**
 * Rate limiter for Setting New Password
 */
export const resetPasswordLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many password reset attempts from this IP. Please wait 15 minutes.',
  },
});

/**
 * Rate limiter for Emergency Recovery Key Attempts
 */
export const emergencyRecoveryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many emergency recovery attempts. Please wait 15 minutes.',
  },
});
