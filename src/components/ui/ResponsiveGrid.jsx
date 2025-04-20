import React from 'react';
import { motion } from 'framer-motion';

// Responsive grid component that adapts to different screen sizes
const ResponsiveGrid = ({ 
  children, 
  cols = { sm: 1, md: 2, lg: 3 },
  gap = { x: 4, y: 4 },
  className = '',
  ...props 
}) => {
  // Convert gap values to Tailwind classes
  const gapClasses = `gap-${gap.y} gap-x-${gap.x}`;
  
  // Convert column values to Tailwind grid classes
  const colClasses = `grid-cols-${cols.sm} md:grid-cols-${cols.md} lg:grid-cols-${cols.lg}`;
  
  return (
    <div 
      className={`grid ${colClasses} ${gapClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ResponsiveGrid;
