import categoriesData from '@/services/mockData/categories.json'

class CategoryService {
  constructor() {
    this.categories = [...categoriesData]
  }

  async getAllCategories() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.categories])
      }, 200)
    })
  }

  async getCategoryBySlug(slug) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const category = this.categories.find(c => c.slug === slug)
        if (category) {
          resolve({ ...category })
        } else {
          reject(new Error('Category not found'))
        }
      }, 200)
    })
  }
}

export default new CategoryService()