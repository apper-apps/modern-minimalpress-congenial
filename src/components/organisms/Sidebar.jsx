import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'
import Loading from '@/components/ui/Loading'
import blogService from '@/services/api/blogService'
import categoryService from '@/services/api/categoryService'
import commentService from '@/services/api/commentService'

const Sidebar = ({ className = '' }) => {
  const [popularPosts, setPopularPosts] = useState([])
  const [recentPosts, setRecentPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [recentComments, setRecentComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadSidebarData()
  }, [])

  const loadSidebarData = async () => {
    try {
      setLoading(true)
      
      const [popular, recent, cats, comments] = await Promise.all([
        blogService.getPopularPosts(5),
        blogService.getRecentPosts(5),
        categoryService.getAllCategories(),
        commentService.getRecentComments(5)
      ])
      
      setPopularPosts(popular)
      setRecentPosts(recent)
      setCategories(cats)
      setRecentComments(comments)
    } catch (error) {
      console.error('Error loading sidebar data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <Loading type="sidebar" />
  }

  return (
    <aside className={`space-y-8 ${className}`}>
      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-surface dark:bg-dark-surface p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-lg font-bold text-primary dark:text-dark-primary mb-4">
          About MinimalPress
        </h3>
        <p className="text-secondary dark:text-dark-secondary text-sm leading-relaxed">
          A modern blogging platform focused on clean design and exceptional reading experience. 
          We share insights about web development, design trends, and technology.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center text-accent hover:text-accent/80 text-sm font-medium mt-4"
        >
          Learn more
          <ApperIcon name="ArrowRight" className="w-4 h-4 ml-1" />
        </Link>
      </motion.div>

      {/* Popular Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="bg-surface dark:bg-dark-surface p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-lg font-bold text-primary dark:text-dark-primary mb-4">
          Popular Posts
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link
              key={post.Id}
              to={`/post/${post.Id}`}
              className="block group"
            >
              <div className="flex space-x-3">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-primary dark:text-dark-primary group-hover:text-accent transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-secondary dark:text-dark-secondary mt-1">
                    {post.author} • {post.readTime}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="bg-surface dark:bg-dark-surface p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-lg font-bold text-primary dark:text-dark-primary mb-4">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.Id}
              to={`/category/${category.slug}`}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <span className="text-secondary dark:text-dark-secondary text-sm">
                {category.name}
              </span>
              <Badge variant="outline" size="small">
                {category.postCount}
              </Badge>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Recent Comments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="bg-surface dark:bg-dark-surface p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-lg font-bold text-primary dark:text-dark-primary mb-4">
          Recent Comments
        </h3>
        <div className="space-y-4">
          {recentComments.map((comment) => (
            <div key={comment.Id} className="border-l-2 border-accent pl-3">
              <p className="text-sm text-secondary dark:text-dark-secondary line-clamp-2">
                "{comment.content}"
              </p>
              <p className="text-xs text-secondary dark:text-dark-secondary mt-1">
                by {comment.author}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="bg-gradient-to-br from-accent to-info p-6 rounded-lg text-white"
      >
        <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
        <p className="text-sm mb-4 opacity-90">
          Subscribe to our newsletter for the latest articles and updates.
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 text-sm rounded-l-lg border-none focus:outline-none focus:ring-2 focus:ring-white/20 text-primary"
          />
          <button className="px-4 py-2 bg-white text-accent rounded-r-lg hover:bg-gray-100 transition-colors duration-200">
            <ApperIcon name="Send" className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </aside>
  )
}

export default Sidebar