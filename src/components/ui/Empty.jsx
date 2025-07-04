import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Empty = ({ type = 'posts', message, actionLabel, onAction }) => {
  const getEmptyContent = () => {
    switch (type) {
      case 'search':
        return {
          icon: 'Search',
          title: 'No Results Found',
          description: 'Try adjusting your search terms or browse our categories to find what you\'re looking for.'
        }
      case 'category':
        return {
          icon: 'FolderOpen',
          title: 'No Posts in This Category',
          description: 'This category doesn\'t have any posts yet. Check back later for new content.'
        }
      case 'comments':
        return {
          icon: 'MessageCircle',
          title: 'No Comments Yet',
          description: 'Be the first to share your thoughts on this post.'
        }
      default:
        return {
          icon: 'FileText',
          title: 'No Posts Available',
          description: 'There are no blog posts to display at the moment. Check back later for new content.'
        }
    }
  }

  const { icon, title, description } = getEmptyContent()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center py-16 px-4 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-8"
      >
        <ApperIcon name={icon} className="w-10 h-10 text-accent" />
      </motion.div>
      
      <h3 className="text-2xl font-semibold text-primary dark:text-dark-primary mb-3">
        {title}
      </h3>
      
      <p className="text-secondary dark:text-dark-secondary mb-8 max-w-md">
        {message || description}
      </p>
      
      {onAction && actionLabel && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onAction}
          className="btn-primary"
        >
          {actionLabel}
        </motion.button>
      )}
    </motion.div>
  )
}

export default Empty