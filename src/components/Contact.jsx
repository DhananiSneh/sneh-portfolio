import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { socialLinks } from '../utils/constants'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate form submission
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/95 to-cyber-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyber-cyan/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-cyber-cyan font-mono text-sm tracking-widest">04. GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Let's <span className="text-cyber-cyan">Connect</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project in mind or want to collaborate on AI/ML? I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">
                  // name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full cyber-input rounded-lg"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">
                  // email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full cyber-input rounded-lg"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">
                  // message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message here..."
                  rows={5}
                  className="w-full cyber-input rounded-lg resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full cyber-btn relative overflow-hidden"
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : status === 'sent' ? (
                  <span className="flex items-center justify-center gap-2 text-cyber-green">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="ml-2">→</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="cyber-glass rounded-lg p-6">
              <h3 className="text-cyber-cyan font-mono text-sm mb-6">// Connect with me</h3>

              <div className="space-y-4">
                {[
                  { name: 'GitHub', icon: '⌘', url: 'https://github.com', color: 'hover:text-white' },
                  { name: 'LinkedIn', icon: 'in', url: 'https://linkedin.com', color: 'hover:text-blue-400' },
                  { name: 'Twitter', icon: 'tw', url: 'https://twitter.com', color: 'hover:text-blue-300' },
                  { name: 'Email', icon: '@', url: 'mailto:sneh@example.com', color: 'hover:text-cyber-cyan' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-3 rounded-lg bg-cyber-dark/50 hover:bg-cyber-gray/50 transition-all group ${social.color}`}
                  >
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyber-gray text-sm font-mono">
                      {social.icon}
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="cyber-glass rounded-lg p-6">
              <h3 className="text-cyber-green font-mono text-sm mb-4">// Quick Response</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I typically respond within 24-48 hours. For urgent matters, reach out on Twitter.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
