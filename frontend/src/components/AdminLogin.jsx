import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { ShieldCheck, Lock, Mail, AlertCircle, Sun, Moon, ArrowLeft, KeyRound, Eye, EyeOff, ShieldAlert, LifeBuoy } from 'lucide-react';

export default function AdminLogin({ onNavigate }) {
  const { fetchProfile } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Program Manager authentication failed.');
      }

      // Refresh authentication profile in context
      await fetchProfile();
      if (onNavigate) {
        onNavigate('/admin/dashboard');
      }
    } catch (err) {
      console.error(err);
      setFormError(err.message || 'Authentication error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black px-4 py-12 sm:px-6 lg:px-8 transition-colors duration-200">

      {/* Top Bar Navigation */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <button
          onClick={() => onNavigate('/')}
          className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition duration-200"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>User Login</span>
        </button>
      </div>

      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <button
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle Theme"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-750 bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-slate-600 transition duration-200 cursor-pointer group"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
          ) : (
            <Moon className="h-5 w-5 text-indigo-500 transition-transform duration-300 group-hover:-rotate-12" />
          )}
        </button>
      </div>

      {/* Admin Branding Header */}
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-rose-600 via-indigo-600 to-purple-600 p-0.5 shadow-xl shadow-rose-600/20">
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950">
            <ShieldCheck className="h-7 w-7 text-rose-500" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-white font-outfit">Program Manager Portal</h1>
          <span className="rounded-md bg-rose-500/10 border border-rose-500/30 px-2 py-0.5 text-xs font-semibold text-rose-400 uppercase tracking-wider">
            Program Matrix
          </span>
        </div>
        <p className="mt-1 text-xs sm:text-sm text-slate-400">Tracking Management System</p>
      </div>

      {/* Admin Login Card */}
      <div className="w-full max-w-md bg-slate-900/70 backdrop-blur-xl border border-slate-800/90 rounded-2xl p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white font-outfit">Sign In as Program Manager</h2>
            <p className="text-xs text-slate-400">Authorized personnel only</p>
          </div>
          <ShieldAlert className="h-5 w-5 text-rose-400" />
        </div>

        {formError && (
          <div className="mb-6 flex items-start gap-2.5 rounded-xl border border-rose-500/20 bg-rose-500/10 p-3.5 text-sm text-rose-400">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <div className="leading-snug">{formError}</div>
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="admin-email">
              Program Manager Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                <Mail className="h-5 w-5" />
              </span>
              <input
                id="admin-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-xl border border-slate-800 bg-slate-950/60 py-2.5 pl-10 pr-3 text-slate-200 placeholder:text-slate-600 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 transition duration-200"
                placeholder="Shahrukh@jobs-group.org"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-slate-300" htmlFor="admin-password">
                Password
              </label>
              <button
                type="button"
                onClick={() => onNavigate('/admin/forgot-password')}
                className="text-xs font-medium text-rose-400 hover:text-rose-300 hover:underline transition"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                <Lock className="h-5 w-5" />
              </span>
              <input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-xl border border-slate-800 bg-slate-950/60 py-2.5 pl-10 pr-10 text-slate-200 placeholder:text-slate-600 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 transition duration-200"
                placeholder="••••••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-slate-300"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white font-semibold py-2.5 transition duration-200 shadow-lg shadow-rose-600/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? 'Authenticating Program Manager...' : 'Sign In as Program Manager'}
          </button>
        </form>

        {/* Emergency Recovery Link */}
        <div className="mt-6 border-t border-slate-800/80 pt-4 text-center">
          <p className="text-xs text-slate-500">
            Lost access to registered email?{' '}
            <button
              onClick={() => onNavigate('/admin/recovery')}
              className="text-indigo-400 hover:text-indigo-300 font-medium hover:underline"
            >
              Use Emergency Recovery Key
            </button>
          </p>
        </div>
      </div>

    </div>
  );
}
