import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

function WireframeBox({ position, scale = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
        <meshBasicMaterial color="#00f5ff" wireframe transparent opacity={0.6} />
      </mesh>
    </Float>
  )
}

function WireframeTorus({ position, scale = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[0.8, 0.3, 8, 16]} />
        <meshBasicMaterial color="#bf00ff" wireframe transparent opacity={0.5} />
      </mesh>
    </Float>
  )
}

function DistortedSphere({ position, scale = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <MeshDistortMaterial
          color="#00ff88"
          distort={0.3}
          speed={2}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  )
}

function NeuralNode({ position, color }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

function NeuralNetwork({ mouse }) {
  const groupRef = useRef()

  const nodes = [
    { position: [-2, 1, 0], color: '#00f5ff' },
    { position: [0, 2, 0], color: '#00f5ff' },
    { position: [2, 1, 0], color: '#00f5ff' },
    { position: [-1, 0, 1], color: '#bf00ff' },
    { position: [1, 0, 1], color: '#bf00ff' },
    { position: [0, -1, 0], color: '#00ff88' },
  ]

  const connections = [
    [0, 1], [1, 2], [0, 3], [2, 4], [3, 5], [4, 5], [1, 3], [1, 4]
  ]

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.current.x * 0.3
      groupRef.current.rotation.x = mouse.current.y * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <NeuralNode key={i} position={node.position} color={node.color} />
      ))}
      {connections.map((conn, i) => (
        <Line key={i} start={nodes[conn[0]].position} end={nodes[conn[1]].position} />
      ))}
    </group>
  )
}

function Line({ start, end }) {
  const ref = useRef()

  const points = useMemo(() => {
    return [new THREE.Vector3(...start), new THREE.Vector3(...end)]
  }, [start, end])

  useFrame((state) => {
    if (ref.current) {
      ref.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2
    }
  })

  return (
    <line ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array([...start, ...end])}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#00f5ff" transparent opacity={0.4} />
    </line>
  )
}

function useMemo(arr) {
  const [state] = useState(arr)
  return state
}

export default function FloatingShapes({ mouse }) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <WireframeBox position={[-4, 1, -2]} scale={1.2} />
        <WireframeTorus position={[4, -1, -3]} scale={1.5} />
        <DistortedSphere position={[0, 2, -4]} scale={1} />
        <NeuralNetwork mouse={mouse} />
      </Canvas>
    </div>
  )
}
