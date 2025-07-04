import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import SearchBar from '@/components/molecules/SearchBar'
import BlogGrid from '@/components/organisms/BlogGrid'

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')

  useEffect(() => {
    const searchQuery = searchParams.get('q')
    if (searchQuery) {
      setQuery(searchQuery)
    }
  }, [searchParams])

  const handleSearch = (newQuery) => {
    setQuery(newQuery)
    setSearchParams({ q: newQuery })
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
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-accent to-info rounded-full flex items-center justify-center">
            <ApperIcon name="Search" className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-dark-primary mb-6">
          Search Articles
        </h1>
        
        <p className="text-xl text-secondary dark:text-dark-secondary max-w-3xl mx-auto mb-8">
          Find articles, tutorials, and insights on web development, design, and technology
        </p>
        
        <div className="max-w-2xl mx-auto">
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search for articles, topics, or authors..."
            className="mb-8"
          />
        </div>
      </motion.div>

      {/* Search Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {query ? (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary dark:text-dark-primary mb-2">
                Search Results for "{query}"
              </h2>
              <p className="text-secondary dark:text-dark-secondary">
                Here are the articles matching your search query
              </p>
            </div>
            
            <BlogGrid searchQuery={query} />
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="Search" className="w-8 h-8 text-secondary dark:text-dark-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-primary dark:text-dark-primary mb-2">
              Start Your Search
            </h3>
            <p className="text-secondary dark:text-dark-secondary">
              Enter a search term above to find articles on your favorite topics
            </p>
          </div>
        )}
      </motion.div>

      {/* Popular Topics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold text-primary dark:text-dark-primary mb-8 text-center">
          Popular Search Topics
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'React', 'JavaScript', 'CSS', 'Node.js', 'TypeScript', 'Design',
            'Performance', 'SEO', 'Accessibility', 'Testing', 'Architecture', 'Mobile'
          ].map((topic) => (
            <motion.button
              key={topic}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSearch(topic)}
              className="px-4 py-2 bg-surface dark:bg-dark-surface border-2 border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-primary dark:text-dark-primary hover:border-accent hover:text-accent transition-all duration-200"
            >
              {topic}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Search