#!/usr/bin/env node
/**
 * Cross-Platform Production Build & Database Setup Runner
 * Safe for SiteGround, cPanel, VPS, Render, and Local environments.
 */

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function run(cmd, cwd = __dirname) {
  console.log(`\n▶ Running: ${cmd} (in ${cwd})`);
  execSync(cmd, { stdio: 'inherit', cwd });
}

try {
  console.log('================================================================');
  console.log('🚀 PROGRAM MATRIX: PRODUCTION BUILD & DATABASE PROVISIONING');
  console.log('================================================================');

  // Step 1: Frontend Build
  console.log('\n📦 Step 1: Installing frontend dependencies and building production client...');
  run('npm install --include=dev', path.join(__dirname, 'frontend'));
  run('npm run build', path.join(__dirname, 'frontend'));

  // Step 2: Backend Dependencies & Prisma
  console.log('\n⚙️  Step 2: Installing backend dependencies and generating Prisma client...');
  run('npm install --include=dev', path.join(__dirname, 'backend'));
  run('npx prisma generate', path.join(__dirname, 'backend'));

  // Step 3: Database Schema & Seeding
  console.log('\n🗄️  Step 3: Initializing database schema and seeding Administrator...');
  run('npx prisma db push --skip-generate --accept-data-loss', path.join(__dirname, 'backend'));
  run('node prisma/seed.js', path.join(__dirname, 'backend'));

  console.log('\n================================================================');
  console.log('🎉 BUILD & DATABASE SETUP COMPLETED SUCCESSFULLY!');
  console.log('================================================================\n');
} catch (error) {
  console.error('\n❌ Build process encountered an error:', error.message);
  process.exit(1);
}
