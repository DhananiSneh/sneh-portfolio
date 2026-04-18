import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import * as THREE from 'three'

function GlowingCard({ children, color = '#00f5ff' }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = hovered ? 0.1 : 0
      meshRef.current.rotation.y = hovered ? 0.1 : 0
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[3, 2, 0.1]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.3 : 0.15}
        />
      </mesh>
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[2.9, 1.9, 0.1]} />
        <meshBasicMaterial color="#12121a" />
      </mesh>
    </Float>
  )
}

function ParticleBorder({ color = '#00f5ff' }) {
  const pointsRef = useRef()
  const count = 100

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      const radius = 1.6
      pos[i * 3] = Math.cos(angle) * radius
      pos[i * 3 + 1] = Math.sin(angle) * radius
      pos[i * 3 + 2] = 0
    }
    return pos
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.z = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.03} transparent opacity={0.8} />
    </points>
  )
}

function useMemo(fn) {
  const [value] = useState(fn)
  return value
}

export default function ProjectCard3D({ title, description, tech = [], color = '#00f5ff' }) {
  return (
    <div className="w-full h-64">
      <Canvas dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <group position={[0, 0, 0]} scale={0.8}>
          <GlowingCard color={color} />
          <ParticleBorder color={color} />
        </group>
      </Canvas>
    </div>
  )
}
