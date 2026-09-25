import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { compressImage } from '../utils/imageCompressor';
import UserAvatar from './UserAvatar';
import { 
  X, Camera, Trash2, Check, AlertCircle, RefreshCw, User, Mail, ShieldAlert, Award, UserCheck, Sparkles, Upload
} from 'lucide-react';

export default function ProfileModal({ isOpen, onClose }) {
  const { user, updateUserProfile } = useAuth();
  
  const [name, setName] = useState('');
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [isPhotoRemoved, setIsPhotoRemoved] = useState(false);
  const [compressing, setCompressing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error', text: '' }
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isOpen && user) {
      setName(user.name || '');
      setAvatarPreview(user.avatar || null);
      setIsPhotoRemoved(false);
      setStatusMessage(null);
      setSaving(false);
    }
  }, [isOpen, user]);

  if (!isOpen || !user) return null;

  const handleFileSelect = async (file) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setStatusMessage({ type: 'error', text: 'Please select a valid image file (JPG, PNG, WebP, etc.)' });
      return;
    }

    try {
      setCompressing(true);
      setStatusMessage(null);
      
      // Compress to lightweight 320x320 Base64 Data URL
      const compressedDataUrl = await compressImage(file, 320, 320, 0.88);
      setAvatarPreview(compressedDataUrl);
      setIsPhotoRemoved(false);
    } catch (err) {
      console.error('Error compressing image:', err);
      setStatusMessage({ type: 'error', text: 'Failed to process image. Please try another file.' });
    } finally {
      setCompressing(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleRemovePhoto = () => {
    setAvatarPreview(null);
    setIsPhotoRemoved(true);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setStatusMessage({ type: 'error', text: 'Full name cannot be empty.' });
      return;
    }

    try {
      setSaving(true);
      setStatusMessage(null);

      const payload = {
        name: name.trim(),
        avatar: isPhotoRemoved ? null : avatarPreview,
      };

      await updateUserProfile(payload);
      setStatusMessage({ type: 'success', text: 'Profile updated successfully!' });

      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err) {
      console.error(err);
      setStatusMessage({ type: 'error', text: err.message || 'Failed to update profile.' });
    } finally {
      setSaving(false);
    }
  };

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Camera className="h-4.5 w-4.5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-outfit">My Profile & Photo</h3>
              <p className="text-slate-400 text-xxs">Personalize your avatar and account details</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content & Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          {/* Status Alert Banner */}
          {statusMessage && (
            <div className={`flex items-center justify-between p-3 rounded-xl border text-xs font-medium ${
              statusMessage.type === 'success'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
            }`}>
              <div className="flex items-center gap-2">
                {statusMessage.type === 'success' ? <Check className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                <span>{statusMessage.text}</span>
              </div>
              <button type="button" onClick={() => setStatusMessage(null)} className="opacity-70 hover:opacity-100">
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          {/* Avatar Upload Area */}
          <div className="flex flex-col items-center text-center">
            <div 
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`relative group cursor-pointer rounded-full p-1.5 transition duration-200 ${
                isDragging ? 'ring-4 ring-indigo-500 bg-indigo-500/10' : ''
              }`}
              onClick={() => fileInputRef.current?.click()}
            >
              <UserAvatar
                src={avatarPreview}
                name={name || user.name}
                role={user.role}
                size="2xl"
                showRoleBorder={true}
                className="shadow-xl"
              />

              {/* Hover overlay with camera icon */}
              <div className="absolute inset-1.5 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition duration-200">
                {compressing ? (
                  <RefreshCw className="h-6 w-6 animate-spin text-indigo-400" />
                ) : (
                  <>
                    <Camera className="h-6 w-6 mb-1 text-indigo-300" />
                    <span className="text-[10px] font-semibold">Change Photo</span>
                  </>
                )}
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  handleFileSelect(e.target.files[0]);
                }
              }}
            />

            {/* Photo Action Buttons */}
            <div className="flex items-center gap-2 mt-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={compressing}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition cursor-pointer disabled:opacity-50"
              >
                <Upload className="h-3.5 w-3.5" />
                <span>{compressing ? 'Optimizing...' : 'Upload Photo'}</span>
              </button>

              {avatarPreview && (
                <button
                  type="button"
                  onClick={handleRemovePhoto}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 border border-slate-700 hover:border-rose-500/30 transition cursor-pointer"
                  title="Remove current avatar"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span>Remove</span>
                </button>
              )}
            </div>
            <p className="text-[11px] text-slate-500 mt-1.5">
              Supports PNG, JPG, or WebP. Automatically optimized & stored permanently.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-3.5 pt-2 border-t border-slate-800/80">
            {/* Display Name */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 transition"
                />
              </div>
            </div>

            {/* Email (Read only) */}
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-600" />
                <input
                  type="email"
                  disabled
                  value={user.email}
                  className="w-full bg-slate-950/60 border border-slate-800/60 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-400 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Role Badge */}
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Assigned Role</label>
              <div className="flex items-center">
                <span className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium ${currentBadge.style}`}>
                  <BadgeIcon className="h-4 w-4" />
                  {currentBadge.text}
                </span>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving || compressing}
              className="inline-flex items-center gap-1.5 px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-indigo-500/20 transition disabled:opacity-50 cursor-pointer"
            >
              {saving ? (
                <>
                  <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
