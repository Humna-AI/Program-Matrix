# 🛡️ Program Matrix

A secure **Program and Project Tracking Management System** for managing projects, tasks, teams, documents, and performance through role-based dashboards and access control.

Built with **Node.js, Express.js, Prisma, SQLite, React, Vite, Tailwind CSS, and Nodemailer**.

## Features

* **Role-Based Access Control (RBAC)**

  * **Admin:** User, project, task, metrics, and access-log management
  * **Manager:** Project dashboard, task assignment, feedback, and tracking
  * **Executive:** Strategic project visibility and status reporting
  * **Employee:** Personal task management and status updates
* Project and task tracking
* Document upload and management
* Real-time analytics and dashboards
* Overdue task tracking
* Email-based password recovery
* Rate limiting and security controls
* Audit logging
* Dark and light mode

## Technology Stack

| Layer    | Technology                |
| -------- | ------------------------- |
| Frontend | React, Vite, Tailwind CSS |
| Backend  | Node.js, Express.js       |
| Database | SQLite                    |
| ORM      | Prisma                    |
| Email    | Nodemailer / SMTP         |

## 📁 Project Structure

```text
software-tracker/
├── backend/
│   ├── prisma/
│   │   ├── app.db
│   │   ├── schema.prisma
│   │   └── seed.js
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── index.js
│   ├── .env
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── package.json
└── README.md
```

## 🚀 Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/Humna-AI/Program-Matrix.git
cd Program-Matrix
```

### 2. Install dependencies

Install root dependencies:

```bash
npm install
```

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
cd ..
```

### 3. Configure environment variables

Create the backend environment file:

```bash
cd backend
cp .env.example .env
```

Update `.env` with your local configuration.

**Never commit `.env` or credentials to GitHub.**

### 4. Initialize Prisma

```bash
npx prisma generate
```

If migrations are required:

```bash
npx prisma migrate dev
```

### 5. Run the application

From the project root:

```bash
npm run dev
```

This starts the frontend and backend development servers.

You can also run them separately:

```bash
cd backend
npm run dev
```

and:

```bash
cd frontend
npm run dev
```

## Contributing

Contributions are welcome.

1. Create a feature branch:

```bash
git checkout -b feature/your-feature
```

2. Make and test your changes.

3. Commit:

```bash
git add .
git commit -m "Describe your changes"
```

4. Push your branch:

```bash
git push origin feature/your-feature
```

5. Open a Pull Request.

Please do not commit:

```text
node_modules/
.env
*.log
```

## 🔒 Security

Do not commit passwords, API keys, SMTP credentials, recovery keys, or other sensitive information.

If you discover a security issue, report it privately to the project maintainer rather than publicly exposing sensitive details.

## Project Status

This project is currently **not licensed for public reuse or redistribution**. Please contact the project owner regarding permissions for use, modification, or distribution.


