import React from 'react';
import { motion } from 'framer-motion';

// Cursor follower component that adds an interactive element to the website
const CursorFollower = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = React.useState('default');

  React.useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: 'spring',
        mass: 0.6
      }
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        mass: 0.6
      }
    }
  };

  // Only show on desktop
  if (window.innerWidth < 768) {
    return null;
  }

  return (
    <motion.div
      className="cursor-follower fixed top-0 left-0 w-8 h-8 bg-black dark:bg-white rounded-full opacity-30 pointer-events-none z-50 hidden md:block"
      variants={variants}
      animate={cursorVariant}
    />
  );
};

export default CursorFollower;
