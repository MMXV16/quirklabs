import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const About = () => {
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
              About QuirkLabs
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              We're a team of innovators, dreamers, and builders dedicated to creating exceptional digital experiences.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Mission Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              At QuirkLabs, our mission is to transform innovative ideas into exceptional digital solutions that empower businesses and delight users. We believe in pushing the boundaries of what's possible in software development, combining technical excellence with creative thinking.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We're committed to creating software that not only meets functional requirements but also delivers memorable experiences. By embracing the unusual and the exceptional, we help our clients stand out in a crowded digital landscape.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2"
          >
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="text-6xl font-bold font-playfair">Mission</div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Vision Section */}
      <Section dark={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square bg-gray-800 dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="text-6xl font-bold font-playfair">Vision</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Our Vision</h2>
            <p className="text-gray-300 mb-6">
              We envision a world where technology enhances human creativity rather than replacing it. Our vision is to be at the forefront of this integration, creating digital solutions that amplify human potential and enable new forms of expression and innovation.
            </p>
            <p className="text-gray-300 mb-6">
              We strive to be recognized not just for what we build, but for how we build it—with integrity, creativity, and a relentless pursuit of excellence. We aim to set new standards in the industry for both technical quality and creative innovation.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section
        title="Our Values"
        subtitle="The principles that guide everything we do at QuirkLabs."
        centered={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-black/5 dark:bg-white/10 rounded-full mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300">We embrace new ideas and technologies, constantly pushing the boundaries of what's possible.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-black/5 dark:bg-white/10 rounded-full mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair">Quality</h3>
            <p className="text-gray-600 dark:text-gray-300">We're committed to excellence in everything we create, from code to user experience.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-black/5 dark:bg-white/10 rounded-full mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair">Collaboration</h3>
            <p className="text-gray-600 dark:text-gray-300">We believe in the power of diverse perspectives and work closely with our clients as partners.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-black/5 dark:bg-white/10 rounded-full mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair">Efficiency</h3>
            <p className="text-gray-600 dark:text-gray-300">We value your time and resources, delivering solutions that maximize return on investment.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-black/5 dark:bg-white/10 rounded-full mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair">Creativity</h3>
            <p className="text-gray-600 dark:text-gray-300">We approach problems with imagination and originality, finding unique solutions to complex challenges.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-black/5 dark:bg-white/10 rounded-full mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair">Adaptability</h3>
            <p className="text-gray-600 dark:text-gray-300">We embrace change and continuously evolve our approaches to stay ahead in a rapidly changing industry.</p>
          </motion.div>
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
            Join Us on Our Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300"
          >
            Whether you're looking for a technology partner or interested in joining our team, we'd love to connect with you.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="secondary">Contact Us</Button>
            <Button variant="outline">View Our Work</Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default About;
