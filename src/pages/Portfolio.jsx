import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import ProjectCard from '../components/ui/ProjectCard';

const Portfolio = () => {
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

  // Mock project data
  const projects = [
    {
      title: 'HealthConnect Platform',
      description: 'A comprehensive telehealth platform connecting patients with healthcare providers for virtual consultations and medical record management.',
      category: 'Healthcare',
      image: null // Placeholder for image
    },
    {
      title: 'MediTrack App',
      description: 'Mobile application for medication tracking and appointment scheduling, helping patients manage their healthcare journey.',
      category: 'Healthcare',
      image: null // Placeholder for image
    },
    {
      title: 'ShopEase E-commerce',
      description: 'A modern e-commerce platform with advanced product filtering, secure checkout, and personalized recommendations.',
      category: 'E-commerce',
      image: null // Placeholder for image
    },
    {
      title: 'FashionForward Store',
      description: 'Online fashion retail platform with virtual try-on features and social shopping capabilities.',
      category: 'E-commerce',
      image: null // Placeholder for image
    },
    {
      title: 'DataViz Dashboard',
      description: 'Interactive data visualization dashboard for business analytics with real-time updates and customizable reports.',
      category: 'Business',
      image: null // Placeholder for image
    },
    {
      title: 'SmartHome Control',
      description: 'IoT application for managing smart home devices with voice commands and automated routines.',
      category: 'IoT',
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
              Our Portfolio
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              Showcasing our exceptional work across various industries.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Portfolio Grid Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
            />
          ))}
        </div>
      </Section>

      {/* Featured Project Section */}
      <Section
        dark={true}
        title="Featured Project"
        subtitle="A closer look at one of our exceptional projects"
        centered={true}
      >
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-2xl font-bold font-playfair">HealthConnect Platform</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 font-playfair">HealthConnect Platform</h3>
            <p className="text-gray-300 mb-4">
              A comprehensive telehealth solution that revolutionized how patients connect with healthcare providers. This platform enables secure video consultations, appointment scheduling, and medical record management.
            </p>
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">WebRTC</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">AWS</span>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Secure video consultations</li>
                <li>Electronic health records integration</li>
                <li>Appointment scheduling and reminders</li>
                <li>Prescription management</li>
                <li>Billing and insurance processing</li>
              </ul>
            </div>
            <Button variant="secondary">View Case Study</Button>
          </motion.div>
        </div>
      </Section>

      {/* Client Testimonials */}
      <Section
        title="Client Testimonials"
        subtitle="What our clients say about working with us"
        centered={true}
      >
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">CEO, HealthConnect</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "QuirkLabs transformed our vision into reality. Their innovative approach and technical expertise helped us create a platform that has revolutionized how we deliver healthcare services to our patients."
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Michael Chen</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">CTO, ShopEase</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "Working with QuirkLabs was a game-changer for our e-commerce business. Their attention to detail and focus on user experience resulted in a platform that has significantly increased our conversion rates and customer satisfaction."
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Emily Rodriguez</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Product Manager, DataViz</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "The team at QuirkLabs exceeded our expectations in every way. They not only delivered a powerful data visualization tool but also provided valuable insights that helped us refine our product strategy."
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">David Kim</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Founder, SmartHome</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "QuirkLabs brought our IoT concept to life with their technical expertise and creative problem-solving. Their ability to navigate complex challenges while maintaining a focus on user experience was impressive."
            </p>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark={true}>
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-playfair mb-6"
          >
            Let's Build Something Exceptional Together
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300"
          >
            Ready to turn your vision into reality? Contact us to discuss your project.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="secondary">Start a Project</Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Portfolio;
