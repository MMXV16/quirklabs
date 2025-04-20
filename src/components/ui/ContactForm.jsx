import React from 'react';
import { motion } from 'framer-motion';
import * as Form from '@radix-ui/react-form';

const ContactForm = () => {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would connect to a backend API in a real implementation
    console.log('Form submitted:', formState);
    alert('Thank you for your message! We will get back to you soon.');
    setFormState({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      budget: '',
      timeline: '',
    });
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Form.Root
      className="space-y-6 w-full max-w-2xl mx-auto"
      onSubmit={handleSubmit}
    >
      <motion.div
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <motion.div variants={itemVariants}>
          <Form.Field name="name">
            <div className="flex items-baseline justify-between mb-2">
              <Form.Label className="text-sm font-medium">
                Name
              </Form.Label>
              <Form.Message
                className="text-xs text-red-500"
                match="valueMissing"
              >
                Please enter your name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </Form.Control>
          </Form.Field>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Form.Field name="email">
            <div className="flex items-baseline justify-between mb-2">
              <Form.Label className="text-sm font-medium">
                Email
              </Form.Label>
              <Form.Message
                className="text-xs text-red-500"
                match="valueMissing"
              >
                Please enter your email
              </Form.Message>
              <Form.Message
                className="text-xs text-red-500"
                match="typeMismatch"
              >
                Please enter a valid email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </Form.Control>
          </Form.Field>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Form.Field name="phone">
            <div className="flex items-baseline justify-between mb-2">
              <Form.Label className="text-sm font-medium">
                Phone
              </Form.Label>
            </div>
            <Form.Control asChild>
              <input
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                type="tel"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
              />
            </Form.Control>
          </Form.Field>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Form.Field name="company">
            <div className="flex items-baseline justify-between mb-2">
              <Form.Label className="text-sm font-medium">
                Company
              </Form.Label>
            </div>
            <Form.Control asChild>
              <input
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                type="text"
                name="company"
                value={formState.company}
                onChange={handleChange}
              />
            </Form.Control>
          </Form.Field>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Form.Field name="budget">
            <div className="flex items-baseline justify-between mb-2">
              <Form.Label className="text-sm font-medium">
                Budget Range
              </Form.Label>
            </div>
            <Form.Control asChild>
              <select
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                name="budget"
                value={formState.budget}
                onChange={handleChange}
              >
                <option value="">Select a budget range</option>
                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000+">$25,000+</option>
              </select>
            </Form.Control>
          </Form.Field>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Form.Field name="timeline">
            <div className="flex items-baseline justify-between mb-2">
              <Form.Label className="text-sm font-medium">
                Project Timeline
              </Form.Label>
            </div>
            <Form.Control asChild>
              <select
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                name="timeline"
                value={formState.timeline}
                onChange={handleChange}
              >
                <option value="">Select a timeline</option>
                <option value="Less than 1 month">Less than 1 month</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6+ months">6+ months</option>
              </select>
            </Form.Control>
          </Form.Field>
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
          <Form.Field name="subject">
            <div className="flex items-baseline justify-between mb-2">
              <Form.Label className="text-sm font-medium">
                Subject
              </Form.Label>
              <Form.Message
                className="text-xs text-red-500"
                match="valueMissing"
              >
                Please enter a subject
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                type="text"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
              />
            </Form.Control>
          </Form.Field>
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
          <Form.Field name="message">
            <div className="flex items-baseline justify-between mb-2">
              <Form.Label className="text-sm font-medium">
                Message
              </Form.Label>
              <Form.Message
                className="text-xs text-red-500"
                match="valueMissing"
              >
                Please enter your message
              </Form.Message>
            </div>
            <Form.Control asChild>
              <textarea
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white min-h-[150px]"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
              />
            </Form.Control>
          </Form.Field>
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
          <Form.Submit asChild>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-medium rounded-md transition-all duration-300 hover:opacity-90"
              type="submit"
            >
              Send Message
            </motion.button>
          </Form.Submit>
        </motion.div>
      </motion.div>
    </Form.Root>
  );
};

export default ContactForm;
