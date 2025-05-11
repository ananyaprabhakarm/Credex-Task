import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Sell Your Software Licenses
          <span className="text-primary-600"> with Confidence</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Get the best value for your unused software licenses. Fast, secure, and hassle-free.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="btn btn-primary text-lg px-8 py-3">
            Get a Quote
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 