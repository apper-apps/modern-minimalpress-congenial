import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import commentService from '@/services/api/commentService'

const CommentForm = ({ postId, onCommentAdded }) => {
  const [formData, setFormData] = useState({
    author: '',
    email: '',
    content: ''
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.author.trim()) {
      newErrors.author = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Comment content is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)
    
    try {
      const commentData = {
        ...formData,
        postId: parseInt(postId)
      }
      
      const newComment = await commentService.createComment(commentData)
      
      toast.success('Comment posted successfully!')
      setFormData({ author: '', email: '', content: '' })
      
      if (onCommentAdded) {
        onCommentAdded(newComment)
      }
    } catch (error) {
      toast.error('Failed to post comment. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-surface dark:bg-dark-surface p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-xl font-bold text-primary dark:text-dark-primary mb-6">
        Leave a Comment
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Name"
            name="author"
            value={formData.author}
            onChange={handleChange}
            error={errors.author}
            placeholder="Your name"
          />
          
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-primary dark:text-dark-primary mb-2">
            Comment
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={4}
            placeholder="Share your thoughts..."
            className={`input-field resize-none ${errors.content ? 'border-error focus:border-error focus:ring-error' : ''}`}
          />
          {errors.content && (
            <p className="mt-2 text-sm text-error">{errors.content}</p>
          )}
        </div>
        
        <Button
          type="submit"
          variant="primary"
          loading={loading}
          disabled={loading}
          icon="MessageCircle"
        >
          Post Comment
        </Button>
      </form>
    </motion.div>
  )
}

export default CommentForm