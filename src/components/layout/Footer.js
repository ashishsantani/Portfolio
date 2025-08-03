import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  ArrowUp,
  ExternalLink 
} from 'lucide-react';
import { personalInfo, navigationItems } from '../../data';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      url: personalInfo.socialLinks[0].url 
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: personalInfo.socialLinks[1].url 
    },
    { 
      name: 'Email', 
      icon: Mail, 
      url: `mailto:${personalInfo.email}` 
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="inline-block mb-4">
                <h3 className="text-2xl font-bold">
                  Portfolio<span className="text-primary-500">.</span>
                </h3>
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                Full-Stack Developer passionate about creating exceptional digital 
                experiences. Let's build something amazing together.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social?.name}
                      href={social?.url}
                      target={social?.url?.startsWith('http') ? '_blank' : undefined}
                      rel={social?.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="p-2 bg-gray-800 hover:bg-primary-500 rounded-lg transition-colors duration-200"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-primary-500">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-primary-500">
                Get In Touch
              </h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200 block"
                >
                  {personalInfo.email}
                </a>
                <p className="text-gray-300">
                  {personalInfo.location}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary-500 hover:text-primary-400 transition-colors duration-200 group"
                >
                  <span>Let's work together</span>
                  <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} {personalInfo.name}. Made with{' '}
              <Heart className="w-4 h-4 inline text-red-500 mx-1" fill="currentColor" />
              using React & Tailwind CSS
            </motion.p>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary-500 transition-colors duration-200 group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;