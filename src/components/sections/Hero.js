import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../../data';
import Button from '../common/Button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-1, 1, -1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated background shapes */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x,
            y: -mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 30 }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTVlN2ViIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 dark:opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl pb-8 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left pt-[100px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-primary-500 font-semibold text-lg mb-4"
              variants={itemVariants}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              <span className="block">A Full-Stack</span>
              <span className="block bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                Developer.
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
              variants={itemVariants}
            >
              I create responsive and secured websites for my clients.
              Specializing in MERN stack development with a passion for
              clean code and exceptional user experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              variants={itemVariants}
            >
              <Button
                variant="primary"
                size="lg"
                to="/projects"
                icon={ExternalLink}
                iconPosition="right"
                className='w-full sm:w-auto max-w-[200px]'
              >
                View Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = personalInfo.resume;
                  link.download = 'Ashish-Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                icon={Download}
                iconPosition="right"
                className='bg-white hover:!text-white border-none w-full sm:w-auto max-w-[200px]'
                download="Ashish-Resume.pdf"
              >
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-6 mt-8"
              variants={itemVariants}
            >
              {personalInfo.socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-8 h-8" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Profile image container */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-4">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;