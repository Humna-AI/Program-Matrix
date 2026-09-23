import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  ShieldCheck,
  KeyRound,
  Mail,
  Lock,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Clock,
  RefreshCw,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Copy,
  Check,
  ShieldAlert,
  LifeBuoy
} from 'lucide-react';

export default function AdminPasswordRecovery({ initialStep = 'email', onNavigate }) {
  const { theme, toggleTheme } = useTheme();
  
  // Steps: 'email' | 'verify' | 'new-password' | 'success' | 'emergency'
  const [step, setStep] = useState(initialStep);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [recoveryKey, setRecoveryKey] = useState('');
  const [newEmergencyKey, setNewEmergencyKey] = useState('');
  const [copiedKey, setCopiedKey] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [attemptsRemaining, setAttemptsRemaining] = useState(5);

  // 10-Minute Countdown Timer for Code
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Password Complexity Validation Flags
  const hasMinLength = newPassword.length >= 12;
  const hasUppercase = /[A-Z]/.test(newPassword);
  const hasLowercase = /[a-z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(newPassword);
  const isPasswordValid = hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
  const passwordsMatch = newPassword.length > 0 && newPassword === confirmPassword;

  // Step 1: Send Verification Code
  const handleRequestCode = async (e) => {
    if (e) e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your Program Manager email address.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/admin/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to dispatch verification code.');
      }

      setSuccessMessage(data.message);
      setTimeLeft(600);
      setTimerActive(true);
      setAttemptsRemaining(5);
      setStep('verify');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error initiating password recovery.');
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify 6-Digit Code
  const handleVerifyCode = async (e) => {
    e.preventDefault();
    const cleanCode = code.replace(/\D/g, '').trim();

    if (cleanCode.length !== 6) {
      setError('Please enter the full 6-digit verification code.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/admin/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), code: cleanCode }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Invalid verification code.');
      }

      setResetToken(data.resetToken);
      setStep('new-password');
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Step 3: Set New Password
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!isPasswordValid) {
      setError('Please satisfy all password security requirements (12+ characters, uppercase, lowercase, numbers, special characters).');
      return;
    }

    if (!passwordsMatch) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/admin/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          resetToken,
          newPassword,
          confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to update Program Manager password.');
      }

      setSuccessMessage(data.message);
      setStep('success');
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Step 5: Emergency Backup Key Recovery
  const handleEmergencyRecovery = async (e) => {
    e.preventDefault();

    if (!email.trim() || !recoveryKey.trim()) {
      setError('Email and Emergency Recovery Key are required.');
      return;
    }

    if (!isPasswordValid) {
      setError('New password must satisfy all security requirements (minimum 12 characters, uppercase, lowercase, numbers, special characters).');
      return;
    }

    if (!passwordsMatch) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/admin/emergency-recovery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          recoveryKey: recoveryKey.trim(),
          newPassword,
          confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Emergency recovery failed.');
      }

      setNewEmergencyKey(data.newEmergencyKey || '');
      setSuccessMessage(data.message);
      setStep('success');
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2500);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black px-4 py-12 sm:px-6 lg:px-8 transition-colors duration-200">
      
      {/* Navigation Top Bar */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <button
          onClick={() => onNavigate('/admin-login')}
          className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition duration-200"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Program Manager Login</span>
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

      {/* Header */}
      <div className="mb-6 flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-rose-600 to-indigo-600 shadow-xl shadow-rose-600/20">
          <KeyRound className="h-6 w-6 text-white" />
        </div>
        <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-outfit">
          Program Matrix Recovery
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-400">
          Program & Project Tracking Management System
        </p>
      </div>

      {/* Main Container Card */}
      <div className="w-full max-w-lg bg-slate-900/70 backdrop-blur-xl border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl">
        
        {/* Step Indicator Progress Bar */}
        {step !== 'emergency' && step !== 'success' && (
          <div className="mb-6 flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                step === 'email' ? 'bg-indigo-600 text-white' : 'bg-emerald-600 text-white'
              }`}>
                1
              </span>
              <span className="text-xs font-medium text-slate-300">Request</span>
            </div>
            <div className="h-0.5 w-6 bg-slate-800" />
            <div className="flex items-center gap-2">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                step === 'verify' ? 'bg-indigo-600 text-white' : step === 'new-password' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                2
              </span>
              <span className="text-xs font-medium text-slate-300">Verify Code</span>
            </div>
            <div className="h-0.5 w-6 bg-slate-800" />
            <div className="flex items-center gap-2">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                step === 'new-password' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                3
              </span>
              <span className="text-xs font-medium text-slate-300">New Password</span>
            </div>
          </div>
        )}

        {/* Global Error Banner */}
        {error && (
          <div className="mb-6 flex items-start gap-2.5 rounded-xl border border-rose-500/20 bg-rose-500/10 p-3.5 text-xs sm:text-sm text-rose-400">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <div className="leading-snug">{error}</div>
          </div>
        )}

        {/* STEP 1: Enter Email Form */}
        {step === 'email' && (
          <div>
            <h2 className="text-lg font-bold text-white mb-2 font-outfit">Enter Registered Program Manager Email</h2>
            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              Provide your Program Manager email address. If an account is verified, a secure 6-digit verification code will be dispatched immediately.
            </p>

            <form onSubmit={handleRequestCode} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="recovery-email">
                  Program Manager Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                    <Mail className="h-4 w-4" />
                  </span>
                  <input
                    id="recovery-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-xl border border-slate-800 bg-slate-950/60 py-2.5 pl-10 pr-3 text-slate-200 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition duration-200 text-sm"
                    placeholder="admin@company.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 text-sm transition duration-200 shadow-lg shadow-indigo-600/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? 'Dispatching Verification Code...' : 'Send Verification Code'}
              </button>
            </form>

            <div className="mt-6 border-t border-slate-800/80 pt-4 flex items-center justify-between text-xs">
              <button
                onClick={() => onNavigate('/admin-login')}
                className="text-slate-400 hover:text-white"
              >
                ← Back to Login
              </button>
              <button
                onClick={() => {
                  setError('');
                  setStep('emergency');
                }}
                className="text-rose-400 hover:text-rose-300 font-medium"
              >
                Use Emergency Backup Key →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Enter 6-Digit Code */}
        {step === 'verify' && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-white font-outfit">Enter 6-Digit Verification Code</h2>
              <div className="flex items-center gap-1.5 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg">
                <Clock className="h-3.5 w-3.5" />
                <span className="font-mono font-semibold">{formatTimer(timeLeft)}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              We dispatched a code to <span className="text-slate-200 font-semibold">{email}</span>. Enter the 6-digit code below within 10 minutes.
            </p>

            <form onSubmit={handleVerifyCode} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="verify-code">
                  6-Digit Code
                </label>
                <input
                  id="verify-code"
                  type="text"
                  maxLength={6}
                  required
                  autoFocus
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                  className="block w-full text-center tracking-[12px] font-mono text-2xl font-bold rounded-xl border border-slate-800 bg-slate-950/80 py-3 text-sky-400 placeholder:text-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition duration-200"
                  placeholder="000000"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Max 5 attempts allowed</span>
                <button
                  type="button"
                  onClick={handleRequestCode}
                  disabled={loading || timeLeft > 540}
                  className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <RefreshCw className="h-3 w-3" />
                  <span>Resend Code</span>
                </button>
              </div>

              <button
                type="submit"
                disabled={loading || code.length !== 6 || timeLeft === 0}
                className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 text-sm transition duration-200 shadow-lg shadow-indigo-600/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? 'Verifying Code...' : 'Verify Code & Proceed'}
              </button>
            </form>

            <div className="mt-6 border-t border-slate-800/80 pt-4 flex items-center justify-between text-xs">
              <button
                onClick={() => {
                  setError('');
                  setStep('email');
                }}
                className="text-slate-400 hover:text-white"
              >
                ← Change Email
              </button>
              <button
                onClick={() => {
                  setError('');
                  setStep('emergency');
                }}
                className="text-rose-400 hover:text-rose-300 font-medium"
              >
                Lost Email Access?
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Create New Password */}
        {step === 'new-password' && (
          <div>
            <h2 className="text-lg font-bold text-white mb-2 font-outfit">Create New Program Manager Password</h2>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Identity confirmed. Enter a strong, high-entropy password for your Program Manager account.
            </p>

            {/* Password Complexity Criteria Pills */}
            <div className="mb-4 rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-xs space-y-1.5">
              <span className="font-semibold text-slate-300 block mb-1">Security Requirements:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                <div className={`flex items-center gap-1.5 ${hasMinLength ? 'text-emerald-400' : 'text-slate-500'}`}>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>12+ characters</span>
                </div>
                <div className={`flex items-center gap-1.5 ${hasUppercase ? 'text-emerald-400' : 'text-slate-500'}`}>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Uppercase letter (A-Z)</span>
                </div>
                <div className={`flex items-center gap-1.5 ${hasLowercase ? 'text-emerald-400' : 'text-slate-500'}`}>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Lowercase letter (a-z)</span>
                </div>
                <div className={`flex items-center gap-1.5 ${hasNumber ? 'text-emerald-400' : 'text-slate-500'}`}>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Numeric digit (0-9)</span>
                </div>
                <div className={`flex items-center gap-1.5 sm:col-span-2 ${hasSpecialChar ? 'text-emerald-400' : 'text-slate-500'}`}>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Special character (!@#$%^&*...)</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="new-admin-password">
                  New Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                    <Lock className="h-4 w-4" />
                  </span>
                  <input
                    id="new-admin-password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="block w-full rounded-xl border border-slate-800 bg-slate-950/60 py-2.5 pl-10 pr-10 text-slate-200 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition duration-200 text-sm"
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

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="confirm-admin-password">
                  Confirm New Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                    <Lock className="h-4 w-4" />
                  </span>
                  <input
                    id="confirm-admin-password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full rounded-xl border border-slate-800 bg-slate-950/60 py-2.5 pl-10 pr-3 text-slate-200 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition duration-200 text-sm"
                    placeholder="••••••••••••"
                  />
                </div>
                {confirmPassword && (
                  <div className={`mt-1.5 text-xs flex items-center gap-1 ${passwordsMatch ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {passwordsMatch ? <Check className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                    <span>{passwordsMatch ? 'Passwords match' : 'Passwords do not match'}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || !isPasswordValid || !passwordsMatch}
                className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 text-sm transition duration-200 shadow-lg shadow-emerald-600/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? 'Updating Password...' : 'Set New Program Manager Password'}
              </button>
            </form>
          </div>
        )}

        {/* STEP 4: Reset Success Confirmation */}
        {step === 'success' && (
          <div className="text-center py-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4">
              <ShieldCheck className="h-8 w-8" />
            </div>

            <h2 className="text-xl font-bold text-white mb-2 font-outfit">Password Updated Successfully</h2>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              Your Program Manager account credentials have been securely updated. All outstanding recovery sessions and prior tokens have been invalidated.
            </p>

            {newEmergencyKey && (
              <div className="mb-6 text-left rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  🔑 New Emergency Backup Key Generated
                </span>
                <p className="text-xs text-slate-300 mb-2">
                  Please copy and store this backup key in a secure offline password manager:
                </p>
                <div className="flex items-center justify-between rounded-lg bg-slate-950 border border-slate-800 p-2.5 font-mono text-sm text-amber-300 font-bold">
                  <span>{newEmergencyKey}</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(newEmergencyKey)}
                    className="inline-flex items-center gap-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded-md transition"
                  >
                    {copiedKey ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                    <span>{copiedKey ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={() => onNavigate('/admin-login')}
              className="w-full rounded-xl bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white font-semibold py-2.5 text-sm transition duration-200 shadow-lg shadow-indigo-600/20 cursor-pointer"
            >
              Sign In to Program Manager Portal
            </button>
          </div>
        )}

        {/* STEP 5: Emergency Backup Key Recovery */}
        {step === 'emergency' && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <LifeBuoy className="h-5 w-5 text-rose-400" />
              <h2 className="text-lg font-bold text-white font-outfit">Emergency Backup Key Recovery</h2>
            </div>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              If you have lost access to your registered email, you can authorize a direct password reset using your 16-character Emergency Recovery Key.
            </p>

            <form onSubmit={handleEmergencyRecovery} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="em-email">
                  Program Manager Email Address
                </label>
                <input
                  id="em-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-xl border border-slate-800 bg-slate-950/60 py-2.5 px-3 text-slate-200 placeholder:text-slate-600 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 text-sm"
                  placeholder="admin@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="em-key">
                  Emergency Recovery Key
                </label>
                <input
                  id="em-key"
                  type="text"
                  required
                  value={recoveryKey}
                  onChange={(e) => setRecoveryKey(e.target.value.toUpperCase())}
                  className="block w-full font-mono rounded-xl border border-slate-800 bg-slate-950/60 py-2.5 px-3 text-rose-400 placeholder:text-slate-600 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 text-sm"
                  placeholder="ADM-XXXX-XXXX-XXXX"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="em-new-pwd">
                  New Password (12+ characters, complex)
                </label>
                <div className="relative">
                  <input
                    id="em-new-pwd"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="block w-full rounded-xl border border-slate-800 bg-slate-950/60 py-2.5 pl-3 pr-10 text-slate-200 placeholder:text-slate-600 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 text-sm"
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

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="em-confirm-pwd">
                  Confirm New Password
                </label>
                <input
                  id="em-confirm-pwd"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full rounded-xl border border-slate-800 bg-slate-950/60 py-2.5 px-3 text-slate-200 placeholder:text-slate-600 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 text-sm"
                  placeholder="••••••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !email || !recoveryKey || !isPasswordValid || !passwordsMatch}
                className="w-full rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold py-2.5 text-sm transition duration-200 shadow-lg shadow-rose-600/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? 'Recovering Account...' : 'Recover Program Manager Account'}
              </button>
            </form>

            <div className="mt-6 border-t border-slate-800/80 pt-4 flex items-center justify-between text-xs">
              <button
                onClick={() => {
                  setError('');
                  setStep('email');
                }}
                className="text-indigo-400 hover:text-indigo-300"
              >
                ← Return to Email Recovery
              </button>
              <button
                onClick={() => onNavigate('/admin-login')}
                className="text-slate-400 hover:text-white"
              >
                Program Manager Login
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
