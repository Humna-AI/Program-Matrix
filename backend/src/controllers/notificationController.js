import prisma from '../prisma.js';
import { cleanupExpiredNotifications, RETENTION_DAYS } from '../utils/notificationCleanup.js';

/**
 * Helper to safely create a notification
 */
export const createNotification = async ({ userId, title, message, type = 'general' }) => {
  try {
    if (!userId || !title || !message) return null;
    return await prisma.notification.create({
      data: {
        userId: parseInt(userId),
        title,
        message,
        type,
      },
    });
  } catch (error) {
    console.error('Error creating notification:', error);
    return null;
  }
};

/**
 * Fetch all notifications for the current authenticated user (within 15-day retention window)
 */
export const getNotifications = async (req, res) => {
  const userId = req.user.id;
  const cutoffDate = new Date(Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000);

  try {
    // Purge expired notifications in background
    cleanupExpiredNotifications().catch(() => {});

    const notifications = await prisma.notification.findMany({
      where: {
        userId,
        createdAt: { gte: cutoffDate },
      },
      orderBy: { createdAt: 'desc' },
      take: 40,
    });

    const unreadCount = await prisma.notification.count({
      where: {
        userId,
        isRead: false,
        createdAt: { gte: cutoffDate },
      },
    });

    res.json({ notifications, unreadCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch notifications.' });
  }
};

/**
 * Mark a single notification as read
 */
export const markNotificationRead = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const notification = await prisma.notification.findUnique({
      where: { id: parseInt(id) },
    });

    if (!notification || notification.userId !== userId) {
      return res.status(404).json({ error: 'Notification not found.' });
    }

    const updated = await prisma.notification.update({
      where: { id: parseInt(id) },
      data: { isRead: true },
    });

    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update notification.' });
  }
};

/**
 * Mark all notifications as read for current user (within retention window)
 */
export const markAllNotificationsRead = async (req, res) => {
  const userId = req.user.id;
  const cutoffDate = new Date(Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000);

  try {
    await prisma.notification.updateMany({
      where: {
        userId,
        isRead: false,
        createdAt: { gte: cutoffDate },
      },
      data: { isRead: true },
    });

    res.json({ message: 'All notifications marked as read.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to mark notifications as read.' });
  }
};

