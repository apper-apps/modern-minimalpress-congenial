import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '@/components/organisms/Layout'
import Home from '@/components/pages/Home'
import BlogPost from '@/components/pages/BlogPost'
import Category from '@/components/pages/Category'
import About from '@/components/pages/About'
import Contact from '@/components/pages/Contact'
import Search from '@/components/pages/Search'
import { ThemeProvider } from '@/hooks/useTheme'

function App() {
  return (
    <ThemeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen"
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </motion.div>
    </ThemeProvider>
  )
}

export default App