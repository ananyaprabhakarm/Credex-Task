import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a saved preference
    const savedMode = localStorage.getItem('darkMode')
    return savedMode ? JSON.parse(savedMode) : false
  })

  useEffect(() => {
    // Update localStorage when dark mode changes
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    // Update document class
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <nav className="container py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-600">SoftSell</div>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="btn btn-secondary"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </header>

      <main className="pt-16">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App 