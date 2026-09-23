import express from 'express';
import { getProjects, createProject, updateProject, deleteProject } from '../controllers/projectController.js';
import { authenticateToken, requireRole } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticateToken, requireRole(['admin', 'manager', 'executive']), getProjects);
router.post('/', authenticateToken, requireRole(['admin', 'manager', 'executive']), createProject);
router.patch('/:id', authenticateToken, requireRole(['admin', 'manager']), updateProject);
router.delete('/:id', authenticateToken, requireRole(['admin', 'manager']), deleteProject);

export default router;
