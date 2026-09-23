import { PrismaClient } from '../src/generated/client_v2/index.js';
import crypto from 'crypto';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const prisma = new PrismaClient();

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

async function main() {
  // Admin credentials from environment with secure defaults
  const adminName = process.env.ADMIN_INITIAL_NAME || 'Shahrukh';
  const adminEmail = (process.env.ADMIN_INITIAL_EMAIL || 'Shahrukh@jobs-group.org').trim().toLowerCase();
  const adminPassword = process.env.ADMIN_INITIAL_PASSWORD || 'Shah_Rukh!2026K';
  const adminRecoveryKey = process.env.ADMIN_INITIAL_RECOVERY_KEY || 'ADM-2026-SHAHRUKH-ROOT';

  const existingAdmin = await prisma.user.findFirst({ where: { role: 'admin' } });

  if (!existingAdmin) {
    console.log('No Administrator found. Seeding primary Administrator account...');
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

    console.log(`Created Administrator: ${admin.email} (ID: ${admin.id})`);

    console.log('Seeding initial projects...');
    for (const title of initialProjects) {
      await prisma.project.create({
        data: {
          title,
          description: `${title} initiative tracking and operations.`,
          createdById: admin.id,
        },
      });
    }
    console.log(`Successfully created ${initialProjects.length} projects.`);
  } else {
    console.log(`Administrator account already exists (${existingAdmin.email}). Skipping seed initialization.`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
