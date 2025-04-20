import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import BlogCard from '../components/ui/BlogCard';

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  // Mock blog post data
  const blogPosts = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the emerging technologies and methodologies that are shaping the future of web development, from AI-driven interfaces to new frameworks.',
      date: 'April 15, 2025',
      author: 'Kelvin Muyombo',
      category: 'Technology',
      image: null // Placeholder for image
    },
    {
      title: 'Building Accessible Applications: A Comprehensive Guide',
      excerpt: 'Learn how to create applications that are accessible to all users, including those with disabilities, and why it matters for your business.',
      date: 'April 8, 2025',
      author: 'Sarah Johnson',
      category: 'Design',
      image: null // Placeholder for image
    },
    {
      title: 'The Role of AI in Modern Software Development',
      excerpt: 'Discover how artificial intelligence is transforming the software development process, from code generation to testing and deployment.',
      date: 'March 30, 2025',
      author: 'Michael Chen',
      category: 'AI',
      image: null // Placeholder for image
    },
    {
      title: 'Optimizing Performance in React Applications',
      excerpt: 'Practical strategies and techniques for improving the performance of your React applications, from code splitting to memoization.',
      date: 'March 22, 2025',
      author: 'Emily Rodriguez',
      category: 'Development',
      image: null // Placeholder for image
    },
    {
      title: 'The Importance of User Testing in Product Development',
      excerpt: 'Why user testing is crucial for creating successful products and how to implement effective testing strategies in your development process.',
      date: 'March 15, 2025',
      author: 'David Kim',
      category: 'UX',
      image: null // Placeholder for image
    },
    {
      title: 'Securing Your Web Applications: Best Practices',
      excerpt: 'Essential security measures and best practices to protect your web applications from common vulnerabilities and threats.',
      date: 'March 8, 2025',
      author: 'Kelvin Muyombo',
      category: 'Security',
      image: null // Placeholder for image
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.div 
        className="py-24 md:py-32 bg-white dark:bg-black text-black dark:text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold font-playfair mb-6"
              variants={itemVariants}
            >
              Our Blog
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              Insights, thoughts, and updates from the QuirkLabs team.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Featured Post Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-2xl font-bold font-playfair">Featured Post</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-2">
              <span className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-xs font-medium rounded-full">
                Technology
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4 font-playfair">The Future of Web Development: Trends to Watch in 2025</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Explore the emerging technologies and methodologies that are shaping the future of web development, from AI-driven interfaces to new frameworks and tools that are changing how we build for the web.
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span className="mr-4">April 15, 2025</span>
              <span>By Kelvin Muyombo</span>
            </div>
            <Button>Read Article</Button>
          </motion.div>
        </div>
      </Section>

      {/* Blog Posts Grid */}
      <Section
        title="Latest Articles"
        subtitle="Stay updated with our latest insights and thoughts"
        centered={true}
        dark={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              category={post.category}
              image={post.image}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="secondary">Load More</Button>
        </div>
      </Section>

      {/* Categories Section */}
      <Section
        title="Categories"
        subtitle="Browse articles by topic"
        centered={true}
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-black dark:text-white font-medium"
          >
            All
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-black dark:text-white font-medium"
          >
            Technology
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-black dark:text-white font-medium"
          >
            Design
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-black dark:text-white font-medium"
          >
            Development
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-black dark:text-white font-medium"
          >
            AI
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-black dark:text-white font-medium"
          >
            UX
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-black dark:text-white font-medium"
          >
            Security
          </motion.a>
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section dark={true}>
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-playfair mb-6"
          >
            Subscribe to Our Newsletter
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300"
          >
            Stay updated with our latest articles, insights, and company news.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <Button variant="secondary">Subscribe</Button>
            </form>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Blog;
