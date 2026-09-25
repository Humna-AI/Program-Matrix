import prisma from '../prisma.js';
import { createNotification } from './notificationController.js';

export const getTasks = async (req, res) => {
  const { role, id: userId } = req.user;
  const { startDate, endDate, dateType = 'dueDate', status, projectId, assignedToId } = req.query;

  try {
    const taskInclude = {
      project: { select: { id: true, title: true, link: true } },
      assignedTo: { select: { id: true, name: true, email: true, avatar: true } },
      assignedBy: { select: { id: true, name: true, email: true, avatar: true } },
      histories: {
        include: {
          changedBy: { select: { id: true, name: true, avatar: true } }
        },
        orderBy: { createdAt: 'desc' }
      }
    };

    let baseWhere = {};

    if (role === 'admin') {
      // Admins see tasks belonging to admin-created projects
      baseWhere = {
        project: { createdBy: { role: 'admin' } },
      };
    } else if (role === 'manager') {
      // Managers see tasks they created, are assigned to, or are in projects they created
      baseWhere = {
        OR: [
          { assignedById: userId },
          { assignedToId: userId },
          { project: { createdById: userId } },
        ],
      };
    } else {
      baseWhere = { assignedToId: userId };
    }

    const whereConditions = [baseWhere];

    // Date filtering if provided
    const targetDateField = dateType === 'createdAt' ? 'createdAt' : 'dueDate';
    if (startDate || endDate) {
      const dateFilter = {};
      if (startDate) {
        dateFilter.gte = new Date(startDate);
      }
      if (endDate) {
        const end = new Date(endDate);
        if (endDate.length === 10) {
          end.setHours(23, 59, 59, 999);
        }
        dateFilter.lte = end;
      }
      whereConditions.push({ [targetDateField]: dateFilter });
    }

    // Status filter
    if (status && status !== 'all') {
      if (status === 'overdue') {
        whereConditions.push({
          status: { not: 'completed' },
          dueDate: { lt: new Date() }
        });
      } else {
        whereConditions.push({ status });
      }
    }

    // Project filter
    if (projectId && projectId !== 'all') {
      whereConditions.push({ projectId: parseInt(projectId) });
    }

    // Assignee filter
    if (assignedToId && assignedToId !== 'all') {
      whereConditions.push({ assignedToId: parseInt(assignedToId) });
    }

    const tasks = await prisma.task.findMany({
      where: whereConditions.length === 1 ? whereConditions[0] : { AND: whereConditions },
      include: taskInclude,
      orderBy: { dueDate: 'asc' },
    });

    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch tasks.' });
  }
};

export const createTask = async (req, res) => {
  const { projectId, title, description, assignedToId, dueDate } = req.body;
  const userId = req.user.id;

  if (!projectId || !title || !assignedToId || !dueDate) {
    return res.status(400).json({ error: 'Project ID, title, assignee ID, and due date are required.' });
  }

  try {
    const task = await prisma.task.create({
      data: {
        projectId: parseInt(projectId),
        title,
        description,
        assignedToId: parseInt(assignedToId),
        assignedById: userId,
        dueDate: new Date(dueDate),
        status: 'not_started', // default status
      },
      include: {
        project: { select: { id: true, title: true } },
        assignedTo: { select: { id: true, name: true, email: true, avatar: true } },
        assignedBy: { select: { id: true, name: true, email: true, avatar: true } },
      },
    });

    // Notify assigned user if assigned by someone else
    if (parseInt(assignedToId) !== userId) {
      createNotification({
        userId: parseInt(assignedToId),
        title: 'New Task Assigned',
        message: `${req.user.name} assigned you a new task: "${title}".`,
        type: 'task_assigned',
      });
    }

    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create task.' });
  }
};

