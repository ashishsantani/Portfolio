import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { technicalSkills, professionalSkills } from '../../data';

const SkillCard = ({ skill, index, type = 'technical' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const Icon = skill.icon;

  if (type === 'technical') {
    return (
      <motion.div
        ref={ref}
        className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -5, scale: 1.02 }}
      >
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/20 transition-colors">
            <Icon 
              className="w-8 h-8 group-hover:scale-110 transition-transform"
              style={{ color: skill.color }}
            />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {skill.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {skill.category}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Proficiency
            </span>
            <span className="text-sm font-bold text-primary-500">
              {skill.level}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <motion.div
              className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>
    );
  }

  // Professional skills circular progress
  return (
    <motion.div
      ref={ref}
      className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Circular progress */}
      <div className="relative w-24 h-24 mx-auto mb-4">
        <svg
          className="w-24 h-24 transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-200 dark:text-gray-700"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            className="text-primary-500"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: skill.level / 100 } : { pathLength: 0 }}
            transition={{
              delay: index * 0.1 + 0.5,
              duration: 1.5,
              ease: "easeInOut",
            }}
            style={{
              strokeDasharray: `${2 * Math.PI * 40}`,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-primary-500">
            {skill.level}%
          </span>
        </div>
      </div>

      <div className="mb-4">
        <Icon className="w-8 h-8 mx-auto mb-2 text-primary-500" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {skill.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {skill.description}
      </p>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section 
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            My <span className="text-primary-500">Skills</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            A showcase of my technical expertise and professional capabilities
          </motion.p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            variants={itemVariants}
          >
            Technical Skills
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                type="technical"
              />
            ))}
          </div>
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            variants={itemVariants}
          >
            Professional Skills
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                type="professional"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;