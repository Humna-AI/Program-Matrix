/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          completed: '#22C55E',
          inProgress: '#F97316',
          overdue: '#EF4444',
          notStarted: '#3B82F6',
        },
      },
    },
  },
  plugins: [],
}

