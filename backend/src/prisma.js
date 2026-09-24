import { PrismaClient } from './generated/client_v2/index.js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure .env files are loaded
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config();

// Unified Single Canonical Database Path: backend/prisma/app.db
const backendDbDir = path.resolve(__dirname, '../prisma');
const canonicalDbPath = path.resolve(backendDbDir, 'app.db');

// Ensure parent directory exists
try {
  if (!fs.existsSync(backendDbDir)) {
    fs.mkdirSync(backendDbDir, { recursive: true });
  }
} catch (e) {}

// If an older root prisma/app.db exists and backend/prisma/app.db is missing, move it over
try {
  const rootDbPath = path.resolve(__dirname, '../../prisma/app.db');
  if (fs.existsSync(rootDbPath) && !fs.existsSync(canonicalDbPath)) {
    fs.copyFileSync(rootDbPath, canonicalDbPath);
  }
} catch (e) {}

const absoluteDbUrl = `file:${canonicalDbPath}`;
process.env.DATABASE_URL = absoluteDbUrl;

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: absoluteDbUrl,
    },
  },
});

export default prisma;
