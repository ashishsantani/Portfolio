import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative p-2 rounded-full transition-colors duration-300
        bg-gray-100 dark:bg-gray-800 
        hover:bg-gray-200 dark:hover:bg-gray-700
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          rotate: isDark ? 180 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="w-5 h-5 text-yellow-500" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : -180,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="w-5 h-5 text-blue-400" />
      </motion.div>
      
      {/* Invisible content to maintain button size */}
      <div className="w-5 h-5 opacity-0">
        <Sun className="w-5 h-5" />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;