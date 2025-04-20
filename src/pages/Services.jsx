import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import ServiceCard from '../components/ui/ServiceCard';

const Services = () => {
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

  // Mock service data
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies. We specialize in responsive, performant, and accessible web solutions that deliver exceptional user experiences.',
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. We build intuitive, feature-rich apps that engage users and drive business growth.',
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'AI Solutions',
      description: 'Intelligent systems and machine learning solutions for business automation. We leverage AI to solve complex problems and create smarter, more efficient processes.',
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that balances aesthetics with functionality. We create intuitive interfaces and seamless user experiences that delight and engage.',
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: 'E-commerce Solutions',
      description: 'Comprehensive online shopping experiences from storefront to checkout. We build secure, scalable e-commerce platforms that drive conversions and sales.',
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: 'Cloud Services',
      description: 'Scalable, reliable cloud infrastructure and deployment solutions. We help businesses leverage the power of cloud computing for improved performance and cost efficiency.',
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
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
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              Innovative solutions tailored to your unique business needs.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Services Grid Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section
        title="Our Process"
        subtitle="How we bring your ideas to life"
        centered={true}
        dark={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white/10 rounded-full mb-6">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair">Discovery</h3>
            <p className="text-gray-300">We learn about your business, goals, and requirements to understand the full scope of your project.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white/10 rounded-full mb-6">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair">Planning</h3>
            <p className="text-gray-300">We create a detailed roadmap and technical strategy to guide the development process.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white/10 rounded-full mb-6">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair">Development</h3>
            <p className="text-gray-300">Our team of experts builds your solution using the latest technologies and best practices.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white/10 rounded-full mb-6">
              <span className="text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-bold mb-3 font-playfair">Delivery</h3>
            <p className="text-gray-300">We launch your solution and provide ongoing support to ensure long-term success.</p>
          </motion.div>
        </div>
      </Section>

      {/* Technologies Section */}
      <Section
        title="Technologies We Use"
        subtitle="We leverage cutting-edge technologies to build exceptional solutions"
        centered={true}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <h3 className="text-lg font-bold mb-2 font-playfair">Frontend</h3>
            <p className="text-gray-600 dark:text-gray-300">React, Vue, Angular, Next.js</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <h3 className="text-lg font-bold mb-2 font-playfair">Backend</h3>
            <p className="text-gray-600 dark:text-gray-300">Node.js, Python, Java, .NET</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <h3 className="text-lg font-bold mb-2 font-playfair">Mobile</h3>
            <p className="text-gray-600 dark:text-gray-300">React Native, Flutter, Swift, Kotlin</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <h3 className="text-lg font-bold mb-2 font-playfair">Cloud</h3>
            <p className="text-gray-600 dark:text-gray-300">AWS, Azure, Google Cloud</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <h3 className="text-lg font-bold mb-2 font-playfair">Databases</h3>
            <p className="text-gray-600 dark:text-gray-300">MongoDB, PostgreSQL, MySQL, Firebase</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <h3 className="text-lg font-bold mb-2 font-playfair">AI & ML</h3>
            <p className="text-gray-600 dark:text-gray-300">TensorFlow, PyTorch, OpenAI</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <h3 className="text-lg font-bold mb-2 font-playfair">DevOps</h3>
            <p className="text-gray-600 dark:text-gray-300">Docker, Kubernetes, CI/CD</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <h3 className="text-lg font-bold mb-2 font-playfair">Design</h3>
            <p className="text-gray-600 dark:text-gray-300">Figma, Adobe XD, Sketch</p>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark={true}>
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-playfair mb-6"
          >
            Ready to start your project?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300"
          >
            Let's discuss how we can help you achieve your business goals with our innovative solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="secondary">Get in Touch</Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Services;
