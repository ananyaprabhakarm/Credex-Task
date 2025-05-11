import React from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

type FormData = {
  name: string
  email: string
  company: string
  licenseType: string
  message: string
}

const licenseTypes = [
  'Adobe Creative Cloud',
  'Microsoft Office',
  'Autodesk',
  'Other'
]

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    // In a real application, this would send the data to a backend
    alert('Thank you for your submission! We will contact you soon.')
  }

  return (
    <section className="py-20">
      <div className="container max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company
            </label>
            <input
              {...register('company', { required: 'Company name is required' })}
              type="text"
              className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="licenseType" className="block text-sm font-medium mb-2">
              License Type
            </label>
            <select
              {...register('licenseType', { required: 'Please select a license type' })}
              className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="">Select a license type</option>
              {licenseTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.licenseType && (
              <p className="text-red-500 text-sm mt-1">{errors.licenseType.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              rows={4}
              className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full btn btn-primary py-3"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactForm 