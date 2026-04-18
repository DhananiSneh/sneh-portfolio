import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 2000 }) {
  const mesh = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    const colorOptions = [
      new THREE.Color('#00f5ff'), // Cyan
      new THREE.Color('#bf00ff'), // Purple
      new THREE.Color('#00ff88'), // Green
    ]

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50

      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      sizes[i] = Math.random() * 0.5 + 0.1
    }

    return { positions, colors, sizes }
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.0003
      mesh.current.rotation.y += 0.0005

      // Mouse interaction
      const targetX = mouse.current.x * 0.5
      const targetY = mouse.current.y * 0.5
      mesh.current.rotation.x += (targetY - mesh.current.rotation.x) * 0.01
      mesh.current.rotation.y += (targetX - mesh.current.rotation.y) * 0.01
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function FloatingCode() {
  const mesh = useRef()

  const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
  const codeLines = useMemo(() => {
    const lines = []
    for (let i = 0; i < 20; i++) {
      let line = ''
      for (let j = 0; j < 50; j++) {
        line += characters[Math.floor(Math.random() * characters.length)]
      }
      lines.push(line)
    }
    return lines
  }, [])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <group ref={mesh} position={[5, 0, -5]}>
      {codeLines.map((line, i) => (
        <text
          key={i}
          position={[0, 5 - i * 0.5, 0]}
          fontSize={0.15}
          color="#00f5ff"
          opacity={0.15}
          anchorX="left"
          font="https://fonts.gstatic.com/s/firacode/v22/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sJVD7MOzlojwUKaJO.woff"
        >
          {line}
        </text>
      ))}
    </group>
  )
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <Particles count={3000} />
        <FloatingCode />
      </Canvas>
    </div>
  )
}
