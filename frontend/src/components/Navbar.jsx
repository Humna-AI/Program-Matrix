import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { LogOut, ClipboardList, ShieldAlert, Award, UserCheck, Sun, Moon, Camera } from 'lucide-react';
import NotificationBell from './NotificationBell';
import UserAvatar from './UserAvatar';
import ProfileModal from './ProfileModal';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  if (!user) return null;

  const roleBadges = {
    admin: {
      text: 'Program Manager',
      style: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
      icon: ShieldAlert,
    },
    manager: {
      text: 'Operations Lead',
      style: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
      icon: Award,
    },
    executive: {
      text: 'Executive',
      style: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
      icon: Award,
    },
    employee: {
      text: 'Employee',
      style: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
      icon: UserCheck,
    },
  };

  const currentBadge = roleBadges[user.role] || {
    text: user.role,
    style: 'bg-slate-500/10 text-slate-400 border border-slate-500/20',
    icon: UserCheck,
  };

  const BadgeIcon = currentBadge.icon;

  return (
    <>
      <nav className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md sticky top-0 z-40 transition-colors duration-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20">
                <ClipboardList className="h-5.5 w-5.5 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight text-white font-outfit">Program Matrix</span>
                  <span className="hidden md:inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">Pro</span>
                </div>
                <span className="hidden lg:block text-[10px] text-slate-400 -mt-0.5">Program & Project Tracking Management System</span>
              </div>
            </div>

            {/* Right Section: Theme Toggle, Notification Bell, User Avatar/Profile & Logout */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Theme Toggle Button (Dark / Light) */}
              <button
                onClick={toggleTheme}
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label="Toggle Theme"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-750 bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-slate-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 cursor-pointer group"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
                ) : (
                  <Moon className="h-5 w-5 text-indigo-500 transition-transform duration-300 group-hover:-rotate-12" />
                )}
              </button>

              {/* Notification Bell Component */}
              <NotificationBell />

              <div className="h-6 w-px bg-slate-800 hidden sm:block"></div>

              {/* Clickable User Profile Area with Avatar */}
              <button
                onClick={() => setIsProfileModalOpen(true)}
                title="Click to manage profile & upload photo"
                className="flex items-center gap-2.5 p-1 sm:px-2 sm:py-1 rounded-xl hover:bg-slate-800/70 border border-transparent hover:border-slate-700/60 transition duration-200 text-left group cursor-pointer"
              >
                {/* Profile Photo Avatar */}
                <div className="relative">
                  <UserAvatar
                    user={user}
                    size="sm"
                    showRoleBorder={true}
                    showStatus={true}
                    className="shadow-sm group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity">
                    <Camera className="h-3 w-3" />
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-start">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{user.name}</span>
                  </div>
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.2 text-[10px] font-medium ${currentBadge.style}`}>
                    <BadgeIcon className="h-3 w-3" />
                    {currentBadge.text}
                  </span>
                </div>
              </button>

              <button
                onClick={logout}
                className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 cursor-pointer shrink-0"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* User Profile & Photo Settings Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </>
  );
}

