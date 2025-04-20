import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  className = '',
  ...props 
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className={className}
      {...props}
    >
      <Card className="h-full p-6 flex flex-col">
        <div className="mb-4 p-3 bg-black/5 dark:bg-white/10 rounded-full w-fit">
          {Icon && <Icon className="w-6 h-6" />}
        </div>
        <h3 className="text-xl font-bold mb-3 font-playfair">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 flex-grow">{description}</p>
        <div className="mt-4">
          <motion.a
            whileHover={{ x: 5 }}
            href="#"
            className="inline-flex items-center text-black dark:text-white font-medium"
          >
            Learn more
            <svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </motion.a>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
