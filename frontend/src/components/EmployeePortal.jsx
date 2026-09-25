import React, { useState, useEffect } from 'react';
import { 
  ListTodo, Calendar, User, Folder, CheckSquare, Clock, AlertCircle, History, CheckCircle2, RotateCcw, Check, ArrowRight, ExternalLink, MessageSquare
} from 'lucide-react';
import LinkifiedText from './LinkifiedText';
import UserAvatar from './UserAvatar';

export default function EmployeePortal() {
  const [tasks, setTasks] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  const fetchTasksAndUsers = async () => {
    try {
      setLoading(true);
      const [tasksRes, usersRes] = await Promise.all([
        fetch('/api/tasks'),
        fetch('/api/auth/users')
      ]);

      if (tasksRes.ok) {
        setTasks(await tasksRes.json());
      }
      if (usersRes.ok) {
        setUsersList(await usersRes.json());
      }
    } catch (error) {
      console.error('Error fetching employee portal data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasksAndUsers();
  }, []);

  const handleStatusChange = async (taskId, newStatus) => {
    setUpdatingId(taskId);
    try {
      const res = await fetch(`/api/tasks/${taskId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) {
        throw new Error('Failed to update status.');
      }

      // Update task in local state immediately for instant automatic transition between columns
      const updated = await res.json();
      setTasks(prevTasks => prevTasks.map(t => t.id === taskId ? { ...t, status: updated.status } : t));
    } catch (error) {
      console.error(error);
      alert('Error updating task status. Please try again.');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleAssigneeChange = async (taskId, newAssigneeId) => {
    setUpdatingId(taskId);
    try {
      const res = await fetch(`/api/tasks/${taskId}/assignee`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assignedToId: newAssigneeId }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Failed to re-assign task.');
      }

      // Since the task is re-assigned to someone else, it leaves the employee's personal list
      setTasks(prevTasks => prevTasks.filter(t => t.id !== taskId));
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setUpdatingId(null);
    }
  };

  if (loading && tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"></div>
        <p className="text-slate-400 text-sm">Loading your personal To-Do list...</p>
      </div>
    );
  }

  // Count summaries
  const total = tasks.length;
  const activeTasks = tasks.filter(t => t.status !== 'completed');
  const completedTasks = tasks.filter(t => t.status === 'completed');
  const completed = completedTasks.length;
  const pending = activeTasks.length;
  const now = new Date();
  const overdue = tasks.filter(t => t.status !== 'completed' && new Date(t.dueDate) < now).length;

  // Filter out admin users for assign options
  const assignableUsers = usersList.filter(u => u.role !== 'admin');

  const renderTaskCard = (task, isCompletedColumn) => {
    const hasFeedback = !!task.feedback;
    const isCompleted = isCompletedColumn;
    const isOverdue = !isCompleted && new Date(task.dueDate) < now;
    const isUpdating = updatingId === task.id;

    return (
      <div 
        key={task.id} 
        className={`bg-slate-900/40 border rounded-2xl p-5 transition-all duration-300 hover:border-slate-700/80 shadow-md ${
          isCompleted 
            ? 'border-emerald-500/20 bg-slate-950/40 opacity-90' 
            : isOverdue 
            ? 'border-rose-500/30 bg-rose-500/[0.02]' 
            : 'border-slate-800/80'
        }`}
      >
        {/* Header: Project & Deadline badge */}
        <div className="flex items-center justify-between gap-3 mb-2.5">
          {task.project?.link ? (
            <a
              href={task.project.link.startsWith('http://') || task.project.link.startsWith('https://') ? task.project.link : `https://${task.project.link}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title={`Visit project: ${task.project.title}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700/90 text-indigo-300 hover:text-indigo-200 border border-slate-700/60 hover:border-indigo-500/40 max-w-[200px] truncate transition group/proj"
            >
              <Folder className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
              <span className="truncate">{task.project?.title || 'General'}</span>
              <ExternalLink className="h-2.5 w-2.5 text-indigo-400 opacity-60 group-hover/proj:opacity-100 shrink-0" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800/80 text-indigo-300 border border-slate-700/60 max-w-[200px] truncate">
              <Folder className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
              <span className="truncate">{task.project?.title || 'General'}</span>
            </span>
          )}

          <span className={`inline-flex items-center gap-1 text-xs font-medium ${
            isCompleted 
              ? 'text-emerald-400 font-semibold' 
              : isOverdue 
              ? 'text-rose-400 font-bold' 
              : 'text-slate-400'
          }`}>
            <Calendar className="h-3.5 w-3.5" />
            {new Date(task.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
            {isOverdue && (
              <span className="ml-1 text-xxs font-black uppercase text-rose-500 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">
                Overdue
              </span>
            )}
          </span>
        </div>

        {/* Task Title & Description */}
        <div className="mb-3.5">
          <h4 className={`text-base font-semibold font-outfit ${isCompleted ? 'text-slate-300 line-through' : 'text-white'}`}>
            {task.title}
          </h4>
          {task.description && (
            <div className="text-slate-400 text-xs mt-1 leading-relaxed">
              <LinkifiedText text={task.description} />
            </div>
          )}
        </div>

        {/* Manager/Admin Feedback Box */}
        {task.feedback && (
          <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-xl p-3 mb-3.5 space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-indigo-300 font-semibold">
                <MessageSquare className="h-3.5 w-3.5 text-indigo-400" />
                Supervisor Feedback
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-500/30">
                Feedback
              </span>
            </div>
            <div className="text-slate-300 text-xs leading-relaxed pt-0.5">
              <LinkifiedText text={task.feedback} />
            </div>
          </div>
        )}

        {/* Supervisor & Re-assignment section */}
        <div className="bg-slate-950/60 border border-slate-850/80 rounded-xl p-2.5 mb-3.5 space-y-2 text-xs">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-2 text-slate-400">
              <UserAvatar user={task.assignedBy} size="xs" />
              <span>Assigned by: <strong className="text-slate-300 font-medium">{task.assignedBy?.name}</strong></span>
            </span>
          </div>

          <div className="flex items-center justify-between gap-2 pt-1.5 border-t border-slate-850">
            <span className="text-[11px] text-slate-500">Re-assign:</span>
            <select
              disabled={isUpdating}
              value={task.assignedTo?.id}
              onChange={(e) => handleAssigneeChange(task.id, e.target.value)}
              className="bg-slate-900 border border-slate-850 hover:border-slate-700 rounded-lg px-2 py-0.5 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition cursor-pointer"
            >
              {assignableUsers.map(u => (
                <option key={u.id} value={u.id}>{u.name} ({u.role})</option>
              ))}
            </select>
          </div>

          {/* History audit log */}
          {task.histories && task.histories.length > 0 && (
            <div className="pt-1.5 border-t border-slate-850">
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1 mb-1">
                <History className="h-3 w-3 text-indigo-400" /> Re-assignment Log ({task.histories.length})
              </span>
              <div className="space-y-1 max-h-20 overflow-y-auto">
                {task.histories.map((h) => (
                  <div key={h.id} className="text-[10px] text-slate-400 leading-normal flex items-start gap-1">
                    <span className="text-indigo-500 select-none">•</span>
                    <span>
                      <strong>{h.changedBy?.name}</strong> re-assigned from <span className="text-slate-300 font-medium">{h.oldValue}</span> to <span className="text-indigo-400 font-medium">{h.newValue}</span> on {new Date(h.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Bar: Quick status button & Dropdown */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-slate-800/60">
          
          {/* Quick toggle action */}
          <div>
            {!isCompleted ? (
              <button
                disabled={isUpdating}
                onClick={() => handleStatusChange(task.id, 'completed')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 rounded-xl px-3 py-1.5 transition cursor-pointer disabled:opacity-50"
              >
                <Check className="h-3.5 w-3.5" />
                Mark Completed
              </button>
            ) : (
              <button
                disabled={isUpdating}
                onClick={() => handleStatusChange(task.id, 'in_progress')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-xl px-3 py-1.5 transition cursor-pointer disabled:opacity-50"
              >
                <RotateCcw className="h-3.5 w-3.5 text-orange-400" />
                Reopen Task
              </button>
            )}
          </div>

          {/* Status selector dropdown */}
          <div className="flex items-center gap-2">
            {isUpdating && (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent"></div>
            )}
            <select
              disabled={isUpdating}
              value={task.status}
              onChange={(e) => handleStatusChange(task.id, e.target.value)}
              className={`rounded-xl border px-3 py-1.5 text-xs font-semibold focus:outline-none transition duration-150 cursor-pointer ${
                task.status === 'completed'
                  ? task.feedback
                    ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                    : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25'
                  : isOverdue
                  ? 'bg-rose-500/10 text-rose-450 border-rose-500/25'
                  : task.status === 'in_progress'
                  ? 'bg-orange-500/10 text-orange-400 border-orange-500/25'
                  : 'bg-blue-500/10 text-blue-400 border-blue-500/25'
              }`}
            >
              <option value="not_started">🔵 Planned / Assigned</option>
              <option value="in_progress">🟠 In Progress</option>
              <option value="completed">
                {task.feedback ? '💬 Feedback' : '🟢 Completed'}
              </option>
            </select>
          </div>

        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header and Summary stats */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-slate-800/60 pb-6">
        <div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight font-outfit">My To-Do Portal</h2>
          <p className="text-slate-400 text-sm mt-0.5">Two-column task board organized by active deliverables and completed milestones.</p>
        </div>
        
        {/* Quick status bar */}
        <div className="flex gap-4">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl px-4 py-2 text-center min-w-[80px]">
            <span className="text-xxs font-semibold uppercase tracking-wider text-slate-500">Total</span>
            <span className="block text-xl font-bold text-white mt-0.5">{total}</span>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl px-4 py-2 text-center min-w-[80px]">
            <span className="text-xxs font-semibold uppercase tracking-wider text-slate-500">Active</span>
            <span className="block text-xl font-bold text-orange-400 mt-0.5">{pending}</span>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl px-4 py-2 text-center min-w-[80px]">
            <span className="text-xxs font-semibold uppercase tracking-wider text-rose-500">Overdue</span>
            <span className="block text-xl font-bold text-rose-450 mt-0.5">{overdue}</span>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl px-4 py-2 text-center min-w-[80px]">
            <span className="text-xxs font-semibold uppercase tracking-wider text-emerald-500">Done</span>
            <span className="block text-xl font-bold text-emerald-400 mt-0.5">{completed}</span>
          </div>
        </div>
      </div>

      {/* 2-Column Kanban-style Task Board */}
      {tasks.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/10 border border-slate-800/60 rounded-2xl">
          <ListTodo className="mx-auto h-12 w-12 text-slate-700 mb-3" />
          <h3 className="text-lg font-semibold text-slate-300 font-outfit">You are all caught up!</h3>
          <p className="text-slate-500 text-sm mt-1">No tasks have been assigned to you yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* ================= COLUMN 1: ASSIGNED, PLANNED & IN PROGRESS ================= */}
          <div className="bg-slate-900/20 border border-slate-800/60 rounded-2xl p-6 space-y-4">
            
            {/* Column 1 Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                  <Clock className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-outfit">Assigned, In Progress & Feedback</h3>
                  <p className="text-[11px] text-slate-400">Tasks in progress, planned, or awaiting action on review feedback</p>
                </div>
              </div>

              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/25">
                {activeTasks.length} {activeTasks.length === 1 ? 'task' : 'tasks'}
              </span>
            </div>

            {/* Column 1 Task List */}
            {activeTasks.length === 0 ? (
              <div className="text-center py-12 px-4 bg-slate-950/20 border border-dashed border-slate-850 rounded-xl space-y-2">
                <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-500/60 mb-1" />
                <h4 className="text-sm font-semibold text-white font-outfit">No pending tasks!</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  All your assigned tasks are completed. Great job!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {activeTasks.map(task => renderTaskCard(task, false))}
              </div>
            )}

          </div>

          {/* ================= COLUMN 2: COMPLETED TASKS ================= */}
          <div className="bg-slate-900/20 border border-slate-800/60 rounded-2xl p-6 space-y-4">
            
            {/* Column 2 Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-outfit">Completed Tasks</h3>
                  <p className="text-[11px] text-slate-400">Tasks successfully finished</p>
                </div>
              </div>

              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                {completedTasks.length} {completedTasks.length === 1 ? 'task' : 'tasks'}
              </span>
            </div>

            {/* Column 2 Task List */}
            {completedTasks.length === 0 ? (
              <div className="text-center py-12 px-4 bg-slate-950/20 border border-dashed border-slate-850 rounded-xl space-y-2">
                <Clock className="mx-auto h-8 w-8 text-slate-600 mb-1" />
                <h4 className="text-sm font-semibold text-white font-outfit">No completed tasks yet</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Mark tasks as completed in the first column and they will automatically appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {completedTasks.map(task => renderTaskCard(task, true))}
              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
}
