import blogPostsData from '@/services/mockData/blogPosts.json'

class BlogService {
  constructor() {
    this.posts = [...blogPostsData]
  }

  async getAllPosts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.posts])
      }, 300)
    })
  }

  async getPostById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const post = this.posts.find(p => p.Id === parseInt(id))
        if (post) {
          resolve({ ...post })
        } else {
          reject(new Error('Post not found'))
        }
      }, 200)
    })
  }

  async getFeaturedPosts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const featured = this.posts.filter(post => post.featured)
        resolve([...featured])
      }, 250)
    })
  }

  async getPostsByCategory(category) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = this.posts.filter(post => 
          post.category.toLowerCase() === category.toLowerCase()
        )
        resolve([...filtered])
      }, 300)
    })
  }

  async getRecentPosts(limit = 5) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const recent = [...this.posts]
          .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
          .slice(0, limit)
        resolve(recent)
      }, 200)
    })
  }

  async getPopularPosts(limit = 5) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const popular = [...this.posts]
          .sort(() => Math.random() - 0.5)
          .slice(0, limit)
        resolve(popular)
      }, 200)
    })
  }

  async searchPosts(query) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = this.posts.filter(post =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.content.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        )
        resolve([...filtered])
      }, 400)
    })
  }

  async getRelatedPosts(postId, limit = 3) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const currentPost = this.posts.find(p => p.Id === parseInt(postId))
        if (!currentPost) {
          resolve([])
          return
        }

        const related = this.posts
          .filter(post => post.Id !== parseInt(postId))
          .filter(post => 
            post.category === currentPost.category ||
            post.tags.some(tag => currentPost.tags.includes(tag))
          )
          .slice(0, limit)

        resolve([...related])
      }, 200)
    })
  }
}

export default new BlogService()