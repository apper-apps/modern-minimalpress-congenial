import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'
import BlogGrid from '@/components/organisms/BlogGrid'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import categoryService from '@/services/api/categoryService'

const Category = () => {
  const { category } = useParams()
  const [categoryData, setCategoryData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadCategory()
  }, [category])

  const loadCategory = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await categoryService.getCategoryBySlug(category)
      setCategoryData(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Loading type="hero" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Error message={error} onRetry={loadCategory} type="not-found" />
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-info rounded-full flex items-center justify-center">
            <ApperIcon name="FolderOpen" className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-dark-primary mb-4">
          {categoryData?.name}
        </h1>
        
        <p className="text-xl text-secondary dark:text-dark-secondary mb-6 max-w-2xl mx-auto">
          {categoryData?.description}
        </p>
        
        <div className="flex items-center justify-center space-x-4">
          <Badge variant="category">
            {categoryData?.postCount} articles
          </Badge>
          <div className="flex items-center text-secondary dark:text-dark-secondary">
            <ApperIcon name="Tag" className="w-4 h-4 mr-1" />
            Category
          </div>
        </div>
      </motion.div>

      {/* Posts Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <BlogGrid category={category} />
      </motion.div>
    </motion.div>
  )
}

export default Category