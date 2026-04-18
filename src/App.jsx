import { useRef, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function CustomCursor() {
  const cursorRef = useRef()
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        left: position.x - 8,
        top: position.y - 8,
        background: 'linear-gradient(135deg, #00f5ff, #bf00ff)',
        boxShadow: '0 0 20px #00f5ff, 0 0 40px #bf00ff',
      }}
    />
  )
}

function ScanLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] scan-lines" />
  )
}

function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-cyber-purple/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyber-cyan/5 rounded-full blur-[200px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-cyber-green/5 rounded-full blur-[150px]" />
    </div>
  )
}

export default function App() {
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      {/* Background Effects */}
      <GradientBackground />
      <ScanLines />
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero mouse={mouse} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
