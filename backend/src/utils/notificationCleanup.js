import prisma from '../prisma.js';

export const RETENTION_DAYS = 15;

/**
 * Delete all notifications older than RETENTION_DAYS (15 days)
 * @returns {Promise<number>} Number of deleted notifications
 */
export const cleanupExpiredNotifications = async () => {
  try {
    const cutoffDate = new Date(Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000);

    const result = await prisma.notification.deleteMany({
      where: {
        createdAt: {
          lt: cutoffDate,
        },
      },
    });

    if (result.count > 0) {
      console.log(`[Auto-Cleanup] Purged ${result.count} notification(s) older than ${RETENTION_DAYS} days.`);
    }

    return result.count;
  } catch (error) {
    console.error('[Auto-Cleanup] Error purging expired notifications:', error);
    return 0;
  }
};

/**
 * Initialize automatic background cleanup job for expired notifications
 * Runs immediately on startup and repeats periodically every hour
 */
export const initNotificationCleanupJob = () => {
  // Run once immediately on startup
  cleanupExpiredNotifications();

  // Run periodically every 1 hour (3,600,000 ms)
  const INTERVAL_MS = 60 * 60 * 1000;
  const intervalId = setInterval(cleanupExpiredNotifications, INTERVAL_MS);

  if (intervalId && intervalId.unref) {
    intervalId.unref();
  }

  console.log(`[Auto-Cleanup] Notification auto-cleanup initialized (runs every hour, 15-day retention policy).`);
};
