import { PrismaClient } from '../src/generated/client/index.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Updating user names...');
  
  await prisma.user.updateMany({
    where: { email: 'admin@example.com' },
    data: { name: 'Admin' },
  });

  await prisma.user.updateMany({
    where: { email: 'manager@example.com' },
    data: { name: 'Manager' },
  });

  await prisma.user.updateMany({
    where: { email: 'humna@example.com' },
    data: { name: 'Employee 1' },
  });

  await prisma.user.updateMany({
    where: { email: 'hussain@example.com' },
    data: { name: 'Employee 2' },
  });

  console.log('User names updated successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
