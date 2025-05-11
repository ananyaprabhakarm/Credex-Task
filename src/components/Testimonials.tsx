import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "SoftSell made selling our unused Adobe licenses incredibly easy. The process was smooth and we got a great value.",
    author: "Sarah Johnson",
    role: "IT Director",
    company: "TechCorp Inc."
  },
  {
    quote: "I was skeptical at first, but SoftSell delivered exactly what they promised. Fast payment and excellent service.",
    author: "Michael Chen",
    role: "Software Manager",
    company: "Innovate Solutions"
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 dark:text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 