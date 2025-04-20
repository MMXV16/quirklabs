import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

const ProjectCard = ({ 
  title, 
  description, 
  category,
  image,
  link = '#',
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

  const imageVariants = {
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className={className}
      {...props}
    >
      <Card className="h-full overflow-hidden" hover={false}>
        <div className="overflow-hidden">
          <motion.div
            whileHover="hover"
            variants={imageVariants}
            className="relative aspect-video bg-gray-100 dark:bg-gray-700"
          >
            {image ? (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            )}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-xs font-medium rounded-full">
                {category}
              </span>
            </div>
          </motion.div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 font-playfair">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <motion.a
            whileHover={{ x: 5 }}
            href={link}
            className="inline-flex items-center text-black dark:text-white font-medium"
          >
            View Project
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

export default ProjectCard;
