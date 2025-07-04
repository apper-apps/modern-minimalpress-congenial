import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'

const BlogCard = ({ post, featured = false, className = '' }) => {
  const cardClasses = `card ${featured ? 'md:col-span-2' : ''} ${className}`

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cardClasses}
    >
      <Link to={`/post/${post.Id}`} className="block h-full">
        <div className="relative overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className={`w-full object-cover transition-transform duration-300 hover:scale-105 ${
              featured ? 'h-64' : 'h-48'
            }`}
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="category" size="small">
              {post.category}
            </Badge>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between text-sm text-secondary dark:text-dark-secondary mb-3">
            <div className="flex items-center">
              <ApperIcon name="User" className="w-4 h-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <ApperIcon name="Calendar" className="w-4 h-4 mr-1" />
              {format(new Date(post.publishDate), 'MMM d, yyyy')}
            </div>
          </div>
          
          <h3 className={`font-bold text-primary dark:text-dark-primary mb-3 leading-tight hover:text-accent dark:hover:text-accent transition-colors duration-200 ${
            featured ? 'text-2xl' : 'text-xl'
          }`}>
            {post.title}
          </h3>
          
          <p className="text-secondary dark:text-dark-secondary mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-secondary dark:text-dark-secondary">
              <ApperIcon name="Clock" className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
            
            <div className="flex items-center text-accent font-medium">
              Read more
              <ApperIcon name="ArrowRight" className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default BlogCard