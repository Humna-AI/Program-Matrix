#!/usr/bin/env node
/**
 * Cross-Platform Production Build & Database Setup Runner
 * Safe for SiteGround, cPanel, VPS, Render, and Local environments.
 */

import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to parse .env file without external dependencies
function loadEnvFile(filePath) {
  if (fs.existsSync(filePath)) {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      content.split('\n').forEach((line) => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
          const idx = trimmed.indexOf('=');
          const key = trimmed.slice(0, idx).trim();
          let val = trimmed.slice(idx + 1).trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
          }
          if (!process.env[key]) {
            process.env[key] = val;
          }
        }
      });
    } catch (e) { }
  }
}

loadEnvFile(path.join(__dirname, 'backend/.env'));
loadEnvFile(path.join(__dirname, '.env'));

let dbUrl = process.env.DATABASE_URL;

const buildEnv = {
  ...process.env,
  ...(dbUrl ? { DATABASE_URL: dbUrl } : {}),
};

// Also write or ensure backend/.env has DATABASE_URL for Prisma sub-processes if available
if (dbUrl) {
  try {
    const backendEnvPath = path.join(__dirname, 'backend/.env');
    let content = '';
    if (fs.existsSync(backendEnvPath)) {
      content = fs.readFileSync(backendEnvPath, 'utf-8');
    }
    if (!content.includes('DATABASE_URL=')) {
      content += `\nDATABASE_URL="${dbUrl}"\n`;
      fs.writeFileSync(backendEnvPath, content);
    } else {
      content = content.replace(/^DATABASE_URL=.*/m, `DATABASE_URL="${dbUrl}"`);
      fs.writeFileSync(backendEnvPath, content);
    }
  } catch (e) {
    // Continue if filesystem is read-only for new files
  }
}

function run(cmd, cwd = __dirname) {
  console.log(`\n▶ Running: ${cmd} (in ${cwd})`);
  execSync(cmd, { stdio: 'inherit', cwd, env: buildEnv });
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
  const isPostgresUrl = dbUrl && (dbUrl.startsWith('postgresql://') || dbUrl.startsWith('postgres://'));

  if (isPostgresUrl) {
    try {
      console.log('Valid PostgreSQL DATABASE_URL detected. Synchronizing schema & seeding...');
      run('npx prisma db push --skip-generate --accept-data-loss', path.join(__dirname, 'backend'));
      run('node prisma/seed.js', path.join(__dirname, 'backend'));
    } catch (dbErr) {
      console.warn('\n⚠️ Database sync warning during build:', dbErr.message);
      console.warn('The build will continue. Ensure the PostgreSQL database is reachable from your server.\n');
    }
  } else {
    console.log('\nℹ️  Notice: No valid PostgreSQL DATABASE_URL detected in build environment.');
    console.log('   (Current value: ' + (dbUrl ? `"${dbUrl.slice(0, 15)}..."` : 'undefined') + ')');
    console.log('👉 To enable persistent cloud database storage on Render:');
    console.log('   1. Create a PostgreSQL database on Render Dashboard');
    console.log('   2. Set "DATABASE_URL" in your Web Service Environment Variables');
    console.log('   Skipping database schema push during static asset build phase.\n');
  }

  console.log('================================================================');
  console.log('🎉 BUILD PROCESS COMPLETED SUCCESSFULLY!');
  console.log('================================================================\n');
} catch (error) {
  console.error('\n❌ Build process encountered an error:', error.message);
  process.exit(1);
}
