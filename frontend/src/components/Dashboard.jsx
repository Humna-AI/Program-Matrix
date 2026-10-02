import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { 
  Folder, CheckCircle2, Clock, AlertTriangle, ListTodo, Plus, Calendar, User, AlignLeft, BarChart3, Users, ChevronRight, X, Trash2, Pencil, History, Filter, Search, RotateCcw, CalendarRange, ArrowUpDown, Tag, Sparkles, Check, ExternalLink, Link2, Globe, MessageSquare, MessageSquarePlus, Eye, ArrowRight, Layers
} from 'lucide-react';
import LinkifiedText from './LinkifiedText';
import UserManagementModal from './UserManagementModal';
import UserAvatar from './UserAvatar';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const { user } = useAuth();
  const { isDark } = useTheme();
  
  // Data states
  const [stats, setStats] = useState(null);
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);

  // User Management modal state
  const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);

  // Filter & Search states
  const [datePreset, setDatePreset] = useState('all'); // 'all', 'today', 'tomorrow', 'this_week', 'this_month', 'overdue', 'custom'
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dateField, setDateField] = useState('dueDate'); // 'dueDate' | 'createdAt'
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [projectFilter, setProjectFilter] = useState('all');
  const [assigneeFilter, setAssigneeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('dueDate_asc');

  // Modals state
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [selectedTaskForFeedback, setSelectedTaskForFeedback] = useState(null);
  const [feedbackInput, setFeedbackInput] = useState('');
  const [feedbackSaving, setFeedbackSaving] = useState(false);

  // Dedicated Project Detail & Tasks Modal state
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [projectTaskFilter, setProjectTaskFilter] = useState('all');
  const [projectTaskSearch, setProjectTaskSearch] = useState('');

  // Form states
  const [projectForm, setProjectForm] = useState({ title: '', description: '', link: '' });
  const [taskForm, setTaskForm] = useState({
    projectId: '',
    title: '',
    description: '',
    assignedToId: '',
    dueDate: '',
  });

  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  // Fetch all dashboard data
  const fetchData = async () => {
    try {
      setLoading(true);
      const [statsRes, projectsRes, tasksRes, usersRes] = await Promise.all([
        fetch('/api/tasks/stats'),
        fetch('/api/projects'),
        user.role === 'executive' ? Promise.resolve(null) : fetch('/api/tasks'),
        user.role === 'executive' ? Promise.resolve(null) : fetch('/api/auth/users'),
      ]);

      if (statsRes.ok) setStats(await statsRes.json());
      if (projectsRes.ok) setProjects(await projectsRes.json());
      if (tasksRes?.ok) setTasks(await tasksRes.json());
      if (usersRes?.ok) setUsersList(await usersRes.json());
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Open project detail modal with associated tasks
  const handleOpenProjectDetails = (project) => {
    setActiveProjectModal(project);
    setProjectTaskFilter('all');
    setProjectTaskSearch('');
  };

  // Directly assign task for a specific project
  const handleOpenAssignTaskForProject = (project, e) => {
    if (e) e.stopPropagation();
    setTaskForm({
      projectId: String(project.id),
      title: '',
      description: '',
      assignedToId: '',
      dueDate: '',
    });
    setFormError('');
    setFormSuccess('');
    setIsTaskModalOpen(true);
  };

  // Sync activeProjectModal when projects or tasks list updates
  useEffect(() => {
    if (activeProjectModal) {
      const updated = projects.find((p) => p.id === activeProjectModal.id);
      if (updated) {
        setActiveProjectModal(updated);
      }
    }
  }, [projects, tasks]);

  const handleCreateProject = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    if (!projectForm.title) {
      setFormError('Project title is required.');
      return;
    }

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectForm),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to create project.');
      }

      setFormSuccess('Project created successfully!');
      setProjectForm({ title: '', description: '', link: '' });
      setTimeout(() => {
        setIsProjectModalOpen(false);
        setFormSuccess('');
        fetchData();
      }, 1000);
    } catch (err) {
      setFormError(err.message);
    }
  };

  const handleOpenProjectEditor = (project) => {
    setEditingProject(project);
    setProjectForm({
      title: project.title || '',
      description: project.description || '',
      link: project.link || '',
    });
    setFormError('');
    setFormSuccess('');
    setIsProjectModalOpen(true);
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    if (!projectForm.title.trim()) {
      setFormError('Project title is required.');
      return;
    }

    try {
      const res = await fetch(`/api/projects/${editingProject.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectForm),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to update project.');
      }

      setFormSuccess('Project updated successfully!');
      setTimeout(() => {
        setIsProjectModalOpen(false);
        setEditingProject(null);
        setFormSuccess('');
        fetchData();
      }, 700);
    } catch (err) {
      setFormError(err.message);
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    const { projectId, title, assignedToId, dueDate } = taskForm;
    if (!projectId || !title || !assignedToId || !dueDate) {
      setFormError('All fields except description are required.');
      return;
    }

    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskForm),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to create task.');
      }

      setFormSuccess('Task assigned successfully!');
      setTaskForm({
        projectId: '',
        title: '',
        description: '',
        assignedToId: '',
        dueDate: '',
      });
      setTimeout(() => {
        setIsTaskModalOpen(false);
        setFormSuccess('');
        fetchData();
      }, 1000);
    } catch (err) {
      setFormError(err.message);
    }
  };

  const handleDeleteProject = async (projectId) => {
    if (!window.confirm("Are you sure you want to delete this project? All associated tasks will be permanently deleted.")) {
      return;
    }

    try {
      const res = await fetch(`/api/projects/${projectId}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Failed to delete project.');
      }

      fetchData();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm("Are you sure you want to delete this task?")) {
      return;
    }

    try {
      const res = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Failed to delete task.');
      }

      fetchData();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleAssigneeChange = async (taskId, newAssigneeId) => {
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

      fetchData();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDueDateChange = async (taskId, dueDate) => {
    try {
      const res = await fetch(`/api/tasks/${taskId}/due-date`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dueDate }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Failed to update task deadline.');
      }

      const updated = await res.json();
      setTasks(prev => prev.map(task => task.id === updated.id ? updated : task));
      await fetchData();
    } catch (error) {
      alert(error.message);
      fetchData();
    }
  };

  const handleOpenFeedbackModal = (task) => {
    setSelectedTaskForFeedback(task);
    setFeedbackInput(task.feedback || '');
    setFeedbackModalOpen(true);
  };

  const handleSaveFeedback = async (e) => {
    e.preventDefault();
    if (!selectedTaskForFeedback) return;
    setFeedbackSaving(true);
    try {
      const res = await fetch(`/api/tasks/${selectedTaskForFeedback.id}/feedback`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ feedback: feedbackInput }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to update feedback.');
      }

      const updated = await res.json();
      setTasks(prev => prev.map(t => t.id === updated.id ? updated : t));
      setFeedbackModalOpen(false);
      setSelectedTaskForFeedback(null);
      setFeedbackInput('');
    } catch (err) {
      alert(err.message);
    } finally {
      setFeedbackSaving(false);
    }
  };

  // Helper to format date as YYYY-MM-DD
  const formatYMD = (d) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleSelectPreset = (presetKey) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    if (presetKey === 'all') {
      setDatePreset('all');
      setStartDate('');
      setEndDate('');
    } else if (presetKey === 'today') {
      setDatePreset('today');
      setStartDate(formatYMD(today));
      setEndDate(formatYMD(today));
    } else if (presetKey === 'tomorrow') {
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      setDatePreset('tomorrow');
      setStartDate(formatYMD(tomorrow));
      setEndDate(formatYMD(tomorrow));
    } else if (presetKey === 'this_week') {
      const day = today.getDay();
      const diffToMon = day === 0 ? -6 : 1 - day;
      const monday = new Date(today);
      monday.setDate(today.getDate() + diffToMon);
      const sunday = new Date(monday);
      sunday.setDate(monday.getDate() + 6);
      setDatePreset('this_week');
      setStartDate(formatYMD(monday));
      setEndDate(formatYMD(sunday));
    } else if (presetKey === 'this_month') {
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
      const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      setDatePreset('this_month');
      setStartDate(formatYMD(firstDay));
      setEndDate(formatYMD(lastDay));
    } else if (presetKey === 'overdue') {
      setDatePreset('overdue');
      setStartDate('');
      setEndDate('');
    } else if (presetKey === 'custom') {
      setDatePreset('custom');
    }
  };

  const handleResetFilters = () => {
    setDatePreset('all');
    setStartDate('');
    setEndDate('');
    setDateField('dueDate');
    setSearchQuery('');
    setStatusFilter('all');
    setProjectFilter('all');
    setAssigneeFilter('all');
    setSortBy('dueDate_asc');
  };

  const hasActiveFilters = datePreset !== 'all' || startDate !== '' || endDate !== '' || searchQuery !== '' || statusFilter !== 'all' || projectFilter !== 'all' || assigneeFilter !== 'all';

  const datePresets = [
    { key: 'all', label: 'All Dates' },
    { key: 'today', label: 'Today' },
    { key: 'tomorrow', label: 'Tomorrow' },
    { key: 'this_week', label: 'This Week' },
    { key: 'this_month', label: 'This Month' },
    { key: 'overdue', label: 'Overdue' },
    { key: 'custom', label: 'Custom Range' },
  ];

  const filteredTasks = useMemo(() => {
    const now = new Date();
    const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    const day = todayDate.getDay();
    const diffToMon = day === 0 ? -6 : 1 - day;
    const startOfWeek = new Date(todayDate);
    startOfWeek.setDate(todayDate.getDate() + diffToMon);
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

    const list = tasks.filter((task) => {
      // 1. Date Filter
      const targetDateRaw = task[dateField] || task.dueDate;
      const targetDate = new Date(targetDateRaw);
      const targetNormalized = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());

      if (datePreset === 'today') {
        if (targetNormalized.getTime() !== todayDate.getTime()) return false;
      } else if (datePreset === 'tomorrow') {
        if (targetNormalized.getTime() !== tomorrowDate.getTime()) return false;
      } else if (datePreset === 'this_week') {
        if (targetDate < startOfWeek || targetDate > endOfWeek) return false;
      } else if (datePreset === 'this_month') {
        if (targetDate < startOfMonth || targetDate > endOfMonth) return false;
      } else if (datePreset === 'overdue') {
        const isOverdue = task.status !== 'completed' && new Date(task.dueDate) < now;
        if (!isOverdue) return false;
      } else if (datePreset === 'custom' || startDate || endDate) {
        if (startDate) {
          const startBoundary = new Date(startDate + 'T00:00:00');
          if (targetDate < startBoundary) return false;
        }
        if (endDate) {
          const endBoundary = new Date(endDate + 'T23:59:59.999');
          if (targetDate > endBoundary) return false;
        }
      }

      // 2. Status Filter
      if (statusFilter !== 'all') {
        if (statusFilter === 'overdue') {
          const isOverdue = task.status !== 'completed' && new Date(task.dueDate) < now;
          if (!isOverdue) return false;
        } else if (task.status !== statusFilter) {
          return false;
        }
      }

      // 3. Project Filter
      if (projectFilter !== 'all' && String(task.projectId) !== String(projectFilter)) {
        return false;
      }

      // 4. Assignee Filter
      if (assigneeFilter !== 'all' && String(task.assignedToId) !== String(assigneeFilter)) {
        return false;
      }

      // 5. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = task.title?.toLowerCase().includes(q);
        const matchesDesc = task.description?.toLowerCase().includes(q);
        const matchesProject = task.project?.title?.toLowerCase().includes(q);
        const matchesAssignee = task.assignedTo?.name?.toLowerCase().includes(q);
        const matchesAssigner = task.assignedBy?.name?.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesProject && !matchesAssignee && !matchesAssigner) {
          return false;
        }
      }

      return true;
    });

    // 6. Sort
    list.sort((a, b) => {
      if (sortBy === 'dueDate_asc') {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      if (sortBy === 'dueDate_desc') {
        return new Date(b.dueDate) - new Date(a.dueDate);
      }
      if (sortBy === 'createdAt_desc') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      if (sortBy === 'title_asc') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    return list;
  }, [tasks, datePreset, startDate, endDate, dateField, statusFilter, projectFilter, assigneeFilter, searchQuery, sortBy]);

  // Tasks specifically belonging to the currently opened project modal
  const activeProjectTasks = useMemo(() => {
    if (!activeProjectModal) return [];
    return tasks.filter((t) => t.project && Number(t.project.id) === Number(activeProjectModal.id));
  }, [tasks, activeProjectModal]);

  const filteredProjectTasks = useMemo(() => {
    if (!activeProjectModal) return [];
    let list = [...activeProjectTasks];
    if (projectTaskFilter !== 'all') {
      if (projectTaskFilter === 'overdue') {
        const now = new Date();
        list = list.filter((t) => t.status !== 'completed' && new Date(t.dueDate) < now);
      } else {
        list = list.filter((t) => t.status === projectTaskFilter);
      }
    }
    if (projectTaskSearch.trim()) {
      const q = projectTaskSearch.toLowerCase().trim();
      list = list.filter(
        (t) =>
          (t.title && t.title.toLowerCase().includes(q)) ||
          (t.description && t.description.toLowerCase().includes(q)) ||
          (t.assignedTo && t.assignedTo.name && t.assignedTo.name.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeProjectTasks, projectTaskFilter, projectTaskSearch, activeProjectModal]);

  if (loading && !stats) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"></div>
        <p className="text-slate-400 text-sm">Loading dashboard analytics...</p>
      </div>
    );
  }

  // Set up chart data
  const hasChartData = stats && (stats.breakdown.completed > 0 || stats.breakdown.inProgress > 0 || stats.breakdown.overdue > 0 || stats.breakdown.notStarted > 0);
  
  const chartData = {
    labels: ['Completed', 'In Progress', 'Overdue', 'Not Started'],
    datasets: [
      {
        data: stats ? [
          stats.breakdown.completed,
          stats.breakdown.inProgress,
          stats.breakdown.overdue,
          stats.breakdown.notStarted,
        ] : [0, 0, 0, 0],
        backgroundColor: ['#22C55E', '#F97316', '#EF4444', '#3B82F6'],
        borderColor: isDark ? '#0b1329' : '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: isDark ? '#94a3b8' : '#475569',
          font: { family: 'Inter', size: 11, weight: '500' },
          boxWidth: 10,
          padding: 15,
        },
      },
      tooltip: {
        backgroundColor: isDark ? '#0f172a' : '#ffffff',
        titleColor: isDark ? '#ffffff' : '#0f172a',
        bodyColor: isDark ? '#cbd5e1' : '#334155',
        titleFont: { family: 'Outfit', size: 13 },
        bodyFont: { family: 'Inter', size: 12 },
        padding: 10,
        borderColor: isDark ? '#334155' : '#e2e8f0',
        borderWidth: 1,
      },
    },
    cutout: '72%',
  };

  // Team members available for task assignment
  const assignableUsers = usersList;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Upper header controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight font-outfit">Management Dashboard</h2>
          <p className="text-slate-400 text-sm mt-0.5">Overview of team tasks, project health, and deadlines.</p>
        </div>
        <div className="flex items-center gap-3">
          {user.role === 'admin' && (
            <button
              onClick={() => setIsUserManagementOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 px-4 py-2 text-sm font-semibold transition cursor-pointer shadow-sm group"
            >
              <Users className="h-4.5 w-4.5 text-indigo-400 group-hover:text-indigo-300 transition" />
              <span>User Accounts</span>
            </button>
          )}

          {(user.role === 'admin' || user.role === 'manager' || user.role === 'executive') && (
            <button
              onClick={() => {
                setEditingProject(null);
                setProjectForm({ title: '', description: '', link: '' });
                setIsProjectModalOpen(true);
              }}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 px-4 py-2 text-sm font-semibold transition cursor-pointer"
            >
              <Plus className="h-4.5 w-4.5" />
              New Project
            </button>
          )}
          {user.role !== 'executive' && (
            <button
              onClick={() => setIsTaskModalOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white px-4 py-2 text-sm font-semibold transition shadow-lg shadow-indigo-600/15 cursor-pointer"
            >
              <Plus className="h-4.5 w-4.5" />
              Assign Task
            </button>
          )}
        </div>
      </div>

      {/* Metric Cards grid */}
      {stats && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Total Projects */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 flex items-center justify-between">
            <div>
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Total Projects</span>
              <span className="block text-3xl font-bold text-white mt-1.5 font-outfit">{stats.totalProjects}</span>
            </div>
            <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Folder className="h-6 w-6" />
            </div>
          </div>

          {/* Active Tasks */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 flex items-center justify-between">
            <div>
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Active Tasks</span>
              <span className="block text-3xl font-bold text-white mt-1.5 font-outfit">{stats.activeTasks}</span>
            </div>
            <div className="h-12 w-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <Clock className="h-6 w-6" />
            </div>
          </div>

          {/* Pending Overdue */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 flex items-center justify-between">
            <div>
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Pending Overdue</span>
              <span className="block text-3xl font-bold text-white mt-1.5 font-outfit">{stats.overdueTasks}</span>
            </div>
            <div className="h-12 w-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <AlertTriangle className="h-6 w-6" />
            </div>
          </div>

          {/* Completed Tasks */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 flex items-center justify-between">
            <div>
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Completed Tasks</span>
              <span className="block text-3xl font-bold text-white mt-1.5 font-outfit">{stats.completedTasks}</span>
            </div>
            <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="h-6 w-6" />
            </div>
          </div>
        </div>
      )}

      {/* Projects first, followed by the chart */}
      <div className="space-y-8">
        
        {/* Projects List */}
        <div className="bg-slate-900/30 border border-slate-800/60 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-outfit">
            <Folder className="h-5 w-5 text-indigo-400" />
            Active Projects
          </h3>

          {projects.length === 0 ? (
            <div className="text-center py-10 border border-dashed border-slate-800 rounded-xl">
              <Folder className="mx-auto h-10 w-10 text-slate-600 mb-3" />
              <p className="text-slate-400 text-sm">No projects created yet.</p>
              {(user.role === 'admin' || user.role === 'manager' || user.role === 'executive') && (
                <button
                  onClick={() => setIsProjectModalOpen(true)}
                  className="mt-3 text-xs font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer"
                >
                  Create one now &rarr;
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
              {projects.map((project) => {
                const canDeleteProject = (user.role === 'admin' && project.createdBy.role === 'admin') || (user.role === 'manager' && project.createdBy.id === user.id);
                const canEditProject = canDeleteProject;
                return (
                  <div 
                    key={project.id} 
                    onClick={() => handleOpenProjectDetails(project)}
                    className="bg-slate-950/40 border border-slate-800/80 hover:border-indigo-500/60 hover:bg-slate-900/50 rounded-xl p-5 transition duration-200 relative group flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-lg hover:shadow-indigo-500/5"
                  >
                    
                    {/* Delete project button */}
                    {canDeleteProject && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteProject(project.id);
                        }}
                        title="Delete Project"
                        className="absolute top-4 right-4 text-slate-500 hover:text-rose-500 opacity-0 group-hover:opacity-100 focus:opacity-100 transition duration-150 p-1.5 hover:bg-rose-500/10 rounded-lg cursor-pointer z-10"
                      >
                        <Trash2 className="h-4.5 w-4.5" />
                      </button>
                    )}

                    {canEditProject && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenProjectEditor(project);
                        }}
                        title="Edit Project"
                        className={`absolute top-4 right-12 text-slate-500 hover:text-indigo-400 opacity-0 group-hover:opacity-100 focus:opacity-100 transition duration-150 p-1.5 hover:bg-indigo-500/10 rounded-lg cursor-pointer z-10`}
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                    )}

                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2.5 pt-6">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <h4 className="font-semibold text-white text-base font-outfit group-hover:text-indigo-300 transition">
                              {project.title}
                            </h4>
                            {project.link && (
                              <a
                                href={project.link.startsWith('http://') || project.link.startsWith('https://') ? project.link : `https://${project.link}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 hover:text-indigo-300 border border-indigo-500/20 hover:border-indigo-500/40 transition duration-150 shadow-sm"
                                title={`Visit link: ${project.link}`}
                              >
                                <ExternalLink className="h-3 w-3" />
                                <span>Project Link</span>
                              </a>
                            )}
                          </div>
                          {project.description && (
                            <div className="text-slate-400 text-xs mt-1 leading-relaxed line-clamp-2">
                              <LinkifiedText text={project.description} />
                            </div>
                          )}
                        </div>
                        <span className="text-xs font-bold text-slate-300 bg-slate-800 px-2 py-0.5 rounded-md shrink-0">
                          {project.metrics.progress}%
                        </span>
                      </div>

                      {/* Progress bar container */}
                      <div className="w-full bg-slate-850 h-2 rounded-full overflow-hidden mb-3">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full transition-all duration-500" 
                          style={{ width: `${project.metrics.progress}%` }}
                        ></div>
                      </div>

                      {/* Sub metrics info */}
                      <div className="flex items-center gap-3 text-slate-500 text-xs">
                        <span>Tasks: <strong className="text-slate-300">{project.metrics.totalTasks}</strong></span>
                        <span>Done: <strong className="text-emerald-400">{project.metrics.completedTasks}</strong></span>
                        {project.metrics.overdueTasks > 0 && (
                          <span className="text-rose-400 font-medium">Overdue: {project.metrics.overdueTasks}</span>
                        )}
                      </div>
                    </div>

                    {/* Interactive Action Bar at Bottom of Project Card */}
                    <div className="pt-3 border-t border-slate-850/80 mt-3 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenProjectDetails(project);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition cursor-pointer"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>Open & Tasks ({project.metrics.totalTasks})</span>
                      </button>

                      {user.role !== 'executive' && (
                        <button
                          type="button"
                          onClick={(e) => handleOpenAssignTaskForProject(project, e)}
                          title="Directly assign task to this project"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 hover:border-indigo-500 px-2.5 py-1 rounded-lg transition shadow-xs cursor-pointer"
                        >
                          <Plus className="h-3 w-3" />
                          <span>Assign</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Donut Chart Widget */}
        <div className="bg-slate-900/30 border border-slate-800/60 rounded-2xl p-6 flex flex-col items-center">
          <h3 className="text-lg font-bold text-white mb-6 w-full text-left flex items-center gap-2 font-outfit">
            <BarChart3 className="h-5 w-5 text-indigo-400" />
            Task Status Breakdown
          </h3>

          <div className="relative w-full h-64 flex items-center justify-center">
            {stats && hasChartData ? (
              <Doughnut data={chartData} options={chartOptions} />
            ) : (
              <div className="text-center text-slate-500 text-sm">
                <ListTodo className="mx-auto h-10 w-10 text-slate-700 mb-3" />
                No task statistics available.
              </div>
            )}
            {stats && hasChartData && (
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-[-25px]">
                <span className="text-slate-500 text-xxs font-semibold uppercase tracking-widest">Total Tasks</span>
                <span className="text-3xl font-extrabold text-white mt-0.5 font-outfit">{stats.totalTasks}</span>
              </div>
            )}
          </div>
        </div>

      </div>

      {user.role !== 'executive' && (
      /* Lower section: Tasks list table for managers/admins with Date & Category Filtering */
      <div className="bg-slate-900/30 border border-slate-800/60 rounded-2xl p-6 space-y-5">
        
        {/* Section Header & Active count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-800/40">
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 font-outfit">
                <ListTodo className="h-5 w-5 text-indigo-400" />
                All Tasks Overview
              </h3>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {filteredTasks.length} of {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
              </span>
            </div>
            <p className="text-slate-400 text-xs mt-1">
              Filter by due date, creation date, project, or status to monitor team deliverables.
            </p>
          </div>

          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-xl px-3 py-1.5 transition self-start sm:self-auto shadow-sm cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5 text-indigo-400" />
              Reset All Filters
            </button>
          )}
        </div>

        {/* Date Filter & Control Toolbar */}
        <div className="bg-slate-950/40 border border-slate-850 rounded-xl p-4 space-y-3.5">
          
          {/* Row 1: Date Presets & Date Field Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            
            {/* Quick Date Presets */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-indigo-400" /> Date Preset:
              </span>
              {datePresets.map((preset) => {
                const isActive = datePreset === preset.key;
                return (
                  <button
                    key={preset.key}
                    onClick={() => handleSelectPreset(preset.key)}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                        : 'bg-slate-900/80 hover:bg-slate-850 text-slate-300 border border-slate-800 hover:text-white'
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>

            {/* Date Field Toggle (Due Date vs Created Date) */}
            <div className="inline-flex items-center bg-slate-900/90 border border-slate-800 p-0.5 rounded-lg text-xs">
              <span className="text-[11px] text-slate-400 px-2 py-0.5 font-medium">Filter on:</span>
              <button
                onClick={() => setDateField('dueDate')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition cursor-pointer ${
                  dateField === 'dueDate'
                    ? 'bg-slate-800 text-indigo-400 font-semibold shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Due Date
              </button>
              <button
                onClick={() => setDateField('createdAt')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition cursor-pointer ${
                  dateField === 'createdAt'
                    ? 'bg-slate-800 text-indigo-400 font-semibold shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Created Date
              </button>
            </div>

          </div>

          {/* Row 2: Custom Date Range Pickers + Search & Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2 border-t border-slate-850/60">
            
            {/* Start Date */}
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">From Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  setDatePreset('custom');
                }}
                className="w-full bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">To Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  setDatePreset('custom');
                }}
                className="w-full bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>

            {/* Search query */}
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Search Keyword</label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Title, description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-xl pl-8 pr-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Task Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-indigo-500 transition cursor-pointer"
              >
                <option value="all">All Statuses</option>
                <option value="not_started">Not Started</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="overdue">Overdue Only</option>
              </select>
            </div>

            {/* Project Filter */}
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Project</label>
              <select
                value={projectFilter}
                onChange={(e) => setProjectFilter(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-indigo-500 transition cursor-pointer"
              >
                <option value="all">All Projects</option>
                {projects.map((p) => (
                  <option key={p.id} value={p.id}>{p.title}</option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-indigo-500 transition cursor-pointer"
              >
                <option value="dueDate_asc">Due Date (Earliest)</option>
                <option value="dueDate_desc">Due Date (Latest)</option>
                <option value="createdAt_desc">Created (Newest)</option>
                <option value="title_asc">Title (A-Z)</option>
              </select>
            </div>

          </div>

          {/* Active filter summary pill bar */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] text-slate-500 font-medium">Active criteria:</span>
              {datePreset !== 'all' && (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-md">
                  <Calendar className="h-3 w-3" />
                  {datePresets.find(p => p.key === datePreset)?.label || 'Custom Range'} ({dateField === 'dueDate' ? 'Due' : 'Created'})
                </span>
              )}
              {startDate && (
                <span className="text-[11px] font-medium bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700">
                  From: {startDate}
                </span>
              )}
              {endDate && (
                <span className="text-[11px] font-medium bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700">
                  To: {endDate}
                </span>
              )}
              {statusFilter !== 'all' && (
                <span className="text-[11px] font-medium bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700">
                  Status: {statusFilter.replace('_', ' ')}
                </span>
              )}
              {projectFilter !== 'all' && (
                <span className="text-[11px] font-medium bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700">
                  Project: {projects.find(p => String(p.id) === String(projectFilter))?.title || projectFilter}
                </span>
              )}
              {searchQuery && (
                <span className="text-[11px] font-medium bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700">
                  Query: "{searchQuery}"
                </span>
              )}
            </div>
          )}

        </div>

        {/* Task Table or Empty States */}
        {tasks.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-slate-500 text-sm">No tasks assigned yet.</p>
          </div>
        ) : filteredTasks.length === 0 ? (
          <div className="text-center py-12 px-4 bg-slate-950/20 border border-dashed border-slate-850 rounded-xl space-y-3">
            <div className="h-10 w-10 mx-auto rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Calendar className="h-5 w-5" />
            </div>
            <h4 className="text-base font-semibold text-white font-outfit">No tasks matched your date & filter criteria</h4>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              There are no tasks matching the selected date range or status filters. Try adjusting your dates or reset all filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/25 px-3 py-1.5 rounded-xl transition cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Clear & Reset Filters
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm text-slate-300">
              <thead>
                <tr className="border-b border-slate-850 text-slate-400 text-xs font-semibold uppercase tracking-wider bg-slate-950/20">
                  <th className="py-3 px-4">Task Title</th>
                  <th className="py-3 px-4">Project</th>
                  <th className="py-3 px-4">Assigned To</th>
                  <th className="py-3 px-4">Assigned By</th>
                  <th className="py-3 px-4">Due Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850/60">
                {filteredTasks.map((task) => {
                  const now = new Date();
                  const isOverdue = task.status !== 'completed' && new Date(task.dueDate) < now;
                  
                  // Delete permission: Admin or task creator
                  const canDeleteTask = user.role === 'admin' || (user.role === 'manager' && task.assignedById === user.id);

                  // Status configuration
                  let statusLabel = 'Not Started';
                  let statusBg = 'bg-blue-500/10 text-blue-400 border border-blue-500/25';
                  if (task.status === 'completed') {
                    statusLabel = 'Completed';
                    statusBg = 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25';
                  } else if (isOverdue) {
                    statusLabel = 'Overdue';
                    statusBg = 'bg-rose-500/10 text-rose-400 border border-rose-500/25';
                  } else if (task.status === 'in_progress') {
                    statusLabel = 'In Progress';
                    statusBg = 'bg-orange-500/10 text-orange-400 border border-orange-500/25';
                  }

                  return (
                    <tr key={task.id} className="hover:bg-slate-900/10 transition align-top">
                      <td className="py-3.5 px-4">
                        <span className="font-semibold text-slate-100 block">{task.title}</span>
                        {task.description && (
                          <div className="text-xs text-slate-400 block mt-0.5">
                            <LinkifiedText text={task.description} />
                          </div>
                        )}

                        {/* Task Feedback Box / Button for completed tasks */}
                        {task.feedback ? (
                          <div className="mt-2 text-xs bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 rounded-lg p-2 flex items-start justify-between gap-2 max-w-lg">
                            <div className="flex items-start gap-1.5 min-w-0">
                              <MessageSquare className="h-3.5 w-3.5 text-indigo-400 shrink-0 mt-0.5" />
                              <div className="break-words">
                                <span className="font-semibold text-indigo-200">Feedback: </span>
                                <span className="text-slate-300"><LinkifiedText text={task.feedback} /></span>
                              </div>
                            </div>
                            <button
                              onClick={() => handleOpenFeedbackModal(task)}
                              className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-200 underline shrink-0 cursor-pointer ml-1"
                            >
                              Edit
                            </button>
                          </div>
                        ) : (task.status === 'completed') && (
                          <button
                            onClick={() => handleOpenFeedbackModal(task)}
                            className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-indigo-300 hover:text-white bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 rounded-lg px-2.5 py-1 transition cursor-pointer"
                          >
                            <MessageSquarePlus className="h-3.5 w-3.5 text-indigo-400" />
                            <span>Give Feedback</span>
                          </button>
                        )}
                        
                        {/* Assignee modification history timeline */}
                        {task.histories && task.histories.length > 0 && (
                          <div className="mt-2.5 max-w-lg bg-slate-950/30 border border-slate-900/50 p-2 rounded-lg">
                            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1 mb-1">
                              <History className="h-3 w-3 text-indigo-400" /> Re-assignment Log ({task.histories.length})
                            </span>
                            <div className="space-y-1">
                              {task.histories.map((h) => (
                                <div key={h.id} className="text-[10px] text-slate-400 leading-normal flex items-start gap-1">
                                  <span className="text-indigo-500 select-none">•</span>
                                  <span>
                                    <strong>{h.changedBy.name}</strong> re-assigned from <span className="text-slate-300 font-medium">{h.oldValue}</span> to <span className="text-indigo-400 font-medium">{h.newValue}</span> on {new Date(h.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-slate-400">{task.project.title}</td>
                      
                      {/* Inline re-assignment selector */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <UserAvatar user={task.assignedTo} size="xs" />
                          <select
                            value={task.assignedTo.id}
                            onChange={(e) => handleAssigneeChange(task.id, e.target.value)}
                            className="bg-slate-950/60 border border-slate-850 hover:border-slate-700/80 rounded-xl px-2.5 py-1 text-xs text-slate-350 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition cursor-pointer"
                          >
                            {assignableUsers.map(u => (
                              <option key={u.id} value={u.id}>{u.name} ({u.role})</option>
                            ))}
                          </select>
                        </div>
                      </td>
                      
                      <td className="py-3.5 px-4 text-slate-400">
                        <div className="flex items-center gap-2">
                          <UserAvatar user={task.assignedBy} size="xs" />
                          <span>{task.assignedBy.name}</span>
                        </div>
                      </td>
                      <td className={`py-3.5 px-4 font-medium ${isOverdue ? 'text-rose-400 font-semibold' : 'text-slate-400'}`}>
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-slate-500" />
                            <input
                              type="date"
                              value={new Date(task.dueDate).toISOString().slice(0, 10)}
                              onChange={(e) => handleDueDateChange(task.id, e.target.value)}
                              className="bg-transparent text-xs text-slate-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded cursor-pointer"
                              aria-label={`Edit deadline for ${task.title}`}
                            />
                          </div>
                          {isOverdue && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-rose-500 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20 w-max">
                              Overdue
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        {task.status === 'completed' && task.feedback ? (
                          <div className="flex flex-col gap-1 items-start">
                            <span className="inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                              Completed
                            </span>
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
                              <MessageSquare className="h-2.5 w-2.5" /> Feedback Given
                            </span>
                          </div>
                        ) : (
                          <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusBg}`}>
                            {statusLabel}
                          </span>
                        )}
                      </td>
                      
                      {/* Delete task button */}
                      <td className="py-3.5 px-4 text-center">
                        {canDeleteTask ? (
                          <button
                            onClick={() => handleDeleteTask(task.id)}
                            title="Delete Task"
                            className="text-slate-500 hover:text-rose-500 transition p-1 hover:bg-rose-500/10 rounded cursor-pointer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        ) : (
                          <span className="text-slate-750">-</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
      )}

      {/* ================= PROJECT MODAL ================= */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white font-outfit">{editingProject ? 'Edit Project' : 'Create New Project'}</h3>
              <button 
                onClick={() => {
                  setIsProjectModalOpen(false);
                  setEditingProject(null);
                }}
                className="text-slate-400 hover:text-white transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {formError && <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg p-3">{formError}</div>}
            {formSuccess && <div className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">{formSuccess}</div>}

            <form onSubmit={editingProject ? handleSaveProject : handleCreateProject} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-350 mb-1.5">Project Title</label>
                <input
                  type="text"
                  required
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  placeholder="e.g. Gamma Redesign"
                  className="w-full bg-slate-950/60 border border-slate-850 rounded-xl py-2 px-3 text-slate-200 focus:outline-none focus:border-indigo-500 text-sm transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-350 mb-1.5">Project Link / URL (Optional)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <Globe className="h-4 w-4" />
                  </div>
                  <input
                    type="url"
                    value={projectForm.link}
                    onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
                    placeholder="https://github.com/org/repo or https://example.com"
                    className="w-full bg-slate-950/60 border border-slate-850 rounded-xl py-2 pl-9 pr-3 text-slate-200 focus:outline-none focus:border-indigo-500 text-sm transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-350 mb-1.5">Description (Optional)</label>
                <textarea
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  placeholder="Brief project mission details (URLs will be clickable)..."
                  rows="3"
                  className="w-full bg-slate-950/60 border border-slate-850 rounded-xl py-2 px-3 text-slate-200 focus:outline-none focus:border-indigo-500 text-sm transition"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-xl text-sm transition duration-200"
              >
                {editingProject ? 'Save Changes' : 'Create Project'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= TASK ASSIGNMENT MODAL ================= */}
      {isTaskModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white font-outfit">Assign Team Task</h3>
              <button 
                onClick={() => setIsTaskModalOpen(false)}
                className="text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {formError && <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg p-3">{formError}</div>}
            {formSuccess && <div className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">{formSuccess}</div>}

            {taskForm.projectId && projects.find(p => String(p.id) === String(taskForm.projectId)) && (
              <div className="bg-indigo-500/10 border border-indigo-500/25 rounded-xl p-2.5 flex items-center gap-2 text-xs text-indigo-300">
                <Folder className="h-4 w-4 text-indigo-400 shrink-0" />
                <span>Assigning for Project: <strong className="text-white font-semibold">{projects.find(p => String(p.id) === String(taskForm.projectId))?.title}</strong></span>
              </div>
            )}

            <form onSubmit={handleCreateTask} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-350 mb-1.5">Select Project</label>
                <select
                  required
                  value={taskForm.projectId}
                  onChange={(e) => setTaskForm({ ...taskForm, projectId: e.target.value })}
                  className="w-full bg-slate-950/60 border border-slate-850 rounded-xl py-2 px-3 text-slate-300 focus:outline-none focus:border-indigo-500 text-sm transition cursor-pointer"
                >
                  <option value="">-- Choose Project --</option>
                  {projects.map(p => (
                    <option key={p.id} value={p.id}>{p.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-350 mb-1.5">Task Title</label>
                <input
                  type="text"
                  required
                  value={taskForm.title}
                  onChange={(e) => setTaskForm({ ...taskForm, title: e.target.value })}
                  placeholder="e.g. Integrate auth schemas"
                  className="w-full bg-slate-950/60 border border-slate-850 rounded-xl py-2 px-3 text-slate-200 focus:outline-none focus:border-indigo-500 text-sm transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-350 mb-1.5">Description (Optional)</label>
                <textarea
                  value={taskForm.description}
                  onChange={(e) => setTaskForm({ ...taskForm, description: e.target.value })}
                  placeholder="Details about task objectives..."
                  rows="2.5"
                  className="w-full bg-slate-950/60 border border-slate-850 rounded-xl py-2 px-3 text-slate-200 focus:outline-none focus:border-indigo-500 text-sm transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-350 mb-1.5">Assign To Team Member</label>
                <select
                  required
                  value={taskForm.assignedToId}
                  onChange={(e) => setTaskForm({ ...taskForm, assignedToId: e.target.value })}
                  className="w-full bg-slate-950/60 border border-slate-850 rounded-xl py-2 px-3 text-slate-300 focus:outline-none focus:border-indigo-500 text-sm transition"
                >
                  <option value="">-- Select Member --</option>
                  {assignableUsers.map(u => (
                    <option key={u.id} value={u.id}>{u.name} ({u.role})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-350 mb-1.5">Due Deadline Date</label>
                <input
                  type="date"
                  required
                  value={taskForm.dueDate}
                  onChange={(e) => setTaskForm({ ...taskForm, dueDate: e.target.value })}
                  className="w-full bg-slate-950/60 border border-slate-850 rounded-xl py-2 px-3 text-slate-300 focus:outline-none focus:border-indigo-500 text-sm transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-xl text-sm transition duration-200"
              >
                Assign Task
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= TASK FEEDBACK MODAL ================= */}
      {feedbackModalOpen && selectedTaskForFeedback && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-indigo-400" />
                <h3 className="text-xl font-bold text-white font-outfit">Task Feedback</h3>
              </div>
              <button 
                onClick={() => setFeedbackModalOpen(false)}
                className="text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="bg-slate-950/60 border border-slate-850 rounded-xl p-3 text-xs space-y-1">
              <p className="text-slate-400">Task: <strong className="text-white font-medium">{selectedTaskForFeedback.title}</strong></p>
              <p className="text-slate-400">Assigned To: <span className="text-slate-300">{selectedTaskForFeedback.assignedTo?.name}</span></p>
              <p className="text-slate-400">Project: <span className="text-slate-300">{selectedTaskForFeedback.project?.title}</span></p>
            </div>

            <form onSubmit={handleSaveFeedback} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-350 mb-1.5">
                  Feedback / Review Note
                </label>
                <textarea
                  value={feedbackInput}
                  onChange={(e) => setFeedbackInput(e.target.value)}
                  placeholder="Write constructive feedback or review notes for the employee... (URLs will be clickable)"
                  rows="4"
                  className="w-full bg-slate-950/60 border border-slate-850 rounded-xl py-2 px-3 text-slate-200 focus:outline-none focus:border-indigo-500 text-sm transition"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFeedbackModalOpen(false)}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-2.5 rounded-xl text-sm transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={feedbackSaving}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-xl text-sm transition duration-200 disabled:opacity-50 cursor-pointer"
                >
                  {feedbackSaving ? 'Saving...' : 'Save Feedback'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= PROJECT DETAILS & TASKS MODAL ================= */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-950/60 shrink-0">
              <div className="flex items-start gap-3.5">
                <div className="h-11 w-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                  <Folder className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-outfit tracking-tight">
                      {activeProjectModal.title}
                    </h3>
                    {activeProjectModal.link && (
                      <a
                        href={activeProjectModal.link.startsWith('http://') || activeProjectModal.link.startsWith('https://') ? activeProjectModal.link : `https://${activeProjectModal.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-500/30 transition shadow-sm"
                        title="Open Project Link"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Visit Link</span>
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-2 flex-wrap">
                    <span>Created by <strong className="text-slate-200">{activeProjectModal.createdBy?.name || 'Admin'}</strong></span>
                    <span>•</span>
                    <span className="text-slate-400">Total Tasks: <strong className="text-indigo-300">{activeProjectTasks.length}</strong></span>
                  </p>
                </div>
              </div>

              {/* Action Controls in Header */}
              <div className="flex items-center gap-2.5 self-end sm:self-center">
                {user.role !== 'executive' && (
                  <button
                    onClick={() => handleOpenAssignTaskForProject(activeProjectModal)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white px-3.5 py-2 text-xs sm:text-sm font-semibold transition shadow-lg shadow-indigo-600/20 cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Assign Task</span>
                  </button>
                )}

                {((user.role === 'admin' && activeProjectModal.createdBy?.role === 'admin') || (user.role === 'manager' && activeProjectModal.createdBy?.id === user.id)) && (
                  <button
                    onClick={() => {
                      handleOpenProjectEditor(activeProjectModal);
                      setActiveProjectModal(null);
                    }}
                    title="Edit Project Details"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 px-3 py-2 text-xs font-medium transition cursor-pointer"
                  >
                    <Pencil className="h-3.5 w-3.5 text-indigo-400" />
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                )}

                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                  title="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
              
              {/* Project Overview Card */}
              <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 sm:p-7 space-y-6 shadow-sm">
                {activeProjectModal.description && (
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <AlignLeft className="h-3.5 w-3.5 text-indigo-400" />
                      Project Description & Objectives
                    </span>
                    <div className="text-sm sm:text-base text-slate-200 leading-relaxed bg-slate-900/80 p-4 sm:p-5 rounded-xl border border-slate-800/90 border-l-4 border-l-indigo-500 shadow-inner">
                      <LinkifiedText text={activeProjectModal.description} />
                    </div>
                  </div>
                )}

                {/* Project Progress & Statistics Row */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
                    <span className="flex items-center gap-1.5">
                      <BarChart3 className="h-4 w-4 text-indigo-400" />
                      Project Completion Health
                    </span>
                    <span className="text-indigo-400 font-bold font-outfit text-sm">
                      {activeProjectModal.metrics.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-850 h-2.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 via-indigo-400 to-emerald-500 h-full rounded-full transition-all duration-500" 
                      style={{ width: `${activeProjectModal.metrics.progress}%` }}
                    ></div>
                  </div>

                  {/* Metric counters */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3 pt-3 border-t border-slate-850">
                    <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-2.5 text-center">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Tasks</span>
                      <span className="text-lg font-bold text-white font-outfit">{activeProjectTasks.length}</span>
                    </div>
                    <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-2.5 text-center">
                      <span className="text-[10px] uppercase font-bold text-orange-400 block">In Progress</span>
                      <span className="text-lg font-bold text-orange-400 font-outfit">
                        {activeProjectTasks.filter(t => t.status === 'in_progress').length}
                      </span>
                    </div>
                    <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-2.5 text-center">
                      <span className="text-[10px] uppercase font-bold text-emerald-400 block">Completed</span>
                      <span className="text-lg font-bold text-emerald-400 font-outfit">
                        {activeProjectTasks.filter(t => t.status === 'completed').length}
                      </span>
                    </div>
                    <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-2.5 text-center">
                      <span className="text-[10px] uppercase font-bold text-rose-400 block">Overdue</span>
                      <span className="text-lg font-bold text-rose-400 font-outfit">
                        {activeProjectTasks.filter(t => t.status !== 'completed' && new Date(t.dueDate) < new Date()).length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Tasks Header & Filter Controls */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2 font-outfit">
                      <ListTodo className="h-4.5 w-4.5 text-indigo-400" />
                      Tasks Assigned to {activeProjectModal.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Directly manage tasks, assign team members, and update deadlines.
                    </p>
                  </div>

                  {user.role !== 'executive' && (
                    <button
                      onClick={() => handleOpenAssignTaskForProject(activeProjectModal)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300 hover:text-white bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-500/30 hover:border-indigo-500 px-3 py-1.5 rounded-xl transition shadow-xs cursor-pointer self-start sm:self-auto"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>+ Assign Task to this Project</span>
                    </button>
                  )}
                </div>

                {/* Search & Status Filter bar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-950/40 p-3 rounded-xl border border-slate-850">
                  {/* Search */}
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-500" />
                    <input
                      type="text"
                      placeholder="Search tasks in this project..."
                      value={projectTaskSearch}
                      onChange={(e) => setProjectTaskSearch(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>

                  {/* Status Pills */}
                  <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                    {[
                      { key: 'all', label: 'All', count: activeProjectTasks.length },
                      { key: 'not_started', label: 'Not Started', count: activeProjectTasks.filter(t => t.status === 'not_started').length },
                      { key: 'in_progress', label: 'In Progress', count: activeProjectTasks.filter(t => t.status === 'in_progress').length },
                      { key: 'completed', label: 'Completed', count: activeProjectTasks.filter(t => t.status === 'completed').length },
                      { key: 'overdue', label: 'Overdue', count: activeProjectTasks.filter(t => t.status !== 'completed' && new Date(t.dueDate) < new Date()).length },
                    ].map(tab => (
                      <button
                        key={tab.key}
                        onClick={() => setProjectTaskFilter(tab.key)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer whitespace-nowrap ${
                          projectTaskFilter === tab.key
                            ? 'bg-indigo-600 text-white shadow-xs'
                            : 'bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-slate-200 border border-slate-800'
                        }`}
                      >
                        {tab.label} ({tab.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tasks List for this project */}
                {filteredProjectTasks.length === 0 ? (
                  <div className="text-center py-12 bg-slate-950/20 border border-dashed border-slate-800 rounded-xl space-y-3">
                    <ListTodo className="mx-auto h-9 w-9 text-slate-600" />
                    <p className="text-slate-400 text-sm font-medium">
                      {activeProjectTasks.length === 0
                        ? 'No tasks have been assigned to this project yet.'
                        : 'No tasks match the selected filter or search keyword.'}
                    </p>
                    {user.role !== 'executive' && (
                      <button
                        onClick={() => handleOpenAssignTaskForProject(activeProjectModal)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-3.5 py-2 rounded-xl transition cursor-pointer shadow-sm"
                      >
                        <Plus className="h-4 w-4" />
                        <span>Assign First Task to {activeProjectModal.title}</span>
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredProjectTasks.map((task) => {
                      const isOverdue = task.status !== 'completed' && new Date(task.dueDate) < new Date();
                      const canDeleteTask = (user.role === 'admin' && activeProjectModal.createdBy?.role === 'admin') || (user.role === 'manager' && (activeProjectModal.createdById === user.id || task.assignedById === user.id));
                      const canReassign = user.role === 'admin' || user.role === 'manager';

                      let statusColor = 'bg-blue-500/10 text-blue-400 border-blue-500/20';
                      let statusText = 'Not Started';
                      if (task.status === 'in_progress') {
                        statusColor = 'bg-amber-500/10 text-amber-400 border-amber-500/20';
                        statusText = 'In Progress';
                      } else if (task.status === 'completed') {
                        statusColor = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
                        statusText = 'Completed';
                      }

                      return (
                        <div 
                          key={task.id}
                          className="bg-slate-950/60 border border-slate-800 hover:border-slate-700/80 rounded-xl p-4 transition duration-150 space-y-3"
                        >
                          {/* Task Title & Status Header */}
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
                            <div className="space-y-1 flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h5 className="text-sm font-semibold text-white font-outfit">{task.title}</h5>
                                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${statusColor}`}>
                                  {statusText}
                                </span>
                                {isOverdue && (
                                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                                    <AlertTriangle className="h-3 w-3" /> Overdue
                                  </span>
                                )}
                              </div>
                              {task.description && (
                                <div className="text-xs text-slate-400 leading-relaxed pt-0.5">
                                  <LinkifiedText text={task.description} />
                                </div>
                              )}
                            </div>

                            {/* Top right actions: Feedback & Delete */}
                            <div className="flex items-center gap-2 shrink-0 self-end sm:self-start">
                              {task.status === 'completed' && (
                                <button
                                  onClick={() => handleOpenFeedbackModal(task)}
                                  className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/20 hover:border-indigo-500/40 transition cursor-pointer"
                                >
                                  <MessageSquare className="h-3 w-3" />
                                  <span>{task.feedback ? 'Edit Feedback' : 'Give Feedback'}</span>
                                </button>
                              )}
                              {canDeleteTask && (
                                <button
                                  onClick={() => handleDeleteTask(task.id)}
                                  title="Delete Task"
                                  className="text-slate-500 hover:text-rose-500 transition p-1 hover:bg-rose-500/10 rounded-lg cursor-pointer"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Task Metadata & Controls Bar */}
                          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-850/80 text-xs text-slate-400">
                            
                            {/* Assignee chip + quick dropdown */}
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] text-slate-500 font-medium">Assigned to:</span>
                              <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2 py-1 rounded-lg">
                                <UserAvatar user={task.assignedTo} size="xs" />
                                {canReassign ? (
                                  <select
                                    value={task.assignedTo?.id || ''}
                                    onChange={(e) => handleAssigneeChange(task.id, e.target.value)}
                                    className="bg-transparent text-xs text-slate-200 font-medium focus:outline-none cursor-pointer"
                                  >
                                    {usersList.map((u) => (
                                      <option key={u.id} value={u.id} className="bg-slate-900 text-slate-200">
                                        {u.name} ({u.role})
                                      </option>
                                    ))}
                                  </select>
                                ) : (
                                  <span className="text-slate-200 font-medium">{task.assignedTo?.name}</span>
                                )}
                              </div>
                            </div>

                            {/* Due date picker */}
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5 text-slate-500" /> Deadline:
                              </span>
                              <input
                                type="date"
                                value={task.dueDate ? new Date(task.dueDate).toISOString().slice(0, 10) : ''}
                                onChange={(e) => handleDueDateChange(task.id, e.target.value)}
                                className="bg-slate-900 border border-slate-800 px-2 py-1 rounded-lg text-xs text-slate-200 hover:border-indigo-500 focus:outline-none focus:border-indigo-500 transition cursor-pointer"
                              />
                            </div>

                          </div>

                          {/* Feedback preview if present */}
                          {task.feedback && (
                            <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-lg p-2.5 text-xs text-indigo-200 flex items-start gap-2">
                              <MessageSquare className="h-3.5 w-3.5 text-indigo-400 shrink-0 mt-0.5" />
                              <div className="flex-1">
                                <span className="font-semibold text-indigo-300 block text-[11px]">Manager / Admin Feedback:</span>
                                <LinkifiedText text={task.feedback} />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400 shrink-0">
              <span className="flex items-center gap-1.5">
                <Folder className="h-3.5 w-3.5 text-indigo-400" />
                <span>Project ID: #{activeProjectModal.id}</span>
              </span>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-1.5 rounded-xl font-medium transition cursor-pointer"
              >
                Close Project View
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Admin User Management Modal */}
      {user.role === 'admin' && (
        <UserManagementModal
          isOpen={isUserManagementOpen}
          onClose={() => {
            setIsUserManagementOpen(false);
            fetchData();
          }}
          onUserCreated={() => fetchData()}
          currentUserId={user.id}
        />
      )}

    </div>
  );
}
