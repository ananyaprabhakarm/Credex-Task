import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheckIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Secure Transactions',
    description: 'Bank-level security for all license transfers and payments',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Fast Process',
    description: 'Complete the entire process in as little as 48 hours',
    icon: ClockIcon,
  },
  {
    title: 'Best Value',
    description: 'Get up to 80% of retail value for your licenses',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Expert Support',
    description: 'Dedicated team to guide you through the process',
    icon: UserGroupIcon,
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Why Choose Us
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 