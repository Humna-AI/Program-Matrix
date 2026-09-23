# 🛡️ Program Matrix - Program & Project Tracking Management System

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
  - 6-digit cryptographically random verification code sent via **SMTP (`Your Enter Email`)**.
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


