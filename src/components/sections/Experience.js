import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ArrowRight, Zap } from 'lucide-react';
import { experienceData } from '../../data';

const ExperienceCard = ({ experience, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {/* Connecting Line
      {index < experienceData.length - 1 && (
        <motion.div
          className="absolute left-6 top-24 w-0.5 h-32 bg-gradient-to-b from-primary-400 to-primary-200 dark:from-primary-600 dark:to-primary-800"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
          style={{ transformOrigin: "top" }}
        />
      )} */}

      <div className="flex items-start space-x-6">
        {/* Timeline Dot */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2 + 0.3,
            type: "spring",
            stiffness: 150
          }}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full shadow-lg flex items-center justify-center relative overflow-hidden">
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 bg-primary-400 rounded-full"
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.7, 0, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <experience.icon className="w-6 h-6 text-white relative z-10" />
          </div>
          
          {experience.current && (
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity 
              }}
            />
          )}
        </motion.div>

        {/* Content Card */}
        <motion.div
          className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
          whileHover={{ 
            y: -8,
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          {/* Background Pattern */}
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 opacity-5 dark:opacity-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <experience.icon className="w-full h-full text-primary-500" />
          </motion.div>

          {/* Header */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
          >
            <div className="flex flex-wrap items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {experience.title}
                </h3>
                <p className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-1">
                  {experience.company}
                </p>
              </div>
              
              {experience.current && (
                <motion.div
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                  animate={{ 
                    boxShadow: [
                      "0 4px 14px 0 rgba(34, 197, 94, 0.3)",
                      "0 6px 20px 0 rgba(34, 197, 94, 0.4)",
                      "0 4px 14px 0 rgba(34, 197, 94, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Current</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-primary-500" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-500" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4 text-primary-500" />
                <span>{experience.type}</span>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
          >
            <div className="space-y-4">
              {experience.achievements.map((achievement, achIndex) => (
                <motion.div
                  key={achIndex}
                  className="flex items-start space-x-3 group/achievement"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.7 + achIndex * 0.1 
                  }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2"
                    whileHover={{ scale: 1.3 }}
                  />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover/achievement:text-gray-900 dark:group-hover/achievement:text-white transition-colors">
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-3">
              <ArrowRight className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Technologies Used</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {experience.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="px-4 py-2 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full border border-primary-200 dark:border-primary-700 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0 
                  } : { 
                    opacity: 0, 
                    scale: 0.8, 
                    rotate: -5 
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.9 + techIndex * 0.05,
                    type: "spring",
                    stiffness: 120
                  }}
                  whileHover={{ 
                    backgroundColor: "#f97316",
                    color: "#ffffff",
                    borderColor: "#f97316"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-32 right-20 w-4 h-4 bg-primary-400 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={titleVariants}
            className="relative inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">
              Professional
              <span className="block bg-gradient-to-r from-primary-500 via-primary-600 to-blue-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
          </motion.div>
          
          <motion.p
            variants={titleVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A timeline of growth, innovation, and impactful contributions in the world of technology
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-16">
          {experienceData.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;