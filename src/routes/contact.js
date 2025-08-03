import React from 'react';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Contact from "../components/sections/Contact";
import SEO from "../components/common/SEO";

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch! Let's discuss your next project and bring your ideas to life. I'm always excited to take on new challenges."
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="flex items-center justify-center h-screen  bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Let's <span className="text-primary-500">Connect</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Talk to the Enthusiastic Problem Solver. Ready to bring your ideas to life?
                Let's discuss your project and make something amazing together.
              </p>
            </motion.div>
          </div>
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTVlN2ViIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 dark:opacity-10" />
        </section>

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </>
  );
};

export default ContactPage;