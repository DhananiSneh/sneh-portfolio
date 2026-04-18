import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { name: 'GitHub', url: 'https://github.com', icon: '⌘' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'in' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'tw' },
  ]

  return (
    <footer className="relative py-12 px-4 border-t border-cyber-cyan/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center md:text-left"
          >
            <a href="#home" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent">
                S.
              </span>
            </a>
            <p className="text-gray-500 text-sm mt-2 font-mono">
              © {currentYear} Sneh. Built with AI/ML & Creativity.
            </p>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyber-gray/50 text-gray-400 hover:text-cyber-cyan hover:bg-cyber-gray transition-all"
              >
                <span className="text-xs font-mono">{social.icon}</span>
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyber-cyan transition-colors font-mono"
          >
            <span>Back to top</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.a>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-cyber-cyan/10 text-center"
        >
          <p className="text-xs text-gray-600 font-mono">
            Built with{' '}
            <span className="text-cyber-cyan">React</span>,{' '}
            <span className="text-cyber-purple">Three.js</span>, &{' '}
            <span className="text-cyber-green">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
