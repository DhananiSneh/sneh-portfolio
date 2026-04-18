import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function NeuralParticle({ position, color, scale = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      const s = scale * (1 + Math.sin(state.clock.elapsedTime * 3 + position[0]) * 0.2)
      meshRef.current.scale.setScalar(s)
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

function Connection({ start, end, mouse }) {
  const lineRef = useRef()
  const [progress, setProgress] = useState(0)

  useFrame((state) => {
    if (lineRef.current) {
      const newProgress = (Math.sin(state.clock.elapsedTime + start[0]) + 1) / 2
      setProgress(newProgress)

      const positions = lineRef.current.geometry.attributes.position.array
      const targetX = start[0] + (end[0] - start[0]) * newProgress
      const targetY = start[1] + (end[1] - start[1]) * newProgress
      const targetZ = start[2] + (end[2] - start[2]) * newProgress

      // Pulse effect
      const pulse = Math.sin(state.clock.elapsedTime * 4) * 0.5 + 0.5
      lineRef.current.material.opacity = 0.1 + pulse * 0.3
    }
  })

  return (
    <line ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array([...start, ...end])}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#00f5ff" transparent opacity={0.3} />
    </line>
  )
}

function NeuralLayer({ positions, color, yOffset = 0 }) {
  return (
    <group position={[0, yOffset, 0]}>
      {positions.map((pos, i) => (
        <NeuralParticle key={i} position={pos} color={color} />
      ))}
    </group>
  )
}

function DataStream() {
  const particlesRef = useRef()
  const count = 50

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = Math.random() * 10 - 5
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] -= 0.02
        if (positions[i * 3 + 1] < -5) {
          positions[i * 3 + 1] = 5
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#00f5ff" size={0.05} transparent opacity={0.6} />
    </points>
  )
}

export default function NeuralNetwork({ mouse }) {
  const groupRef = useRef()

  const layers = useMemo(() => {
    const layer1 = []
    const layer2 = []
    const layer3 = []

    for (let i = 0; i < 5; i++) {
      layer1.push([(i - 2) * 0.8, 2, 0])
    }
    for (let i = 0; i < 8; i++) {
      layer2.push([(i - 3.5) * 0.6, 0, 0])
    }
    for (let i = 0; i < 3; i++) {
      layer3.push([(i - 1) * 1.2, -2, 0])
    }

    return { layer1, layer2, layer3 }
  }, [])

  const connections = useMemo(() => {
    const conns = []
    layers.layer1.forEach((p1, i) => {
      layers.layer2.forEach((p2, j) => {
        if (Math.random() > 0.3) {
          conns.push({ start: p1, end: p2 })
        }
      })
    })
    layers.layer2.forEach((p1, i) => {
      layers.layer3.forEach((p2, j) => {
        if (Math.random() > 0.2) {
          conns.push({ start: p1, end: p2 })
        }
      })
    })
    return conns
  }, [layers])

  useFrame((state) => {
    if (groupRef.current) {
      const mx = mouse.current.x
      const my = mouse.current.y
      groupRef.current.rotation.y = mx * 0.5
      groupRef.current.rotation.x = my * 0.3
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.2}>
      <NeuralLayer positions={layers.layer1} color="#00f5ff" yOffset={0} />
      <NeuralLayer positions={layers.layer2} color="#bf00ff" yOffset={0} />
      <NeuralLayer positions={layers.layer3} color="#00ff88" yOffset={0} />
      {connections.map((conn, i) => (
        <Connection key={i} start={conn.start} end={conn.end} mouse={mouse} />
      ))}
      <DataStream />
    </group>
  )
}
