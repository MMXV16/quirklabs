import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div 
        className="min-h-screen flex items-center bg-white dark:bg-black text-black dark:text-white relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold font-playfair mb-6"
              variants={itemVariants}
            >
              Invent the Unusual. <br />
              Build the Exceptional.
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              We craft innovative digital experiences that transform ideas into extraordinary realities.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button>Get Started</Button>
              <Button variant="secondary">Our Work</Button>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-full opacity-10 dark:opacity-20"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M39.9,-65.7C52.8,-59.6,65.2,-50.8,72.7,-38.5C80.2,-26.2,82.9,-10.5,79.8,3.6C76.8,17.7,68,30.2,58.1,41.5C48.2,52.8,37.2,62.9,24.4,68.5C11.7,74.1,-2.9,75.2,-17.4,72.6C-31.9,70,-46.3,63.7,-56.3,53.3C-66.3,42.9,-71.9,28.5,-74.4,13.5C-76.9,-1.5,-76.3,-17.1,-70.5,-30.2C-64.7,-43.3,-53.7,-53.9,-41.1,-60.3C-28.5,-66.7,-14.2,-68.9,-0.3,-68.4C13.7,-67.9,27.1,-71.8,39.9,-65.7Z" transform="translate(100 100)" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Services Preview Section */}
      <Section 
        title="Our Services" 
        subtitle="We offer a range of specialized services to bring your digital vision to life."
        centered={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-black/5 dark:bg-white/10 rounded-full">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Custom websites and web applications built with cutting-edge technologies.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-black/5 dark:bg-white/10 rounded-full">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair">App Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Native and cross-platform mobile applications for iOS and Android.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-black/5 dark:bg-white/10 rounded-full">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair">AI Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300">Intelligent systems and machine learning solutions for business automation.</p>
          </motion.div>
        </div>
        
        <div className="text-center mt-12">
          <Button>View All Services</Button>
        </div>
      </Section>

      {/* About Preview Section */}
      <Section 
        dark={true}
        className="relative overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">We're not just developers, we're innovators</h2>
            <p className="text-gray-300 mb-6">
              At QuirkLabs, we believe in pushing boundaries and challenging conventions. Our team of creative technologists combines artistic vision with technical expertise to deliver solutions that stand out.
            </p>
            <p className="text-gray-300 mb-8">
              Founded on the principle that the most remarkable ideas often come from unexpected places, we embrace the quirky, the unusual, and the exceptional.
            </p>
            <Button variant="secondary">About Us</Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold font-playfair">QuirkLabs</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-playfair mb-6"
          >
            Ready to build something exceptional?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300"
          >
            Let's collaborate to transform your ideas into reality. Get in touch with us today.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button>Contact Us</Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Home;
