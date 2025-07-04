import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Footer = () => {
  const footerSections = [
    {
      title: 'About',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' }
      ]
    },
    {
      title: 'Categories',
      links: [
        { name: 'Technology', href: '/category/technology' },
        { name: 'Development', href: '/category/development' },
        { name: 'Design', href: '/category/design' },
        { name: 'Best Practices', href: '/category/best-practices' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Twitter', href: 'https://twitter.com', external: true },
        { name: 'LinkedIn', href: 'https://linkedin.com', external: true },
        { name: 'GitHub', href: 'https://github.com', external: true },
        { name: 'RSS Feed', href: '/rss', external: true }
      ]
    }
  ]

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com' },
    { name: 'Facebook', icon: 'Facebook', href: 'https://facebook.com' },
    { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com' },
    { name: 'GitHub', icon: 'Github', href: 'https://github.com' }
  ]

  return (
    <footer className="bg-surface dark:bg-dark-surface border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-8 h-8 bg-gradient-to-br from-accent to-info rounded-lg flex items-center justify-center"
              >
                <ApperIcon name="FileText" className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-lg font-bold text-primary dark:text-dark-primary">
                MinimalPress
              </span>
            </Link>
            
            <p className="text-secondary dark:text-dark-secondary text-sm mb-6">
              A minimalist blogging platform designed for content creators who value clean aesthetics and powerful functionality.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-accent hover:text-white transition-all duration-200"
                  aria-label={link.name}
                >
                  <ApperIcon name={link.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-primary dark:text-dark-primary mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary dark:text-dark-secondary hover:text-accent transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-secondary dark:text-dark-secondary hover:text-accent transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary dark:text-dark-secondary text-sm">
              © 2024 MinimalPress. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-secondary dark:text-dark-secondary text-sm">
                Made with
              </span>
              <ApperIcon name="Heart" className="w-4 h-4 text-error" />
              <span className="text-secondary dark:text-dark-secondary text-sm">
                by MinimalPress Team
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer