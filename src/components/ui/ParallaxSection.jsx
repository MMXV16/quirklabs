import React from 'react';
import { motion } from 'framer-motion';

// Parallax effect component for creating depth in sections
const ParallaxSection = ({ 
  children, 
  bgImage,
  bgColor = 'bg-white dark:bg-black',
  speed = 0.5,
  className = '',
  ...props 
}) => {
  const [offsetY, setOffsetY] = React.useState(0);
  
  React.useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundStyle = bgImage ? {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transform: `translateY(${offsetY * speed}px)`
  } : {};

  return (
    <div className={`relative overflow-hidden ${bgColor} ${className}`} {...props}>
      {bgImage && (
        <div 
          className="absolute inset-0 z-0"
          style={backgroundStyle}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
