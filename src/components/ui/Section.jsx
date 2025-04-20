import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  className = '',
  title,
  subtitle,
  centered = false,
  dark = false,
  ...props 
}) => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
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
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className={`py-16 md:py-24 ${dark ? 'bg-black text-white' : 'bg-white text-black'} ${className}`}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">
        {(title || subtitle) && (
          <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {title && (
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold font-playfair mb-4"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl max-w-3xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
