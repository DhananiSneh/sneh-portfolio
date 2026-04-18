import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-32 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-cyber-cyan font-mono text-sm tracking-widest">01. WHO I AM</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            About <span className="text-cyber-purple">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Terminal Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="cyber-glass rounded-lg p-6 font-mono text-sm">
              <div className="flex items-center mb-4 border-b border-cyber-cyan/30 pb-2">
                <div className="flex gap-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-500">sneh@ai-ml ~ %</span>
              </div>

              <div className="space-y-3 text-gray-300">
                <p>
                  <span className="text-cyber-green">$</span>{' '}
                  <span className="text-cyber-cyan">whoami</span>
                </p>
                <p className="text-gray-100 ml-4">
                  Sneh — AI/ML enthusiast & Data Scientist in making
                </p>

                <p className="mt-6">
                  <span className="text-cyber-green">$</span>{' '}
                  <span className="text-cyber-cyan">cat about.txt</span>
                </p>
                <p className="text-gray-100 ml-4 leading-relaxed">
                  I'm a B.Tech IT student specializing in AI/ML, passionate about
                  building intelligent systems that solve real-world problems.
                  Currently focused on machine learning, deep learning, and data science.
                </p>

                <p className="mt-6">
                  <span className="text-cyber-green">$</span>{' '}
                  <span className="text-cyber-cyan">cat interests.json</span>
                </p>
                <p className="text-gray-100 ml-4">
                  ['Neural Networks', 'Computer Vision', 'NLP', 'Data Analysis', 'Python']
                </p>

                <p className="mt-6 text-cyber-green animate-pulse">
                  <span className="text-cyber-green">$</span> █
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Projects Built', value: '10+', color: 'cyan' },
                { label: 'ML Models', value: '5+', color: 'purple' },
                { label: 'Datasets Analyzed', value: '20+', color: 'green' },
                { label: 'Technologies', value: '15+', color: 'cyan' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="cyber-glass rounded-lg p-6 text-center hover:border-cyber-cyan/50 transition-all"
                >
                  <div className={`text-3xl font-bold text-cyber-${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-mono">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="cyber-glass rounded-lg p-6"
            >
              <h3 className="text-cyber-cyan font-mono text-sm mb-4">// Currently Learning</h3>
              <div className="flex flex-wrap gap-2">
                {['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP', 'ML Ops'].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-mono rounded border border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple/20 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
