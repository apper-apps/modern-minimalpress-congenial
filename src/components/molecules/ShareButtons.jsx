import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import { toast } from 'react-toastify'

const ShareButtons = ({ url, title, className = '' }) => {
  const shareLinks = [
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      color: 'hover:bg-blue-400'
    },
    {
      name: 'Facebook',
      icon: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: 'hover:bg-blue-700'
    }
  ]

  const handleShare = (shareUrl) => {
    window.open(shareUrl, '_blank', 'width=600,height=400')
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      toast.success('Link copied to clipboard!')
    } catch (error) {
      toast.error('Failed to copy link')
    }
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <span className="text-sm font-medium text-secondary dark:text-dark-secondary">
        Share:
      </span>
      
      <div className="flex space-x-2">
        {shareLinks.map((link, index) => (
          <motion.button
            key={link.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleShare(link.url)}
            className={`p-2 rounded-full border-2 border-gray-200 dark:border-gray-700 text-secondary dark:text-dark-secondary hover:text-white transition-all duration-200 ${link.color}`}
            aria-label={`Share on ${link.name}`}
          >
            <ApperIcon name={link.icon} className="w-4 h-4" />
          </motion.button>
        ))}
        
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCopyLink}
          className="p-2 rounded-full border-2 border-gray-200 dark:border-gray-700 text-secondary dark:text-dark-secondary hover:text-accent hover:border-accent transition-all duration-200"
          aria-label="Copy link"
        >
          <ApperIcon name="Copy" className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  )
}

export default ShareButtons