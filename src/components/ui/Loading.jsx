import { motion } from 'framer-motion'

const Loading = ({ type = 'posts' }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'post':
        return (
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4 mb-6"></div>
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-5/6"></div>
            </div>
          </div>
        )
      case 'hero':
        return (
          <div className="animate-pulse">
            <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg mb-8"></div>
          </div>
        )
      case 'sidebar':
        return (
          <div className="animate-pulse space-y-6">
            <div className="space-y-3">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"></div>
            </div>
            <div className="space-y-3">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-2/3"></div>
            </div>
          </div>
        )
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="animate-pulse"
              >
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-48 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-md w-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        )
    }
  }

  return (
    <div className="w-full">
      {renderSkeleton()}
    </div>
  )
}

export default Loading