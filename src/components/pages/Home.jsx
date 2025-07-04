import { motion } from 'framer-motion'
import Hero from '@/components/organisms/Hero'
import BlogGrid from '@/components/organisms/BlogGrid'
import Sidebar from '@/components/organisms/Sidebar'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-primary dark:text-dark-primary mb-2">
                Featured Articles
              </h2>
              <p className="text-secondary dark:text-dark-secondary">
                Discover our most popular and trending content
              </p>
            </motion.div>
            
            <div className="mb-16">
              <BlogGrid featured={true} limit={3} />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-primary dark:text-dark-primary mb-2">
                Latest Posts
              </h2>
              <p className="text-secondary dark:text-dark-secondary">
                Stay updated with our newest articles and insights
              </p>
            </motion.div>
            
            <BlogGrid />
          </div>
          
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home