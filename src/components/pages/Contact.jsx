import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      description: 'Send us an email',
      contact: 'hello@minimalpress.com'
    },
    {
      icon: 'MapPin',
      title: 'Address',
      description: 'Visit our office',
      contact: '123 Blog Street, Content City, CC 12345'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      description: 'Call us directly',
      contact: '+1 (555) 123-4567'
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('Message sent successfully! We\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-accent to-info rounded-full flex items-center justify-center">
            <ApperIcon name="MessageCircle" className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-dark-primary mb-6">
          Get in Touch
        </h1>
        
        <p className="text-xl text-secondary dark:text-dark-secondary max-w-3xl mx-auto leading-relaxed">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you. 
          Drop us a message and we'll get back to you as soon as possible.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="lg:col-span-1"
        >
          <h2 className="text-2xl font-bold text-primary dark:text-dark-primary mb-8">
            Contact Information
          </h2>
          
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-info rounded-full flex items-center justify-center flex-shrink-0">
                  <ApperIcon name={info.icon} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary dark:text-dark-primary mb-1">
                    {info.title}
                  </h3>
                  <p className="text-secondary dark:text-dark-secondary text-sm mb-2">
                    {info.description}
                  </p>
                  <p className="text-primary dark:text-dark-primary font-medium">
                    {info.contact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="mt-12"
          >
            <h3 className="text-lg font-semibold text-primary dark:text-dark-primary mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {['Twitter', 'Facebook', 'Linkedin', 'Github'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-surface dark:bg-dark-surface border-2 border-gray-200 dark:border-gray-700 hover:border-accent hover:bg-accent hover:text-white transition-all duration-200"
                >
                  <ApperIcon name={social} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="lg:col-span-2"
        >
          <div className="bg-surface dark:bg-dark-surface p-8 rounded-xl border-2 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-primary dark:text-dark-primary mb-8">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Your name"
                  icon="User"
                />
                
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="your@email.com"
                  icon="Mail"
                />
              </div>
              
              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                placeholder="What's this about?"
                icon="Tag"
              />
              
              <div>
                <label className="block text-sm font-medium text-primary dark:text-dark-primary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                  className={`input-field resize-none ${errors.message ? 'border-error focus:border-error focus:ring-error' : ''}`}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-error flex items-center">
                    <ApperIcon name="AlertCircle" className="w-4 h-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="large"
                loading={loading}
                disabled={loading}
                icon="Send"
                className="w-full md:w-auto"
              >
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.3 }}
        className="mt-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary dark:text-dark-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary dark:text-dark-secondary">
            Find answers to common questions about MinimalPress
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface dark:bg-dark-surface p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-primary dark:text-dark-primary mb-3">
              How do I contribute an article?
            </h3>
            <p className="text-secondary dark:text-dark-secondary">
              We welcome guest contributions! Please reach out to us with your article idea and we'll guide you through our submission process.
            </p>
          </div>
          
          <div className="bg-surface dark:bg-dark-surface p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-primary dark:text-dark-primary mb-3">
              Can I syndicate MinimalPress content?
            </h3>
            <p className="text-secondary dark:text-dark-secondary">
              Yes, our content is available via RSS feed. For other syndication requests, please contact us for permission and guidelines.
            </p>
          </div>
          
          <div className="bg-surface dark:bg-dark-surface p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-primary dark:text-dark-primary mb-3">
              Do you offer custom development services?
            </h3>
            <p className="text-secondary dark:text-dark-secondary">
              Our team offers consulting and development services for custom blogging platforms. Contact us to discuss your project requirements.
            </p>
          </div>
          
          <div className="bg-surface dark:bg-dark-surface p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-primary dark:text-dark-primary mb-3">
              How can I advertise on MinimalPress?
            </h3>
            <p className="text-secondary dark:text-dark-secondary">
              We offer various advertising opportunities including sponsored content and newsletter placement. Reach out for our media kit and pricing.
            </p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Contact