import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const PersonalInfo = () => {
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
        className="py-24 md:py-32 bg-white dark:bg-black text-black dark:text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold font-playfair mb-6"
              variants={itemVariants}
            >
              Kelvin Muyombo
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              Founder & CEO of QuirkLabs
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Bio Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-2xl font-bold font-playfair">Kelvin's Photo</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 font-playfair">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Born in Kaoma, Western province Zambia, I started loving technology at a young age. I have always been passionate about it and wanted to help others with my skills and knowledge.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My journey in technology began with simple programming experiments and quickly evolved into a lifelong passion for creating innovative digital solutions that solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I founded QuirkLabs with the vision of building a company that embraces the unusual and creates exceptional digital experiences that stand out in today's crowded marketplace.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-bold mb-1">Date of Birth</h3>
                <p className="text-gray-600 dark:text-gray-300">December 24, 2002</p>
              </div>
              <div>
                <h3 className="font-bold mb-1">Hometown</h3>
                <p className="text-gray-600 dark:text-gray-300">Kaoma, Western Province, Zambia</p>
              </div>
            </div>
            
            <Button>Connect with Me</Button>
          </motion.div>
        </div>
      </Section>

      {/* Hobbies & Interests Section */}
      <Section
        title="Hobbies & Interests"
        subtitle="What I'm passionate about beyond technology"
        centered={true}
        dark={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-lg text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-white/10 rounded-full">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair">Music</h3>
            <p className="text-gray-300">
              I have a deep appreciation for music across various genres. Whether it's creating playlists, attending concerts, or simply enjoying the emotional journey that music provides, it's an essential part of my life.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-800 p-8 rounded-lg text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-white/10 rounded-full">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair">Movies</h3>
            <p className="text-gray-300">
              I'm an avid film enthusiast who appreciates storytelling through cinema. From thought-provoking dramas to innovative sci-fi, I enjoy analyzing narratives and the creative techniques used to bring stories to life.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-white/10 rounded-full">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair">Technology</h3>
            <p className="text-gray-300">
              Beyond my professional work, I'm passionate about exploring emerging technologies and their potential impact on society. I enjoy experimenting with new tools and staying at the forefront of technological innovation.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Journey Section */}
      <Section
        title="My Journey"
        subtitle="The path that led me to founding QuirkLabs"
        centered={true}
      >
        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                <h3 className="text-xl font-bold font-playfair">Early Beginnings</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Born and raised in Kaoma, Western province Zambia, I developed a curiosity for how things work from an early age.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white dark:bg-black"></div>
              </div>
              <div className="flex-1 md:pl-8">
                <p className="text-gray-600 dark:text-gray-300">
                  My first encounter with computers sparked a lifelong passion that would shape my future career path.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 md:order-1">
                <p className="text-gray-600 dark:text-gray-300">
                  I taught myself programming and began creating small projects that solved problems in my community.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white dark:bg-black"></div>
              </div>
              <div className="flex-1 md:pl-8 md:order-0">
                <h3 className="text-xl font-bold font-playfair">Self-Taught Developer</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Without formal resources, I leveraged whatever materials I could find to learn coding.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                <h3 className="text-xl font-bold font-playfair">Education & Growth</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I pursued formal education in computer science while continuing to develop my skills through practical projects.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white dark:bg-black"></div>
              </div>
              <div className="flex-1 md:pl-8">
                <p className="text-gray-600 dark:text-gray-300">
                  This period of growth expanded my technical knowledge and introduced me to the principles of good software design.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 md:order-1">
                <p className="text-gray-600 dark:text-gray-300">
                  I worked with various companies, gaining experience in different aspects of software development and project management.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white dark:bg-black"></div>
              </div>
              <div className="flex-1 md:pl-8 md:order-0">
                <h3 className="text-xl font-bold font-playfair">Professional Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  My career took me through various roles in the tech industry, each adding new dimensions to my skill set.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                <h3 className="text-xl font-bold font-playfair">Founding QuirkLabs</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  With a vision to create innovative digital solutions that embrace the unusual, I founded QuirkLabs.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white dark:bg-black"></div>
              </div>
              <div className="flex-1 md:pl-8">
                <p className="text-gray-600 dark:text-gray-300">
                  The company embodies my belief that the most exceptional solutions often come from thinking differently and challenging conventions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark={true}>
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-playfair mb-6"
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300"
          >
            I'm always interested in connecting with fellow technology enthusiasts, potential clients, or anyone who shares my passion for innovation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="secondary">Contact Me</Button>
            <Button variant="outline">View My Work</Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default PersonalInfo;
