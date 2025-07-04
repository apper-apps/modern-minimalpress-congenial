import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import ApperIcon from '@/components/ApperIcon'
import CommentForm from '@/components/molecules/CommentForm'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import commentService from '@/services/api/commentService'

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadComments()
  }, [postId])

  const loadComments = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await commentService.getCommentsByPostId(postId)
      setComments(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleCommentAdded = (newComment) => {
    setComments(prev => [...prev, newComment])
  }

  if (loading) {
    return <Loading type="comments" />
  }

  if (error) {
    return <Error message={error} onRetry={loadComments} />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary dark:text-dark-primary">
          Comments ({comments.length})
        </h2>
        <ApperIcon name="MessageCircle" className="w-6 h-6 text-accent" />
      </div>

      {comments.length === 0 ? (
        <Empty type="comments" />
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <motion.div
              key={comment.Id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-surface dark:bg-dark-surface p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-info rounded-full flex items-center justify-center">
                    <ApperIcon name="User" className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary dark:text-dark-primary">
                      {comment.author}
                    </h4>
                    <p className="text-sm text-secondary dark:text-dark-secondary">
                      {format(new Date(comment.publishDate), 'MMM d, yyyy')}
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-primary dark:text-dark-primary leading-relaxed">
                {comment.content}
              </p>
              
              {comment.replies && comment.replies.length > 0 && (
                <div className="mt-4 pl-6 border-l-2 border-accent/20 space-y-4">
                  {comment.replies.map((reply) => (
                    <div key={reply.Id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-accent to-info rounded-full flex items-center justify-center">
                            <ApperIcon name="User" className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h5 className="font-medium text-primary dark:text-dark-primary text-sm">
                              {reply.author}
                            </h5>
                            <p className="text-xs text-secondary dark:text-dark-secondary">
                              {format(new Date(reply.publishDate), 'MMM d, yyyy')}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-primary dark:text-dark-primary">
                        {reply.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      <CommentForm postId={postId} onCommentAdded={handleCommentAdded} />
    </motion.div>
  )
}

export default CommentSection