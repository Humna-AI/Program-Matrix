import prisma from '../prisma.js';

export const getProjects = async (req, res) => {
  const { role, id: userId } = req.user;

  try {
    let projects;

    if (role === 'admin') {
      // Admins see admin and executive projects (manager-created projects remain private to managers)
      projects = await prisma.project.findMany({
        where: {
          createdBy: { role: { in: ['admin', 'executive'] } },
        },
        include: {
          createdBy: {
            select: { id: true, name: true, email: true, role: true, avatar: true },
          },
          tasks: {
            select: { id: true, status: true, dueDate: true },
          },
        },
        orderBy: { id: 'desc' },
      });
    } else if (role === 'executive') {
      projects = await prisma.project.findMany({
        include: {
          createdBy: {
            select: { id: true, name: true, email: true, role: true, avatar: true },
          },
          tasks: {
            select: { id: true, status: true, dueDate: true },
          },
        },
        orderBy: { id: 'desc' },
      });
    } else if (role === 'manager') {
      // Managers see projects they created or have tasks in
      projects = await prisma.project.findMany({
        where: {
          OR: [
            { createdById: userId },
            { createdBy: { role: 'executive' } },
            {
              tasks: {
                some: {
                  OR: [
                    { assignedToId: userId },
                    { assignedById: userId }
                  ]
                }
              }
            }
          ]
        },
        include: {
          createdBy: {
            select: { id: true, name: true, email: true, role: true, avatar: true },
          },
          tasks: {
            select: { id: true, status: true, dueDate: true },
          },
        },
        orderBy: { id: 'desc' },
      });
    } else {
      // Employees are not allowed to view project-level lists or metrics
      return res.status(403).json({ error: 'Access forbidden: Employees do not have access to high-level project metrics.' });
    }

    // Process projects data to calculate metrics
    const now = new Date();
    const formattedProjects = projects.map((p) => {
      const totalTasks = p.tasks.length;
      const completedTasks = p.tasks.filter((t) => t.status === 'completed').length;
      
      const overdueTasks = p.tasks.filter((t) => {
        return t.status !== 'completed' && new Date(t.dueDate) < now;
      }).length;

      const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

      return {
        id: p.id,
        title: p.title,
        description: p.description,
        link: p.link,
        createdBy: p.createdBy,
        metrics: {
          totalTasks,
          completedTasks,
          overdueTasks,
          progress,
        },
      };
    });

    res.json(formattedProjects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch projects.' });
  }
};

export const createProject = async (req, res) => {
  const { title, description, link } = req.body;
  const userId = req.user.id;

  if (!title) {
    return res.status(400).json({ error: 'Project title is required.' });
  }

  try {
    const project = await prisma.project.create({
      data: {
        title,
        description,
        link: link ? link.trim() : null,
        createdById: userId,
      },
      include: {
        createdBy: {
          select: { id: true, name: true, email: true, role: true },
        },
      },
    });

    res.status(201).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create project.' });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description, link } = req.body;
  const { role, id: userId } = req.user;

  if (!title || !title.trim()) {
    return res.status(400).json({ error: 'Project title is required.' });
  }

  try {
    const project = await prisma.project.findUnique({
      where: { id: parseInt(id) },
      include: { createdBy: { select: { id: true, role: true } } },
    });

    if (!project) {
      return res.status(404).json({ error: 'Project not found.' });
    }

    const canEdit = (role === 'admin' && project.createdBy.role === 'admin')
      || (role === 'manager' && project.createdById === userId);

    if (!canEdit) {
      return res.status(403).json({ error: 'Access forbidden: You can only edit projects you manage.' });
    }

    const updatedProject = await prisma.project.update({
      where: { id: parseInt(id) },
      data: {
        title: title.trim(),
        description: description?.trim() || null,
        link: link?.trim() || null,
      },
      include: {
        createdBy: { select: { id: true, name: true, email: true, role: true } },
      },
    });

    res.json(updatedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update project.' });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  const { role, id: userId } = req.user;

  try {
    const project = await prisma.project.findUnique({
      where: { id: parseInt(id) },
      include: {
        createdBy: { select: { id: true, role: true } },
      },
    });

    if (!project) {
      return res.status(404).json({ error: 'Project not found.' });
    }

    // Role check: Managers can only delete projects they created. Admins can only delete admin projects.
    if (role === 'manager' && project.createdById !== userId) {
      return res.status(403).json({ error: 'Access forbidden: You can only delete projects created by you.' });
    }
    if (role === 'admin' && project.createdBy.role !== 'admin') {
      return res.status(403).json({ error: 'Access forbidden: Admins cannot delete manager projects.' });
    }

    await prisma.project.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: 'Project deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete project.' });
  }
};
