import { motion } from 'framer-motion'

const Badge = ({ children, variant = 'primary', size = 'medium', className = '' }) => {
  const variants = {
    primary: 'bg-accent text-white',
    secondary: 'bg-secondary text-white',
    outline: 'border-2 border-accent text-accent bg-transparent',
    success: 'bg-success text-white',
    warning: 'bg-warning text-white',
    error: 'bg-error text-white',
    category: 'bg-gradient-to-r from-accent to-info text-white'
  }
  
  const sizes = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1.5 text-sm',
    large: 'px-4 py-2 text-base'
  }

  const badgeClasses = `inline-flex items-center font-medium rounded-full transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className={badgeClasses}
    >
      {children}
    </motion.span>
  )
}

export default Badge