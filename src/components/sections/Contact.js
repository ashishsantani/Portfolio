import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, ChevronDown } from 'lucide-react';
import { contactInfo } from '../../data';
import Button from '../common/Button';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with your actual form handling)
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        icon: '🎉',
        duration: 4000,
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        icon: '❌',
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent
                     transition-colors duration-200"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent
                     transition-colors duration-200"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                   focus:ring-2 focus:ring-primary-500 focus:border-transparent
                   transition-colors duration-200"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                   focus:ring-2 focus:ring-primary-500 focus:border-transparent
                   transition-colors duration-200 resize-vertical"
          placeholder="Tell me about your project or just say hello..."
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting}
        icon={Send}
        iconPosition="right"
        className="w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </motion.form>
  );
};

const ContactInfo = ({ icon: Icon, title, content, link }) => (
  <motion.div
    className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    whileHover={{ y: -5, scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex-shrink-0">
      <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
        <Icon className="w-6 h-6 text-primary-500" />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
        {title}
      </h3>
      {link ? (
        <a
          href={link}
          className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
          target={link?.startsWith('http') ? '_blank' : undefined}
          rel={link?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-600 dark:text-gray-300">{content}</p>
      )}
    </div>
  </motion.div>
);

const Contact = () => {
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
            Let's Work <span className="text-primary-500">Together</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Ready to bring your ideas to life? I'm always excited to take on new challenges
            and collaborate on interesting projects.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send me a message
            </h3>
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Get in touch
            </h3>

            <ContactInfo
              icon={Mail}
              title="Email"
              content={contactInfo.email}
              link={`mailto:${contactInfo.email}`}
            />

            <ContactInfo
              icon={Phone}
              title="Phone"
              content={contactInfo.phone}
              link={`tel:${contactInfo.phone}`}
            />

            <ContactInfo
              icon={MapPin}
              title="Location"
              content={contactInfo.location}
            />

            <motion.div
              className="p-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.availability}</span>
              </div>
              <p className="text-primary-100">
                {contactInfo.responseTime}
              </p>
            </motion.div>
          </motion.div>
        </div>
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

export default Contact;