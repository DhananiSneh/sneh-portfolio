import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SkillOrbs from '../3d/SkillOrb'
import { skills } from '../utils/constants'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const categories = [
    { name: 'AI & ML', color: 'cyan', skills: skills.filter(s => ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch'].includes(s.name)) },
    { name: 'Data', color: 'green', skills: skills.filter(s => ['Python', 'Data Science', 'SQL'].includes(s.name)) },
    { name: 'Frontend', color: 'purple', skills: skills.filter(s => ['HTML/CSS', 'JavaScript', 'React'].includes(s.name)) },
    { name: 'Tools', color: 'cyan', skills: skills.filter(s => ['Git', 'Linux'].includes(s.name)) },
  ]

  return (
    <section id="skills" className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cyber-dark/50" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-cyber-green font-mono text-sm tracking-widest">02. WHAT I KNOW</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Skills & <span className="text-cyber-green">Stack</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 3D Skill Constellation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-96 lg:h-[500px] relative"
          >
            <SkillOrbs
              skills={skills.map(s => s.name)}
              onHover={setHoveredSkill}
            />
            {/* Hovered Skill Info */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="cyber-glass rounded-lg p-4">
                {hoveredSkill ? (
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{skills.find(s => s.name === hoveredSkill)?.icon}</span>
                    <div>
                      <h4 className="text-white font-bold">{hoveredSkill}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-1 w-32 bg-cyber-gray rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skills.find(s => s.name === hoveredSkill)?.level}%` }}
                            transition={{ duration: 0.5 }}
                            className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-green"
                          />
                        </div>
                        <span className="text-xs text-gray-400 font-mono">
                          {skills.find(s => s.name === hoveredSkill)?.level}%
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm font-mono">Hover over the orbs to see skills</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Skill Categories */}
          <div className="space-y-6">
            {categories.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                className="cyber-glass rounded-lg p-6"
              >
                <h3 className={`text-cyber-${category.color} font-mono text-sm mb-4`}>
                  // {category.name}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-300 flex items-center gap-2">
                          <span>{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-cyber-gray rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className={`h-full bg-gradient-to-r ${
                            category.color === 'cyan'
                              ? 'from-cyber-cyan to-cyber-cyan/50'
                              : category.color === 'green'
                              ? 'from-cyber-green to-cyber-green/50'
                              : 'from-cyber-purple to-cyber-purple/50'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
