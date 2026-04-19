import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../utils/constants'

export default function SkillOrbs({ skills = [], onHover }) {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Animated Skill Rings */}
      <div className="relative w-64 h-64">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 border-2 border-cyber-cyan/30 rounded-full"
        />
        {/* Middle Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-8 border border-cyber-purple/30 rounded-full"
        />
        {/* Inner Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-16 border border-cyber-green/30 rounded-full"
        />

        {/* Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 rounded-full bg-cyber-dark/80 border border-cyber-cyan/50 flex items-center justify-center"
          >
            <span className="text-3xl">🤖</span>
          </motion.div>
        </div>

        {/* Floating Skill Icons */}
        {skills.slice(0, 6).map((skill, i) => {
          const angle = (i / 6) * Math.PI * 2
          const radius = 100
          return (
            <motion.div
              key={skill.name || i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="absolute w-12 h-12 rounded-full bg-cyber-dark/80 border border-cyber-cyan/30 flex items-center justify-center cursor-pointer"
              style={{
                left: `calc(50% + ${Math.cos(angle) * radius}px - 24px)`,
                top: `calc(50% + ${Math.sin(angle) * radius}px - 24px)`,
              }}
              onMouseEnter={() => onHover && onHover(skill.name || skill)}
              onMouseLeave={() => onHover && onHover(null)}
              whileHover={{ scale: 1.2 }}
            >
              <span className="text-xl">{skill.icon || '📊'}</span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
