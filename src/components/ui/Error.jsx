import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Error = ({ message, onRetry, type = 'default' }) => {
  const getErrorContent = () => {
    switch (type) {
      case 'network':
        return {
          icon: 'WifiOff',
          title: 'Connection Error',
          description: 'Unable to connect to the server. Please check your internet connection.'
        }
      case 'not-found':
        return {
          icon: 'FileX',
          title: 'Content Not Found',
          description: 'The content you are looking for could not be found.'
        }
      default:
        return {
          icon: 'AlertCircle',
          title: 'Something went wrong',
          description: message || 'An unexpected error occurred. Please try again.'
        }
    }
  }

  const { icon, title, description } = getErrorContent()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center py-12 px-4 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mb-6"
      >
        <ApperIcon name={icon} className="w-8 h-8 text-error" />
      </motion.div>
      
      <h3 className="text-xl font-semibold text-primary dark:text-dark-primary mb-2">
        {title}
      </h3>
      
      <p className="text-secondary dark:text-dark-secondary mb-6 max-w-md">
        {description}
      </p>
      
      {onRetry && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRetry}
          className="btn-primary"
        >
          <ApperIcon name="RotateCcw" className="w-4 h-4 mr-2" />
          Try Again
        </motion.button>
      )}
    </motion.div>
  )
}

export default Error