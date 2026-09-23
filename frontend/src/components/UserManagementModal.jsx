import React, { useState, useEffect } from 'react';
import { 
  Users, KeyRound, Trash2, UserPlus, X, Search, ShieldAlert, Award, UserCheck, Check, AlertCircle, RefreshCw, LifeBuoy, Copy
} from 'lucide-react';

export default function UserManagementModal({ isOpen, onClose, currentUserId }) {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

  // Add User form state
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [addUserForm, setAddUserForm] = useState({ name: '', email: '', password: '', role: 'employee' });
  const [addLoading, setAddLoading] = useState(false);

  // Change Password state
  const [passwordModalUser, setPasswordModalUser] = useState(null);
  const [newPasswordInput, setNewPasswordInput] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);

  // Emergency Recovery Key state
  const [generatedRecoveryKey, setGeneratedRecoveryKey] = useState('');
  const [keyLoading, setKeyLoading] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  // Status banners
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error', text: '' }

  const handleGenerateRecoveryKey = async () => {
    const confirmGen = window.confirm('Generate a new Emergency Recovery Key? This will invalidate your previous emergency backup key.');
    if (!confirmGen) return;

    try {
      setKeyLoading(true);
      const res = await fetch('/api/auth/admin/recovery-key/generate', {
        method: 'POST',
      });
      const data = await res.json();
      if (res.ok) {
        setGeneratedRecoveryKey(data.recoveryKey);
        setStatusMessage({ type: 'success', text: data.message });
      } else {
        setStatusMessage({ type: 'error', text: data.error || 'Failed to generate key.' });
      }
    } catch (err) {
      console.error(err);
      setStatusMessage({ type: 'error', text: 'Error generating emergency recovery key.' });
    } finally {
      setKeyLoading(false);
    }
  };

  const copyKey = (key) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2500);
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/auth/admin/users');
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users || []);
        setStats(data.stats || null);
      } else {
        const err = await res.json();
        setStatusMessage({ type: 'error', text: err.error || 'Failed to load user accounts.' });
      }
    } catch (err) {
      console.error(err);
      setStatusMessage({ type: 'error', text: 'Network error loading user accounts.' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchUsers();
      setStatusMessage(null);
      setIsAddingUser(false);
      setPasswordModalUser(null);
    }
  }, [isOpen]);

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!addUserForm.name.trim() || !addUserForm.email.trim() || !addUserForm.password.trim()) {
      setStatusMessage({ type: 'error', text: 'All fields are required.' });
      return;
    }

    try {
      setAddLoading(true);
      const res = await fetch('/api/auth/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(addUserForm),
      });

      const data = await res.json();
      if (res.ok) {
        setStatusMessage({ type: 'success', text: `Account for ${data.user.name} created successfully!` });
        setAddUserForm({ name: '', email: '', password: '', role: 'employee' });
        setIsAddingUser(false);
        fetchUsers();
      } else {
        setStatusMessage({ type: 'error', text: data.error || 'Failed to create user.' });
      }
    } catch (err) {
      console.error(err);
      setStatusMessage({ type: 'error', text: 'Network error creating user.' });
    } finally {
      setAddLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (!newPasswordInput || newPasswordInput.trim().length < 4) {
      setStatusMessage({ type: 'error', text: 'Password must be at least 4 characters.' });
      return;
    }

    try {
      setPasswordLoading(true);
      const res = await fetch(`/api/auth/admin/users/${passwordModalUser.id}/password`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword: newPasswordInput.trim() }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatusMessage({ type: 'success', text: data.message });
        setPasswordModalUser(null);
        setNewPasswordInput('');
      } else {
        setStatusMessage({ type: 'error', text: data.error || 'Failed to change password.' });
      }
    } catch (err) {
      console.error(err);
      setStatusMessage({ type: 'error', text: 'Network error updating password.' });
    } finally {
      setPasswordLoading(false);
    }
  };

  const handleDeleteUser = async (userToDelete) => {
    if (userToDelete.id === currentUserId) {
      alert('You cannot delete your own logged-in Program Manager account.');
      return;
    }

    const confirmDelete = window.confirm(`Are you sure you want to permanently delete account "${userToDelete.name}" (${userToDelete.email})? All associated tasks will be removed.`);
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/auth/admin/users/${userToDelete.id}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      if (res.ok) {
        setStatusMessage({ type: 'success', text: data.message });
        fetchUsers();
      } else {
        setStatusMessage({ type: 'error', text: data.error || 'Failed to delete user.' });
      }
    } catch (err) {
      console.error(err);
      setStatusMessage({ type: 'error', text: 'Network error deleting user.' });
    }
  };

  const filteredUsers = users.filter((u) => {
    const matchesSearch = 
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      u.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'all' || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const getRoleBadge = (role) => {
    switch (role) {
      case 'admin':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <ShieldAlert className="h-3 w-3" /> Program Manager
          </span>
        );
      case 'manager':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Award className="h-3 w-3" /> Operations Lead
          </span>
        );
      case 'executive':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Award className="h-3 w-3" /> Executive
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <UserCheck className="h-3 w-3" /> Employee
          </span>
        );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-outfit">User Account Management</h3>
              <p className="text-slate-400 text-xs">Manage active accounts, reset passwords, and assign roles.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Status Alert Banner */}
          {statusMessage && (
            <div className={`flex items-center justify-between p-3.5 rounded-xl border text-xs font-medium ${
              statusMessage.type === 'success'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
            }`}>
              <div className="flex items-center gap-2">
                {statusMessage.type === 'success' ? <Check className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                <span>{statusMessage.text}</span>
              </div>
              <button onClick={() => setStatusMessage(null)} className="opacity-70 hover:opacity-100">
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          {/* Stats Ribbon */}
          {stats && (
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-3 text-center">
                <span className="block text-slate-400 text-xxs font-bold uppercase tracking-wider">Total Accounts</span>
                <span className="text-xl font-bold text-white font-outfit mt-0.5 block">{stats.total}</span>
              </div>
              <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-3 text-center">
                <span className="block text-rose-400 text-xxs font-bold uppercase tracking-wider">Program Managers</span>
                <span className="text-xl font-bold text-white font-outfit mt-0.5 block">{stats.admin}</span>
              </div>
              <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-3 text-center">
                <span className="block text-indigo-400 text-xxs font-bold uppercase tracking-wider">Operations Leads</span>
                <span className="text-xl font-bold text-white font-outfit mt-0.5 block">{stats.manager}</span>
              </div>
              <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-3 text-center">
                <span className="block text-amber-400 text-xxs font-bold uppercase tracking-wider">Executives</span>
                <span className="text-xl font-bold text-white font-outfit mt-0.5 block">{stats.executive}</span>
              </div>
              <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-3 text-center">
                <span className="block text-emerald-400 text-xxs font-bold uppercase tracking-wider">Employees</span>
                <span className="text-xl font-bold text-white font-outfit mt-0.5 block">{stats.employee}</span>
              </div>
            </div>
          )}

          {/* Emergency Key Display Card if just generated */}
          {generatedRecoveryKey && (
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs animate-in fade-in">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <LifeBuoy className="h-4 w-4" /> New Program Manager Emergency Recovery Key
                </span>
                <button onClick={() => setGeneratedRecoveryKey('')} className="text-slate-400 hover:text-white">
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="text-slate-300 mb-3">
                Save this 16-character key in an offline vault. You can use this to recover your Program Manager account if you ever lose email access.
              </p>
              <div className="flex items-center justify-between rounded-lg bg-slate-950 border border-slate-800 p-2.5 font-mono text-sm text-amber-300 font-bold">
                <span>{generatedRecoveryKey}</span>
                <button
                  type="button"
                  onClick={() => copyKey(generatedRecoveryKey)}
                  className="inline-flex items-center gap-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded-md transition"
                >
                  {copiedKey ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedKey ? 'Copied' : 'Copy Key'}</span>
                </button>
              </div>
            </div>
          )}

          {/* Controls Bar: Search, Role Filter, Recovery Key & Add User Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex flex-1 items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500 transition"
                />
              </div>

              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-indigo-500 transition"
              >
                <option value="all">All Roles</option>
                <option value="admin">Program Manager</option>
                <option value="manager">Operations Lead</option>
                <option value="executive">Executive</option>
                <option value="employee">Employee</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleGenerateRecoveryKey}
                disabled={keyLoading}
                title="Generate a new Emergency Backup Key for offline recovery"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 px-3 py-1.5 text-xs font-semibold transition cursor-pointer shadow-sm disabled:opacity-50"
              >
                <LifeBuoy className="h-3.5 w-3.5" />
                <span>{keyLoading ? 'Generating...' : 'Emergency Backup Key'}</span>
              </button>

              <button
                onClick={() => setIsAddingUser(!isAddingUser)}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer shadow-sm"
              >
                {isAddingUser ? <X className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
                <span>{isAddingUser ? 'Cancel' : 'Add New User'}</span>
              </button>
            </div>
          </div>

          {/* Add User Form Drawer */}
          {isAddingUser && (
            <form onSubmit={handleAddUser} className="bg-slate-950/60 border border-slate-850 rounded-xl p-4 space-y-3 animate-in slide-in-from-top-2 duration-150">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <UserPlus className="h-4 w-4 text-indigo-400" /> Create New Account
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Khan"
                    value={addUserForm.name}
                    onChange={(e) => setAddUserForm({ ...addUserForm, name: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="user@example.com"
                    value={addUserForm.email}
                    onChange={(e) => setAddUserForm({ ...addUserForm, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Password</label>
                  <input
                    type="password"
                    required
                    placeholder="Min 4 characters"
                    value={addUserForm.password}
                    onChange={(e) => setAddUserForm({ ...addUserForm, password: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Role</label>
                  <select
                    value={addUserForm.role}
                    onChange={(e) => setAddUserForm({ ...addUserForm, role: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="employee">Employee</option>
                    <option value="manager">Operations Lead</option>
                    <option value="executive">Executive</option>
                    <option value="admin">Program Manager</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsAddingUser(false)}
                  className="px-3 py-1 text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={addLoading}
                  className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition disabled:opacity-50 cursor-pointer"
                >
                  {addLoading ? 'Creating...' : 'Create Account'}
                </button>
              </div>
            </form>
          )}

          {/* Change Password Modal Inline Drawer */}
          {passwordModalUser && (
            <form onSubmit={handleChangePassword} className="bg-indigo-950/20 border border-indigo-500/30 rounded-xl p-4 space-y-3 animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <KeyRound className="h-4 w-4 text-indigo-400" /> Reset Password for: <strong className="text-indigo-300">{passwordModalUser.name}</strong> ({passwordModalUser.email})
                </h4>
                <button
                  type="button"
                  onClick={() => setPasswordModalUser(null)}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <input
                  type="text"
                  required
                  placeholder="Enter new password (min 4 chars)..."
                  value={newPasswordInput}
                  onChange={(e) => setNewPasswordInput(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  disabled={passwordLoading}
                  className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition disabled:opacity-50 cursor-pointer shrink-0"
                >
                  {passwordLoading ? 'Saving...' : 'Update Password'}
                </button>
              </div>
            </form>
          )}

          {/* Users Table */}
          <div className="border border-slate-800 rounded-xl overflow-hidden">
            {loading ? (
              <div className="text-center py-12 space-y-2">
                <RefreshCw className="h-6 w-6 animate-spin text-indigo-500 mx-auto" />
                <p className="text-slate-400 text-xs">Loading user directory...</p>
              </div>
            ) : filteredUsers.length === 0 ? (
              <div className="text-center py-12 text-slate-500 text-xs">
                No user accounts match your search or filter.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-950/80 border-b border-slate-800 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      <th className="py-3 px-4">User</th>
                      <th className="py-3 px-4">Role</th>
                      <th className="py-3 px-4">Tasks & Projects</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-xs">
                    {filteredUsers.map((u) => {
                      const isSelf = u.id === currentUserId;
                      return (
                        <tr key={u.id} className="hover:bg-slate-800/30 transition">
                          
                          {/* User info */}
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
                                {u.name.charAt(0).toUpperCase()}
                              </div>
                              <div className="min-w-0">
                                <div className="font-semibold text-white truncate flex items-center gap-1.5">
                                  <span>{u.name}</span>
                                  {isSelf && (
                                    <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.2 rounded border border-indigo-500/30">
                                      You
                                    </span>
                                  )}
                                </div>
                                <div className="text-slate-400 text-[11px] truncate">{u.email}</div>
                              </div>
                            </div>
                          </td>

                          {/* Role */}
                          <td className="py-3 px-4">
                            {getRoleBadge(u.role)}
                          </td>

                          {/* Activity / Counts */}
                          <td className="py-3 px-4 text-slate-400">
                            <div className="flex items-center gap-3 text-[11px]">
                              <span>Assigned: <strong className="text-slate-200">{u._count?.assignedTasks || 0}</strong></span>
                              <span>Created: <strong className="text-slate-200">{u._count?.createdTasks || 0}</strong></span>
                            </div>
                          </td>

                          {/* Actions */}
                          <td className="py-3 px-4 text-right">
                            <div className="inline-flex items-center gap-1.5 justify-end">
                              <button
                                onClick={() => {
                                  setPasswordModalUser(u);
                                  setNewPasswordInput('');
                                  setStatusMessage(null);
                                }}
                                title="Change Password"
                                className="p-1.5 text-slate-400 hover:text-indigo-300 hover:bg-indigo-500/10 rounded-lg border border-transparent hover:border-indigo-500/20 transition cursor-pointer"
                              >
                                <KeyRound className="h-4 w-4" />
                              </button>

                              {!isSelf && (
                                <button
                                  onClick={() => handleDeleteUser(u)}
                                  title="Delete User Account"
                                  className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg border border-transparent hover:border-rose-500/20 transition cursor-pointer"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              )}
                            </div>
                          </td>

                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/40 flex justify-between items-center text-xs text-slate-500">
          <span>All passwords are automatically hashed with SHA-256 for high security.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
