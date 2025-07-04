import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const SearchBar = ({ onSearch, placeholder = "Search articles...", className = '' }) => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      if (onSearch) {
        onSearch(query.trim())
      } else {
        navigate(`/search?q=${encodeURIComponent(query.trim())}`)
      }
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative ${className}`}
    >
      <form onSubmit={handleSubmit} className="flex">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <ApperIcon name="Search" className="w-5 h-5 text-secondary dark:text-dark-secondary" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-l-md bg-surface dark:bg-dark-surface text-primary dark:text-dark-primary placeholder-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-20 transition-all duration-200"
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          className="rounded-l-none border-l-0 hover:scale-100"
          icon="Search"
        >
          Search
        </Button>
      </form>
    </motion.div>
  )
}

export default SearchBar