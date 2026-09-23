import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import AdminPasswordRecovery from './components/AdminPasswordRecovery';
import Dashboard from './components/Dashboard';
import EmployeePortal from './components/EmployeePortal';

function AppContent() {
  const { user, loading } = useAuth();
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo(0, 0);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-950 dark:bg-slate-950 gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"></div>
        <p className="text-slate-400 text-sm">Verifying secure credentials...</p>
      </div>
    );
  }

  // 1. Admin Authentication & Recovery Flow Routes (available when not logged in or switching)
  if (currentPath === '/admin-login' || currentPath === '/admin') {
    if (user && user.role === 'admin') {
      navigate('/admin/dashboard');
    } else {
      return <AdminLogin onNavigate={navigate} />;
    }
  }

  if (currentPath === '/admin/forgot-password') {
    return <AdminPasswordRecovery initialStep="email" onNavigate={navigate} />;
  }

  if (currentPath === '/admin/verify-code') {
    return <AdminPasswordRecovery initialStep="verify" onNavigate={navigate} />;
  }

  if (currentPath === '/admin/reset-password') {
    return <AdminPasswordRecovery initialStep="new-password" onNavigate={navigate} />;
  }

  if (currentPath === '/admin/recovery') {
    return <AdminPasswordRecovery initialStep="emergency" onNavigate={navigate} />;
  }

  // 2. Normal Login Screen (if not logged in)
  if (!user) {
    return <Login onNavigate={navigate} />;
  }

  // 3. Logged-in Protected Application
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 app-container transition-colors duration-200">
      <Navbar onNavigate={navigate} />
      <main className="flex-1">
        {user.role === 'employee' ? (
          <EmployeePortal />
        ) : (
          <Dashboard />
        )}
      </main>
      <footer className="py-6 border-t border-slate-900 bg-slate-950 text-center text-xs text-slate-600 transition-colors duration-200">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
          <p>© 2026 Program Matrix • Program & Project Tracking Management System. Enforced with RBAC.</p>
          <button
            onClick={() => navigate('/admin-login')}
            className="text-slate-500 hover:text-slate-400 transition"
          >
            Program Manager Portal
          </button>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}
