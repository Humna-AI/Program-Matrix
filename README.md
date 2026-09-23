# 🛡️ Program Matrix — Program & Project Tracking Management System

A modern, secure, enterprise-grade Program and Project Management system built with strict **Role-Based Access Control (RBAC)**, real-time analytics, automated task tracking, and email-based password recovery.

Built with **Node.js/Express**, **Prisma ORM & SQLite**, **React + Vite + Tailwind CSS**, and **Nodemailer SMTP**.

---

## 🌟 Key Features

- 🔐 **Enterprise Role-Based Access Control (RBAC):**
  - **Program Manager (`admin`):** Global metrics, user account creation, project creation, task management, and access logs.
  - **Operations Lead (`manager`):** Project-level dashboard, task assignment, feedback, and tracking.
  - **Executive (`executive`):** Executive-level strategic visibility and status reporting.
  - **Employee (`employee`):** Dedicated personal To-Do portal, task status updater, and feedback viewer.
- ✉️ **Secure Admin Password Recovery Flow:**
  - 6-digit cryptographically random verification code sent via **SMTP (`info@jobs-group.org`)**.
  - Rate limiting, 10-minute expiry, max 5 failed attempts protection, and single-use tokens.
  - Emergency 16-character backup recovery key fallback.
- 📊 **Visual Analytics & Dashboard:** Real-time completion rates, interactive charts, and overdue tracking.
- 🌓 **Dark & Light Mode:** Seamless theme switching with persistent state.

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### 2. Install Dependencies
```bash
npm run install:all
```

### 3. Configure Environment Variables
Create or verify `backend/.env`:
```env
DATABASE_URL="file:./app.db"
JWT_SECRET="your-super-secret-jwt-key"
PORT=5000

# SMTP Email Configuration (Sender: info@jobs-group.org)
EMAIL_FROM="Program Matrix Security <info@jobs-group.org>"
SMTP_HOST=mail.jobs-group.org
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@jobs-group.org
SMTP_PASS=your_email_password_here

# Initial Admin Account Seed
ADMIN_INITIAL_NAME=Shahrukh
ADMIN_INITIAL_EMAIL=Shahrukh@jobs-group.org
ADMIN_INITIAL_PASSWORD=Shah_Rukh!2026K
ADMIN_INITIAL_RECOVERY_KEY=ADM-2026-SHAHRUKH-ROOT
```

### 4. Initialize Database
```bash
cd backend
npm run db:seed
```

### 5. Launch Development Servers
From the root project directory:
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser.

---

## 🔑 Primary Administrator Account

| Field | Details |
| :--- | :--- |
| **Portal** | Program Manager Portal (`/admin-login`) |
| **Email** | `Shahrukh@jobs-group.org` |
| **Password** | `Shah_Rukh!2026K` |
| **Role** | `admin` (Program Manager) |
| **Emergency Recovery Key** | `ADM-2026-SHAHRUKH-ROOT` |

*Other users (Managers, Executives, Employees) are created directly by the Program Manager from the User Management panel in the Dashboard.*

---

## 🛠️ Handy CLI Utilities & Scripts

From the root project folder:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs frontend and backend concurrently |
| `npm run test:email [recipient]` | Tests SMTP connection to `info@jobs-group.org` and dispatches test code |
| `npm run admin:recover [email] [newPassword]` | Server-side emergency CLI recovery for admin accounts |
| `npm run build --prefix frontend` | Compiles production React frontend into `frontend/dist` |

---

## 🌐 Production Deployment Guide

### Option 1: VPS / Linux Server (Ubuntu with Nginx + PM2)

1. **Install Node.js, PM2, & Nginx:**
   ```bash
   sudo apt update && sudo apt install -y nodejs npm nginx git
   sudo npm install -g pm2
   ```

2. **Clone & Build:**
   ```bash
   git clone <your-repo-url> /var/www/software-tracker
   cd /var/www/software-tracker
   npm run install:all
   npm run build --prefix frontend
   ```

3. **Configure Environment & Seed Database:**
   ```bash
   cd backend
   cp .env.example .env
   nano .env    # Configure your SMTP_PASS and JWT_SECRET
   npm run db:seed
   ```

4. **Start Application with PM2:**
   ```bash
   pm2 start src/index.js --name "program-matrix"
   pm2 save
   pm2 startup
   ```

5. **Nginx Reverse Proxy & SSL:**
   Configure `/etc/nginx/sites-available/software-tracker`:
   ```nginx
   server {
       listen 80;
       server_name tracker.jobs-group.org;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   Install SSL certificate with Certbot:
   ```bash
   sudo certbot --nginx -d tracker.jobs-group.org
   ```

---

### Option 2: Cloud Platform (Render / Railway)

1. Connect your GitHub repository.
2. **Build Command:**
   ```bash
   npm run install:all && npm run build --prefix frontend && cd backend && npm run db:seed
   ```
3. **Start Command:**
   ```bash
   cd backend && npm start
   ```
4. Add all environment variables (`JWT_SECRET`, `SMTP_PASS`, etc.) in the dashboard.

---

## 📁 Directory Structure

```
software-tracker/
├── backend/
│   ├── prisma/
│   │   ├── app.db              # SQLite Database
│   │   ├── schema.prisma       # Database Schema & Models
│   │   └── seed.js             # Seeds initial Admin account & base projects
│   ├── src/
│   │   ├── controllers/        # Route controllers (AdminAuth, Auth, Tasks, Projects)
│   │   ├── middleware/         # Auth, RateLimiter, Security
│   │   ├── routes/             # API routing
│   │   ├── utils/              # Email service, audit logger, CLI tools
│   │   └── index.js            # Express server entry point & static frontend serving
│   ├── .env                    # Environment configuration
│   └── .env.example            # Environment template guide
│
├── frontend/
│   ├── src/
│   │   ├── components/         # AdminLogin, AdminPasswordRecovery, Login, Dashboard, etc.
│   │   ├── context/            # AuthContext, ThemeContext
│   │   ├── App.jsx             # Router and role-based views
│   │   └── main.jsx            # Frontend entry point
│   ├── index.html              # HTML shell & font imports
│   ├── tailwind.config.js      # Custom theme & colors
│   └── vite.config.js          # Vite build configuration
│
├── package.json                # Root orchestration & scripts
└── README.md                   # Documentation
```
