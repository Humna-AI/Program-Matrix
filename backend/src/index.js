import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Route Imports
import authRoutes from './routes/auth.js';
import projectRoutes from './routes/projects.js';
import taskRoutes from './routes/tasks.js';
import notificationRoutes from './routes/notifications.js';
import { initNotificationCleanupJob } from './utils/notificationCleanup.js';

// Resolve __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from backend directory first, then fallback to root
dotenv.config({ path: path.join(__dirname, '../.env') });
dotenv.config();

// Ensure DATABASE_URL fallback exists and has valid file: prefix for SQLite
if (!process.env.DATABASE_URL || process.env.DATABASE_URL.trim() === '') {
  const dbPath = path.resolve(__dirname, '../prisma/app.db');
  process.env.DATABASE_URL = `file:${dbPath}`;
} else if (!process.env.DATABASE_URL.startsWith('file:')) {
  process.env.DATABASE_URL = `file:${process.env.DATABASE_URL}`;
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date() });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/notifications', notificationRoutes);

// Serve Frontend Static Files in Production
const frontendBuildPath = path.join(__dirname, '../../frontend/dist');
app.use(express.static(frontendBuildPath));

// Catch-all route to serve the React index.html in production (Single Page App routing)
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(frontendBuildPath, 'index.html'), (err) => {
    if (err) {
      // In dev, the static files won't exist yet, which is expected
      res.status(404).send('Not Found');
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'An internal server error occurred.' });
});

// Start Server (supports Passenger & standard Node environments)
if (typeof PhusionPassenger !== 'undefined') {
  PhusionPassenger.configure({ autoInstall: false });
  app.listen('passenger', () => {
    console.log('Program Matrix Backend running under Phusion Passenger');
    initNotificationCleanupJob();
  });
} else {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Program Matrix Backend server is running on port ${PORT} with active database`);
    initNotificationCleanupJob();
  });
}

