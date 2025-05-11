import React, { useState } from 'react'
import { motion } from 'framer-motion'

const licenseTypes = [
  'Adobe Creative Cloud',
  'Microsoft Office',
  'Autodesk',
  'Other'
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-600 text-lg py-4 px-6"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-600 text-lg py-4 px-6"
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-600 text-lg py-4 px-6"
                required
              />
            </div>
            <div>
              <label htmlFor="licenseType" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                License Type
              </label>
              <select
                id="licenseType"
                name="licenseType"
                value={formData.licenseType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-600 text-lg py-4 px-6"
                required
              >
                <option value="">Select a license type</option>
                {licenseTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-600 text-lg py-4 px-6"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-primary-600 text-white py-4 px-8 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 