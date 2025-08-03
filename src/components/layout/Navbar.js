import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../../data';
import ThemeToggle from '../common/ThemeToggle';
import Button from '../common/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      // Re-enable scrolling
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup function to ensure scrolling is re-enabled
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const overlayVariants = {
    hidden: { 
      opacity: 0,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  return (
    <>
      <motion.nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg' 
            : 'bg-transparent'
          }
        `}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                Portfolio<span className="text-primary-500">.</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                
                return (
                  <motion.div
                    key={item.name}
                    className="relative"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.path}
                      className={`
                        flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-200
                        ${isActive
                          ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-1 h-1 bg-primary-500 rounded-full"
                        layoutId="activeIndicator"
                        initial={{ x: "-50%" }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <Button
                variant="primary"
                size="sm"
                to="/contact"
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Content */}
            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Menu Container */}
              <div className="absolute top-16 left-0 right-0 bottom-0 bg-white dark:bg-gray-900 shadow-2xl">
                <div className="h-full overflow-y-auto py-8 px-4">
                  <div className="space-y-2">
                    {navigationItems.map((item, index) => {
                      const isActive = location.pathname === item.path;
                      const Icon = item.icon;
                      
                      return (
                        <motion.div
                          key={item.name}
                          variants={menuItemVariants}
                          initial="hidden"
                          animate="visible"
                          custom={index}
                        >
                          <Link
                            to={item.path}
                            className={`
                              flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-200 text-lg
                              ${isActive
                                ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-500'
                                : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                              }
                            `}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <Icon className="w-6 h-6" />
                            <span>{item.name}</span>
                          </Link>
                        </motion.div>
                      );
                    })}
                    
                    <motion.div
                      className="pt-8 px-6"
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={navigationItems.length}
                    >
                      <Button
                        variant="primary"
                        size="lg"
                        to="/contact"
                        className="w-full"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Let's Talk
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;