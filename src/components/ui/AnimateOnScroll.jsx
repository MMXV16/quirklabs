import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation component that triggers when element comes into view
const AnimateOnScroll = ({ 
  children, 
  animation = 'fadeIn', 
  duration = 0.5, 
  delay = 0,
  threshold = 0.1,
  ...props 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: threshold, triggerOnce: true });

  // Animation variants
  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration, delay }
      }
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, delay }
      }
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, delay }
      }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, delay }
      }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, delay }
      }
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration, delay }
      }
    },
    zoomOut: {
      hidden: { opacity: 0, scale: 1.2 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration, delay }
      }
    },
    slideUp: {
      hidden: { y: 100 },
      visible: { 
        y: 0,
        transition: { duration, delay }
      }
    },
    slideDown: {
      hidden: { y: -100 },
      visible: { 
        y: 0,
        transition: { duration, delay }
      }
    },
    slideLeft: {
      hidden: { x: 100 },
      visible: { 
        x: 0,
        transition: { duration, delay }
      }
    },
    slideRight: {
      hidden: { x: -100 },
      visible: { 
        x: 0,
        transition: { duration, delay }
      }
    },
    rotate: {
      hidden: { opacity: 0, rotate: 180 },
      visible: { 
        opacity: 1, 
        rotate: 0,
        transition: { duration, delay }
      }
    },
    flip: {
      hidden: { opacity: 0, rotateY: 180 },
      visible: { 
        opacity: 1, 
        rotateY: 0,
        transition: { duration, delay }
      }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animations[animation]}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
