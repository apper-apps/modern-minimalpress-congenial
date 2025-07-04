import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'
import ShareButtons from '@/components/molecules/ShareButtons'
import CommentSection from '@/components/organisms/CommentSection'
import BlogGrid from '@/components/organisms/BlogGrid'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import blogService from '@/services/api/blogService'

const BlogPost = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadPost()
    window.scrollTo(0, 0)
  }, [id])

  const loadPost = async () => {
    try {
      setLoading(true)
      setError('')
      
      const [postData, related] = await Promise.all([
        blogService.getPostById(id),
        blogService.getRelatedPosts(id, 3)
      ])
      
      setPost(postData)
      setRelatedPosts(related)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Loading type="post" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Error message={error} onRetry={loadPost} type="not-found" />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Error message="Post not found" type="not-found" />
      </div>
    )
  }

  const currentUrl = window.location.href

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-2 text-sm text-secondary dark:text-dark-secondary mb-4">
            <Link to="/" className="hover:text-accent">
              Home
            </Link>
            <ApperIcon name="ChevronRight" className="w-4 h-4" />
            <Link to={`/category/${post.category.toLowerCase()}`} className="hover:text-accent">
              {post.category}
            </Link>
            <ApperIcon name="ChevronRight" className="w-4 h-4" />
            <span>Article</span>
          </div>
          
          <div className="flex items-center space-x-4 mb-6">
            <Badge variant="category">{post.category}</Badge>
            <div className="flex items-center text-sm text-secondary dark:text-dark-secondary">
              <ApperIcon name="Clock" className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-dark-primary mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-info rounded-full flex items-center justify-center">
                  <ApperIcon name="User" className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-primary dark:text-dark-primary">
                    {post.author}
                  </p>
                  <p className="text-sm text-secondary dark:text-dark-secondary">
                    {format(new Date(post.publishDate), 'MMMM d, yyyy')}
                  </p>
                </div>
              </div>
            </div>
            
            <ShareButtons url={currentUrl} title={post.title} />
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="mb-8"
        >
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="prose prose-lg max-w-none mb-12"
        >
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-primary dark:text-dark-primary leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" size="small">
              #{tag}
            </Badge>
          ))}
        </motion.div>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="bg-surface dark:bg-dark-surface p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 mb-12"
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-info rounded-full flex items-center justify-center">
              <ApperIcon name="User" className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary dark:text-dark-primary">
                {post.author}
              </h3>
              <p className="text-secondary dark:text-dark-secondary">
                Content creator passionate about modern web development and design. 
                Sharing insights and tutorials to help developers build better applications.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Comments Section */}
        <CommentSection postId={id} />
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 dark:bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary dark:text-dark-primary mb-4">
                Related Articles
              </h2>
              <p className="text-secondary dark:text-dark-secondary">
                Continue reading with these related posts
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.Id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link to={`/post/${relatedPost.Id}`} className="block card">
                    <img
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <Badge variant="category" size="small" className="mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-bold text-primary dark:text-dark-primary mb-2 hover:text-accent transition-colors duration-200">
                        {relatedPost.title}
                      </h3>
                      <p className="text-secondary dark:text-dark-secondary text-sm">
                        {relatedPost.readTime}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  )
}

export default BlogPost