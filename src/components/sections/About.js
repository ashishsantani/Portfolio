import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { aboutData } from '../../data';
import Button from '../common/Button';
import { ChevronDown } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
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

  const imageVariants = {
    hidden: { opacity: 0, x: -50, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Images */}
          <motion.div
            className="relative hidden lg:block"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Main image */}
              <motion.div
                className="relative z-10"
                variants={imageVariants}
              >
                <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={aboutData.images.primary}
                    alt="About me"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </motion.div>

              {/* Secondary image */}
              <motion.div
                className="absolute -bottom-6 -right-6 z-20"
                variants={imageVariants}
                transition={{ delay: 0.2 }}
              >
                <div className="w-48 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
                  <img
                    src={aboutData.images.secondary}
                    alt="About me secondary"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              {aboutData.title}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {aboutData.content}
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 mb-8"
              variants={itemVariants}
            >
              {aboutData.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  variants={statsVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-primary-500 mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.5, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                variant="primary"
                size="lg"
                to="/contact"
              >
                Let's Work Together
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
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

export default About;