export const updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const { role, id: userId } = req.user;

  const validStatuses = ['not_started', 'in_progress', 'completed'];
  if (!status || !validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Invalid task status.' });
  }

  try {
    const task = await prisma.task.findUnique({ where: { id: parseInt(id) } });

    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    // Role-based validation
    if (role === 'employee' && task.assignedToId !== userId) {
      return res.status(403).json({ error: 'Access forbidden: You cannot modify other users tasks.' });
    }

    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { status },
      include: {
        project: { select: { id: true, title: true } },
        assignedTo: { select: { id: true, name: true, email: true } },
        assignedBy: { select: { id: true, name: true, email: true } },
      },
    });

    // Notification on task completion
    if (status === 'completed') {
      if (task.assignedById !== userId) {
        createNotification({
          userId: task.assignedById,
          title: 'Task Completed',
          message: `${req.user.name} completed task "${task.title}".`,
          type: 'task_completed',
        });
      }

      // Check if the entire project is completed
      try {
        const remainingIncomplete = await prisma.task.count({
          where: {
            projectId: task.projectId,
            id: { not: task.id },
            status: { not: 'completed' },
          },
        });

        if (remainingIncomplete === 0) {
          const proj = await prisma.project.findUnique({
            where: { id: task.projectId },
            select: { id: true, title: true, createdById: true },
          });
          if (proj && proj.createdById) {
            createNotification({
              userId: proj.createdById,
              title: 'Project Completed! 🎉',
              message: `All tasks in project "${proj.title}" have been successfully completed!`,
              type: 'project_completed',
            });
          }
        }
      } catch (err) {
        console.error('Error checking project completion notification:', err);
      }
    }

    res.json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update task status.' });
  }
};

export const getTaskStats = async (req, res) => {
  const { role, id: userId } = req.user;

  // Employees cannot view high level stats
  if (role === 'employee') {
    return res.status(403).json({ error: 'Access forbidden: Employees do not have access to high-level statistics.' });
  }

  try {
    const now = new Date();

    // Query filters based on role
    const taskFilter = role === 'admin' ? {
      project: { createdBy: { role: { in: ['admin', 'executive'] } } },
    } : role === 'executive' ? {} : {
      OR: [
        { assignedById: userId },
        { assignedToId: userId },
        { project: { createdById: userId } },
      ],
    };

    const projectFilter = role === 'admin' ? {
      createdBy: { role: { in: ['admin', 'executive'] } },
    } : role === 'executive' ? {} : {
      OR: [
        { createdById: userId },
        { tasks: { some: { OR: [{ assignedToId: userId }, { assignedById: userId }] } } },
      ],
    };

    // Fetch total projects
    const totalProjects = await prisma.project.count({ where: projectFilter });

    // Fetch all tasks matching the filter
    const tasks = await prisma.task.findMany({ where: taskFilter });

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((t) => t.status === 'completed').length;
    
    // Active tasks: not completed
    const activeTasks = tasks.filter((t) => t.status !== 'completed').length;

    // Overdue tasks: not completed and due date is in the past
    const overdueTasks = tasks.filter((t) => {
      return t.status !== 'completed' && new Date(t.dueDate) < now;
    }).length;

    // 4-category breakdown logic
    let completedCount = 0;
    let overdueCount = 0;
    let inProgressCount = 0;
    let notStartedCount = 0;

    tasks.forEach((t) => {
      if (t.status === 'completed') {
        completedCount++;
      } else if (new Date(t.dueDate) < now) {
        overdueCount++;
      } else if (t.status === 'in_progress') {
        inProgressCount++;
      } else {
        notStartedCount++;
      }
    });

    res.json({
      totalProjects,
      totalTasks,
      activeTasks,
      completedTasks,
      overdueTasks,
      breakdown: {
        completed: completedCount,
        inProgress: inProgressCount,
        overdue: overdueCount,
        notStarted: notStartedCount,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch task metrics.' });
  }
};

export const updateTaskAssignee = async (req, res) => {
  const { id } = req.params;
  const { assignedToId } = req.body;
  const { id: userId } = req.user;

  if (!assignedToId) {
    return res.status(400).json({ error: 'Assigned user ID is required.' });
  }

  try {
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) },
      include: {
        assignedTo: { select: { id: true, name: true } }
      }
    });

    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    const newAssignee = await prisma.user.findUnique({
      where: { id: parseInt(assignedToId) },
      select: { id: true, name: true }
    });

    if (!newAssignee) {
      return res.status(404).json({ error: 'New assignee user not found.' });
    }

    const oldAssigneeName = task.assignedTo.name;
    const newAssigneeName = newAssignee.name;

    // Check if assignee actually changed
    if (task.assignedToId !== parseInt(assignedToId)) {
      await prisma.$transaction([
        prisma.task.update({
          where: { id: parseInt(id) },
          data: { assignedToId: parseInt(assignedToId) }
        }),
        prisma.taskHistory.create({
          data: {
            taskId: parseInt(id),
            changedById: userId,
            oldValue: oldAssigneeName,
            newValue: newAssigneeName
          }
        })
      ]);
    }

    const updatedTask = await prisma.task.findUnique({
      where: { id: parseInt(id) },
      include: {
        project: { select: { id: true, title: true } },
        assignedTo: { select: { id: true, name: true, email: true } },
        assignedBy: { select: { id: true, name: true, email: true } },
        histories: {
          include: {
            changedBy: { select: { id: true, name: true } }
          },
          orderBy: { createdAt: 'desc' }
        }
      }
    });

    // Notify new assignee if changed
    if (parseInt(assignedToId) !== userId && updatedTask) {
      createNotification({
        userId: parseInt(assignedToId),
        title: 'Task Re-assigned to You',
        message: `${req.user.name} re-assigned task "${updatedTask.title}" to you.`,
        type: 'task_assigned',
      });
    }

    res.json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update task assignee.' });
  }
};

