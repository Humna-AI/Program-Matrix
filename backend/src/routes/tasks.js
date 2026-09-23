import express from 'express';
import { getTasks, createTask, updateTaskStatus, getTaskStats, updateTaskAssignee, updateTaskDueDate, deleteTask, updateTaskFeedback } from '../controllers/taskController.js';
import { authenticateToken, requireRole } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticateToken, getTasks);
router.post('/', authenticateToken, requireRole(['admin', 'manager']), createTask);
router.patch('/:id/status', authenticateToken, updateTaskStatus);
router.patch('/:id/assignee', authenticateToken, updateTaskAssignee);
router.patch('/:id/due-date', authenticateToken, requireRole(['admin', 'manager']), updateTaskDueDate);
router.patch('/:id/feedback', authenticateToken, requireRole(['admin', 'manager']), updateTaskFeedback);
router.delete('/:id', authenticateToken, requireRole(['admin', 'manager']), deleteTask);
router.get('/stats', authenticateToken, requireRole(['admin', 'manager', 'executive']), getTaskStats);

export default router;
