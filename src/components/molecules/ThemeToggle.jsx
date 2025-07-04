import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import { useTheme } from '@/hooks/useTheme'

const ThemeToggle = ({ className = '' }) => {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleDarkMode}
      className={`relative p-2 rounded-full bg-surface dark:bg-dark-surface border-2 border-gray-200 dark:border-gray-700 hover:border-accent transition-all duration-200 ${className}`}
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? (
          <ApperIcon name="Moon" className="w-5 h-5 text-accent" />
        ) : (
          <ApperIcon name="Sun" className="w-5 h-5 text-accent" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle