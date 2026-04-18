import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import NeuralNetwork from '../3d/NeuralNetwork'
import ParticleField from '../3d/ParticleField'
import FloatingShapes from '../3d/FloatingShapes'

export default function Hero({ mouse }) {
  const [typedText, setTypedText] = useState('')
  const fullText = 'AI/ML Developer & Data Scientist'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <ParticleField mouse={mouse} />
      <FloatingShapes mouse={mouse} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-dark/50 to-cyber-dark z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        {/* Glowing Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-cyber-cyan/50 bg-cyber-cyan/10 text-cyber-cyan text-sm font-mono">
            <span className="animate-pulse mr-2">●</span>
            Available for Projects
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-green bg-clip-text text-transparent">
            Sneh
          </span>
        </motion.h1>

        {/* Typed Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-mono text-cyber-cyan typewriter-cursor">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Building intelligent systems that learn, adapt, and create impact.
          Turning data into insights and models into solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="cyber-btn">
            View Projects
          </a>
          <a href="#contact" className="cyber-btn" style={{ borderColor: '#bf00ff', color: '#bf00ff' }}>
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500 mb-2 font-mono">Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 border-2 border-cyber-cyan/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-cyber-cyan rounded-full mt-1"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 3D Neural Network Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          dpr={[1, 1.5]}
          style={{ opacity: 0.6 }}
        >
          <NeuralNetwork mouse={mouse} />
        </Canvas>
      </div>
    </section>
  )
}
