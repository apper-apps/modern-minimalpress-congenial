import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import BlogCard from '@/components/molecules/BlogCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import blogService from '@/services/api/blogService'

const BlogGrid = ({ category, searchQuery, featured = false, limit }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadPosts()
  }, [category, searchQuery, featured, limit])

  const loadPosts = async () => {
    try {
      setLoading(true)
      setError('')
      
      let data
      if (searchQuery) {
        data = await blogService.searchPosts(searchQuery)
      } else if (category) {
        data = await blogService.getPostsByCategory(category)
      } else if (featured) {
        data = await blogService.getFeaturedPosts()
      } else {
        data = await blogService.getAllPosts()
      }
      
      if (limit) {
        data = data.slice(0, limit)
      }
      
      setPosts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <Loading type="posts" />
  }

  if (error) {
    return <Error message={error} onRetry={loadPosts} />
  }

  if (posts.length === 0) {
    const emptyType = searchQuery ? 'search' : category ? 'category' : 'posts'
    return <Empty type={emptyType} />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {posts.map((post, index) => (
        <motion.div
          key={post.Id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
        >
          <BlogCard post={post} featured={featured && index === 0} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default BlogGrid