import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Eye, ChevronDown} from 'lucide-react';
import { projects } from '../../data';
import Button from '../common/Button';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
            {project.status}
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex items-center space-x-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs"
                title={tech.name}
              >
                <Icon
                  className="w-3 h-3"
                  style={{ color: tech.color }}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            );
          })}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs text-gray-700 dark:text-gray-300">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <Button
            variant="primary"
            size="sm"
            href={project.liveUrl}
            icon={Eye}
            iconPosition="left"
            className="flex-1"
          >
            Live Demo
          </Button>
          <Button
            variant="outline"
            size="sm"
            href={project.githubUrl}
            icon={Github}
            iconPosition="left"
            className="flex-1 hover:bg-transparent"
          >
            Code
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ showAll = false, limit = 6 }) => {
  const [filter, setFilter] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = ['all', ...new Set(projects.map(p => p.category.toLowerCase()))];
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === filter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, limit);

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
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
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
            Featured <span className="text-primary-500">Projects</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            A collection of projects that showcase my skills and passion for development
          </motion.p>
        </motion.div>

        {/* Filter buttons */}
        {showAll && (
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`
                  px-6 py-2 rounded-full font-medium transition-all duration-200
                  ${filter === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }
                `}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* View all button */}
        {!showAll && filteredProjects.length > limit && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              variant="outline"
              size="lg"
              to="/projects"
              className='hover:bg-transparent '
            >
              View All Projects
            </Button>
          </motion.div>
        )}
      </div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 hidden lg:block left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 hover:text-primary-500 transition-colors cursor-pointer"
        >
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;