export const updateTaskDueDate = async (req, res) => {
  const { id } = req.params;
  const { dueDate } = req.body;
  const { role, id: userId } = req.user;

  if (!dueDate || Number.isNaN(new Date(dueDate).getTime())) {
    return res.status(400).json({ error: 'A valid due date is required.' });
  }

  try {
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) },
      include: {
        project: { select: { createdById: true, createdBy: { select: { role: true } } } },
      },
    });

    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    const canEdit = role === 'admin'
      ? task.project.createdBy?.role === 'admin'
      : role === 'manager' && (task.assignedById === userId || task.project.createdById === userId);

    if (!canEdit) {
      return res.status(403).json({ error: 'Access forbidden: You cannot edit this task deadline.' });
    }

    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { dueDate: new Date(dueDate) },
      include: {
        project: { select: { id: true, title: true, link: true } },
        assignedTo: { select: { id: true, name: true, email: true } },
        assignedBy: { select: { id: true, name: true, email: true } },
        histories: {
          include: { changedBy: { select: { id: true, name: true } } },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    res.json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update task deadline.' });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const { role, id: userId } = req.user;

  try {
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) },
      include: {
        project: { select: { createdById: true } }
      }
    });

    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    // Role check: Admins can delete any task. Managers can delete tasks they created or in projects they created.
    if (role !== 'admin' && (role !== 'manager' || (task.assignedById !== userId && task.project.createdById !== userId))) {
      return res.status(403).json({ error: 'Access forbidden: Insufficient permissions to delete this task.' });
    }

    await prisma.task.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: 'Task deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete task.' });
  }
};

export const updateTaskFeedback = async (req, res) => {
  const { id } = req.params;
  const { feedback } = req.body;
  const { role, id: userId } = req.user;

  try {
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) },
      include: {
        project: { select: { id: true, title: true, createdById: true, createdBy: { select: { role: true } } } },
      },
    });

    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    // Role check: Admin can give feedback on admin projects. Manager can give feedback on manager tasks/projects.
    if (role === 'admin' && task.project.createdBy?.role !== 'admin') {
      return res.status(403).json({ error: 'Access forbidden: Admins cannot manage manager tasks.' });
    }
    if (role === 'manager' && (task.assignedById !== userId && task.project.createdById !== userId)) {
      return res.status(403).json({ error: 'Access forbidden: You can only provide feedback on tasks you created or in your projects.' });
    }

    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { feedback: feedback !== undefined ? (feedback ? feedback.trim() : null) : null },
      include: {
        project: { select: { id: true, title: true, link: true } },
        assignedTo: { select: { id: true, name: true, email: true } },
        assignedBy: { select: { id: true, name: true, email: true } },
        histories: {
          include: {
            changedBy: { select: { id: true, name: true } },
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    // Notify employee of feedback
    if (feedback && feedback.trim() && task.assignedToId !== userId) {
      const preview = feedback.trim().length > 60 ? feedback.trim().substring(0, 60) + '...' : feedback.trim();
      createNotification({
        userId: task.assignedToId,
        title: 'Supervisor Feedback Received',
        message: `${req.user.name} added feedback on task "${task.title}": "${preview}"`,
        type: 'feedback_added',
      });
    }

    res.json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update task feedback.' });
  }
};

