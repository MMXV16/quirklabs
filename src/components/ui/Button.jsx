import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none';
  
  const variants = {
    primary: 'bg-black text-white dark:bg-white dark:text-black hover:opacity-80 px-6 py-3',
    secondary: 'border border-black text-black dark:border-white dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-6 py-3',
    outline: 'border border-black text-black dark:border-white dark:text-white hover:bg-black/5 dark:hover:bg-white/10 px-6 py-3',
    text: 'text-black dark:text-white hover:underline px-4 py-2',
  };
  
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
