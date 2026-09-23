import express from 'express';
import {
  adminLogin,
  adminForgotPassword,
  adminVerifyCode,
  adminResetPassword,
  adminEmergencyRecovery,
  adminGetRecoveryKey,
  adminGenerateRecoveryKey,
} from '../controllers/adminAuthController.js';
import {
  adminLoginLimiter,
  forgotPasswordLimiter,
  verifyCodeLimiter,
  resetPasswordLimiter,
  emergencyRecoveryLimiter,
} from '../middleware/rateLimiter.js';
import { authenticateToken, requireRole } from '../middleware/auth.js';

const router = express.Router();

/**
 * Public Admin Auth & Recovery Routes (Strictly Rate-Limited & Cryptographically Protected)
 */
router.post('/login', adminLoginLimiter, adminLogin);
router.post('/forgot-password', forgotPasswordLimiter, adminForgotPassword);
router.post('/verify-code', verifyCodeLimiter, adminVerifyCode);
router.post('/reset-password', resetPasswordLimiter, adminResetPassword);
router.post('/emergency-recovery', emergencyRecoveryLimiter, adminEmergencyRecovery);

/**
 * Protected Admin Recovery Key Management
 */
router.get('/recovery-key', authenticateToken, requireRole(['admin']), adminGetRecoveryKey);
router.post('/recovery-key/generate', authenticateToken, requireRole(['admin']), adminGenerateRecoveryKey);

export default router;
