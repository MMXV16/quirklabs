import React from 'react';
import { motion } from 'framer-motion';

const BlogCard = ({ 
  title, 
  excerpt, 
  date,
  author,
  image,
  category,
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
    <motion.article
      variants={cardVariants}
      className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md ${className}`}
      {...props}
    >
      <div className="overflow-hidden">
        <motion.div
          whileHover="hover"
          variants={imageVariants}
          className="relative aspect-[16/9] bg-gray-100 dark:bg-gray-700"
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
          {category && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-xs font-medium rounded-full">
                {category}
              </span>
            </div>
          )}
        </motion.div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          {date && <span className="mr-4">{date}</span>}
          {author && <span>By {author}</span>}
        </div>
        <h3 className="text-xl font-bold mb-2 font-playfair">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
        <motion.a
          whileHover={{ x: 5 }}
          href={link}
          className="inline-flex items-center text-black dark:text-white font-medium"
        >
          Read More
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
    </motion.article>
  );
};

export default BlogCard;
