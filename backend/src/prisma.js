import { PrismaClient } from './generated/client_v2/index.js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure .env files are loaded into process.env
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config();

// Canonical database location: backend/prisma/app.db
const backendDbDir = path.resolve(__dirname, '../prisma');
const canonicalDbPath = path.resolve(backendDbDir, 'app.db');

// Root database location: prisma/app.db (for processes running in root cwd)
const rootDbDir = path.resolve(__dirname, '../../prisma');
const rootDbPath = path.resolve(rootDbDir, 'app.db');

// Ensure directories exist
try {
  if (!fs.existsSync(backendDbDir)) fs.mkdirSync(backendDbDir, { recursive: true });
  if (!fs.existsSync(rootDbDir)) fs.mkdirSync(rootDbDir, { recursive: true });
} catch (e) {}

// Sync existing database between backend/prisma and root/prisma if one exists
try {
  if (fs.existsSync(canonicalDbPath) && !fs.existsSync(rootDbPath)) {
    fs.copyFileSync(canonicalDbPath, rootDbPath);
  } else if (!fs.existsSync(canonicalDbPath) && fs.existsSync(rootDbPath)) {
    fs.copyFileSync(rootDbPath, canonicalDbPath);
  }
} catch (e) {}

// Determine absolute database URL
let dbUrl = `file:${canonicalDbPath}`;

if (process.env.DATABASE_URL && process.env.DATABASE_URL.trim() !== '') {
  let envUrl = process.env.DATABASE_URL.trim();
  if (!envUrl.startsWith('file:')) {
    envUrl = `file:${envUrl}`;
  }
  const cleanPath = envUrl.replace('file:', '');
  if (path.isAbsolute(cleanPath)) {
    dbUrl = `file:${cleanPath}`;
  } else {
    // If it's a relative path, resolve it against backend or cwd
    if (fs.existsSync(canonicalDbPath)) {
      dbUrl = `file:${canonicalDbPath}`;
    } else {
      dbUrl = `file:${path.resolve(process.cwd(), cleanPath)}`;
    }
  }
}

// Ensure process.env.DATABASE_URL matches
process.env.DATABASE_URL = dbUrl;

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: dbUrl,
    },
  },
});

export default prisma;
