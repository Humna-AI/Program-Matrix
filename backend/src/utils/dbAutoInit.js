import prisma from '../prisma.js';
import crypto from 'crypto';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hashPassword = (password) => crypto.createHash('sha256').update(password).digest('hex');

const initialProjects = [
  'D.E Temple Renovation',
  'Hyde-111 & 8855 Thailand',
  'WOHAVA',
  'Green Tourism Pakistan',
  'Media Projection IS-EII',
  'SCHOLARSHIP',
  'DIGITAL HUB',
  'AAA Support Services',
  'Paper Miracles',
  'Sunny Miracles',
  'COP-Airport Shop',
  'COP-Book Gandhara Ed...',
  'Sites Community',
  'Delegations',
  'Intl Gandhara Conference',
  'Manager Project',
  'Khanewal',
  'Gandhara Heritage Taskforce',
  'NGLF DPT',
  'NGLF Media Sub-group',
  'NextGen Leaders Forum',
  'Gates Foundation',
  'Atlantic Council',
];

export async function autoInitDatabase() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl || (!dbUrl.startsWith('postgresql://') && !dbUrl.startsWith('postgres://'))) {
    console.log('[DB Auto-Init] Notice: DATABASE_URL is not set to a PostgreSQL URL. Please configure it in your Render environment.');
    return;
  }

  try {
    // Check if tables exist by attempting a simple count
    await prisma.user.count();
  } catch (tableErr) {
    console.log('[DB Auto-Init] Database tables not found. Provisioning schema with prisma db push...');
    try {
      await new Promise((resolve, reject) => {
        const backendDir = path.resolve(__dirname, '../../');
        exec('npx prisma db push --skip-generate --accept-data-loss', { cwd: backendDir }, (error, stdout, stderr) => {
          if (error) {
            console.warn('[DB Auto-Init] Schema push output:', stderr || error.message);
            return resolve(); // Don't crash server
          }
          console.log('[DB Auto-Init] Database schema created successfully.');
          resolve();
        });
      });
    } catch (e) {}
  }

  try {
    // Seed primary administrator if not yet present
    const existingAdmin = await prisma.user.findFirst({ where: { role: 'admin' } });
    if (!existingAdmin) {
      const adminName = process.env.ADMIN_INITIAL_NAME || 'Shahrukh';
      const adminEmail = (process.env.ADMIN_INITIAL_EMAIL || 'Shahrukh@jobs-group.org').trim().toLowerCase();
      const adminPassword = process.env.ADMIN_INITIAL_PASSWORD || 'Shah_Rukh!2026K';
      const adminRecoveryKey = process.env.ADMIN_INITIAL_RECOVERY_KEY || 'ADM-2026-SHAHRUKH-ROOT';

      const admin = await prisma.user.create({
        data: {
          name: adminName,
          email: adminEmail,
          passwordHash: hashPassword(adminPassword),
          role: 'admin',
        },
      });

      await prisma.adminRecoveryKey.create({
        data: {
          adminId: admin.id,
          keyHash: hashPassword(adminRecoveryKey),
          isUsed: false,
        },
      });

      console.log(`[DB Auto-Init] Initialized primary Administrator: ${admin.email}`);

      for (const title of initialProjects) {
        await prisma.project.create({
          data: {
            title,
            description: `${title} initiative tracking and operations.`,
            createdById: admin.id,
          },
        });
      }
      console.log(`[DB Auto-Init] Initialized ${initialProjects.length} default projects.`);
    }
  } catch (seedErr) {
    console.warn('[DB Auto-Init] Notice during admin check:', seedErr.message);
  }
}
