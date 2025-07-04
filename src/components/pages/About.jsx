import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import { Link } from 'react-router-dom'

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Editor-in-Chief',
      bio: 'Passionate about web development and design trends. Sarah has over 8 years of experience in the tech industry.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=400&h=400&fit=crop',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      bio: 'Full-stack developer with expertise in React, Node.js, and cloud technologies. Loves sharing knowledge through tutorials.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    },
    {
      name: 'Emily Davis',
      role: 'UX/UI Designer',
      bio: 'Creative designer focused on user experience and interface design. Specializes in modern, accessible design systems.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    }
  ]

  const features = [
    {
      icon: 'Zap',
      title: 'Fast Performance',
      description: 'Optimized for speed with modern web technologies and best practices.'
    },
    {
      icon: 'Palette',
      title: 'Beautiful Design',
      description: 'Clean, minimalist design that puts content first and enhances readability.'
    },
    {
      icon: 'Smartphone',
      title: 'Mobile First',
      description: 'Responsive design that works perfectly on all devices and screen sizes.'
    },
    {
      icon: 'Shield',
      title: 'SEO Optimized',
      description: 'Built with SEO best practices to help your content reach more readers.'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-accent to-info rounded-full flex items-center justify-center">
            <ApperIcon name="Heart" className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-dark-primary mb-6">
          About MinimalPress
        </h1>
        
        <p className="text-xl text-secondary dark:text-dark-secondary max-w-3xl mx-auto leading-relaxed">
          We're a passionate team of developers, designers, and writers dedicated to creating 
          a beautiful, minimalist blogging platform that puts content first. Our mission is to 
          provide a clean, fast, and enjoyable reading experience for everyone.
        </p>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
      >
        <div>
          <h2 className="text-3xl font-bold text-primary dark:text-dark-primary mb-6">
            Our Story
          </h2>
          <p className="text-secondary dark:text-dark-secondary mb-6 leading-relaxed">
            MinimalPress was born from a simple idea: blogging platforms should be beautiful, 
            fast, and focused on content. We noticed that many existing platforms were cluttered 
            with unnecessary features that distracted from the core purpose of sharing ideas and stories.
          </p>
          <p className="text-secondary dark:text-dark-secondary mb-6 leading-relaxed">
            So we set out to create something different. A platform that embraces minimalism 
            without sacrificing functionality. Where every design decision serves the goal of 
            creating the best possible reading and writing experience.
          </p>
          <p className="text-secondary dark:text-dark-secondary leading-relaxed">
            Today, MinimalPress is used by thousands of writers, developers, and creators who 
            value clean design and powerful functionality. We're constantly working to improve 
            the platform while staying true to our core principles of simplicity and elegance.
          </p>
        </div>
        
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
            alt="Team working together"
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary dark:text-dark-primary mb-4">
            Why Choose MinimalPress?
          </h2>
          <p className="text-secondary dark:text-dark-secondary max-w-2xl mx-auto">
            We've built MinimalPress with the modern web in mind, focusing on performance, 
            accessibility, and user experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
              className="text-center p-6 bg-surface dark:bg-dark-surface rounded-xl border-2 border-gray-200 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-info rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name={feature.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary dark:text-dark-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary dark:text-dark-secondary text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary dark:text-dark-primary mb-4">
            Meet Our Team
          </h2>
          <p className="text-secondary dark:text-dark-secondary max-w-2xl mx-auto">
            The passionate individuals behind MinimalPress who work tirelessly to bring you 
            the best blogging experience possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              className="text-center p-6 bg-surface dark:bg-dark-surface rounded-xl border-2 border-gray-200 dark:border-gray-700"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-primary dark:text-dark-primary mb-1">
                {member.name}
              </h3>
              <p className="text-accent font-medium mb-3">{member.role}</p>
              <p className="text-secondary dark:text-dark-secondary text-sm mb-4">
                {member.bio}
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href={member.social.twitter}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-400 hover:text-white transition-colors duration-200"
                >
                  <ApperIcon name="Twitter" className="w-4 h-4" />
                </a>
                <a
                  href={member.social.linkedin}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  <ApperIcon name="Linkedin" className="w-4 h-4" />
                </a>
                <a
                  href={member.social.github}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                >
                  <ApperIcon name="Github" className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="text-center bg-gradient-to-br from-accent to-info p-12 rounded-xl text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Start Reading?</h2>
        <p className="text-lg mb-8 opacity-90">
          Join thousands of readers who trust MinimalPress for quality content and beautiful design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            as={Link}
            to="/"
            variant="primary"
            size="large"
            className="bg-white text-accent hover:bg-gray-100 border-white hover:border-gray-100"
          >
            Browse Articles
          </Button>
          <Button
            as={Link}
            to="/contact"
            variant="outline"
            size="large"
            className="border-white text-white hover:bg-white hover:text-accent"
          >
            Get in Touch
          </Button>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default About