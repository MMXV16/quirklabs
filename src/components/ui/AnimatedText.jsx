import React from 'react';
import { motion } from 'framer-motion';

// Text animation component for creating animated text effects
const AnimatedText = ({ 
  text, 
  el: Wrapper = 'h1',
  className = '',
  once = true,
  repeatDelay = 0,
  animation = 'typewriter',
  ...props 
}) => {
  const animations = {
    typewriter: {
      hidden: { width: 0 },
      visible: (i) => ({
        width: '100%',
        transition: {
          delay: 0.5,
          duration: 1
        }
      })
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5
        }
      }
    },
    staggered: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    },
    staggeredChild: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5
        }
      }
    }
  };

  // For typewriter effect
  if (animation === 'typewriter') {
    return (
      <Wrapper className={`relative inline-block overflow-hidden ${className}`} {...props}>
        <motion.span
          className="inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once }}
          variants={animations.typewriter}
          style={{ whiteSpace: 'nowrap' }}
        >
          {text}
        </motion.span>
      </Wrapper>
    );
  }

  // For staggered letter animation
  if (animation === 'staggered') {
    return (
      <Wrapper className={className} {...props}>
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once }}
          variants={animations.staggered}
        >
          {text.split('').map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={animations.staggeredChild}
              style={{ display: 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      </Wrapper>
    );
  }

  // Default fade in up animation
  return (
    <Wrapper className={className} {...props}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        variants={animations.fadeInUp}
      >
        {text}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
