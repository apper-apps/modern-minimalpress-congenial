import commentsData from '@/services/mockData/comments.json'

class CommentService {
  constructor() {
    this.comments = [...commentsData]
  }

  async getCommentsByPostId(postId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const postComments = this.comments.filter(c => c.postId === parseInt(postId))
        resolve([...postComments])
      }, 200)
    })
  }

  async createComment(commentData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newComment = {
          Id: Math.max(...this.comments.map(c => c.Id)) + 1,
          ...commentData,
          publishDate: new Date().toISOString().split('T')[0],
          replies: []
        }
        this.comments.push(newComment)
        resolve({ ...newComment })
      }, 300)
    })
  }

  async getRecentComments(limit = 5) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const recent = [...this.comments]
          .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
          .slice(0, limit)
        resolve(recent)
      }, 200)
    })
  }
}

export default new CommentService()