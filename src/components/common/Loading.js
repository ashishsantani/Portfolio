import React from 'react';
import { motion } from 'framer-motion';

const Loading = ({ text = "Loading...", size = "md" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const circleVariants = {
    start: {
      y: "50%",
    },
    end: {
      y: "150%",
    },
  };

  const circleTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <motion.div
        className="flex space-x-2"
        variants={containerVariants}
        initial="start"
        animate="end"
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`${sizeClasses[size]} bg-primary-500 rounded-full`}
            variants={circleVariants}
            transition={circleTransition}
          />
        ))}
      </motion.div>
      
      {text && (
        <motion.p
          className="text-gray-600 dark:text-gray-400 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default Loading;