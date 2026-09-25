import express from 'express';
import { 
  register, 
  login, 
  logout, 
  me, 
  updateProfile,
  getUsers,
  getAdminUsers,
  adminCreateUser,
  adminUpdateUser,
  adminChangePassword,
  adminDeleteUser
} from '../controllers/authController.js';
import adminAuthRoutes from './adminAuth.js';
import { authenticateToken, requireRole } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', authenticateToken, me);
router.put('/profile', authenticateToken, updateProfile);
router.get('/users', authenticateToken, getUsers);

// Dedicated Admin Authentication & Password Recovery Sub-Router
router.use('/admin', adminAuthRoutes);

// Admin-only User Management Routes
router.get('/admin/users', authenticateToken, requireRole(['admin']), getAdminUsers);
router.post('/admin/users', authenticateToken, requireRole(['admin']), adminCreateUser);
router.put('/admin/users/:id', authenticateToken, requireRole(['admin']), adminUpdateUser);
router.patch('/admin/users/:id/password', authenticateToken, requireRole(['admin']), adminChangePassword);
router.delete('/admin/users/:id', authenticateToken, requireRole(['admin']), adminDeleteUser);

export default router;

