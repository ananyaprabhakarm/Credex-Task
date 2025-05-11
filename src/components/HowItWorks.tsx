import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon, DocumentTextIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    title: 'Upload License',
    description: 'Submit your software license details through our secure platform',
    icon: DocumentTextIcon,
  },
  {
    title: 'Get Valuation',
    description: 'Receive a fair market value assessment within 24 hours',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Get Paid',
    description: 'Accept our offer and receive payment within 48 hours',
    icon: ArrowRightIcon,
  },
]

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 