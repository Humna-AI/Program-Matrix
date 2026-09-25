import React, { useState } from 'react';
import { User } from 'lucide-react';

/**
 * Modern High-Aesthetic User Avatar Component
 * Displays avatar image if available with fallback to gradient initials
 */
export default function UserAvatar({
  user,
  src,
  name,
  role,
  size = 'md',
  className = '',
  showRoleBorder = false,
  showStatus = false,
  status = 'online',
}) {
  const [imageError, setImageError] = useState(false);

  // Extract properties
  const avatarSrc = src || user?.avatar;
  const userName = name || user?.name || 'User';
  const userRole = role || user?.role || 'employee';

  const sizeClasses = {
    xs: 'h-6 w-6 text-[10px]',
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-xl font-bold',
    '2xl': 'h-24 w-24 text-3xl font-bold',
  };

  const roleGradients = {
    admin: 'from-rose-500 to-red-600 shadow-rose-500/20 text-white',
    manager: 'from-indigo-500 to-purple-600 shadow-indigo-500/20 text-white',
    executive: 'from-amber-500 to-orange-600 shadow-amber-500/20 text-white',
    employee: 'from-emerald-500 to-teal-600 shadow-emerald-500/20 text-white',
  };

  const roleBorders = {
    admin: 'ring-2 ring-rose-500/50',
    manager: 'ring-2 ring-indigo-500/50',
    executive: 'ring-2 ring-amber-500/50',
    employee: 'ring-2 ring-emerald-500/50',
  };

  const getInitials = (str) => {
    if (!str || typeof str !== 'string') return 'U';
    const parts = str.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const currentSizeClass = sizeClasses[size] || sizeClasses.md;
  const currentGradient = roleGradients[userRole] || 'from-indigo-500 to-purple-600 text-white';
  const currentBorder = showRoleBorder ? (roleBorders[userRole] || 'ring-2 ring-indigo-500/30') : '';

  const hasValidImage = Boolean(avatarSrc && !imageError);

  return (
    <div className={`relative inline-flex shrink-0 select-none ${className}`}>
      {hasValidImage ? (
        <img
          src={avatarSrc}
          alt={userName}
          onError={() => setImageError(true)}
          className={`rounded-full object-cover shadow-sm bg-slate-800 ${currentSizeClass} ${currentBorder}`}
        />
      ) : (
        <div
          className={`flex items-center justify-center rounded-full bg-gradient-to-tr font-semibold shadow-md tracking-wider ${currentGradient} ${currentSizeClass} ${currentBorder}`}
        >
          {userName ? getInitials(userName) : <User className="h-4 w-4" />}
        </div>
      )}

      {showStatus && (
        <span
          className={`absolute bottom-0 right-0 rounded-full ring-2 ring-slate-900 ${
            size === 'xs' || size === 'sm' ? 'h-2 w-2' : 'h-3 w-3'
          } ${status === 'online' ? 'bg-emerald-400' : 'bg-slate-500'}`}
        />
      )}
    </div>
  );
}
