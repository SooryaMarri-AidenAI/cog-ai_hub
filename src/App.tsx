import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AgentBot from './pages/AgentBot'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import TextToVideo from './pages/TextToVideo'

const App = () => {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-hero-glow text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/agent-bot" element={<AgentBot />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/text-to-video" element={<TextToVideo />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
