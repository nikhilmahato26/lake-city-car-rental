import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/contact/Footer'
import FloatingButtons from './components/common/FloatingButtons'
import Home from './pages/Home'

export default function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen bg-beige-50">
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          {/* Fallback to Home for any unknown route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <FloatingButtons />
    </div>
  )
}
