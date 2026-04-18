import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import * as THREE from 'three'

function SkillSphere({ position, skill, color, onHover }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group
        position={position}
        onPointerOver={() => { setHovered(true); onHover(skill) }}
        onPointerOut={() => setHovered(false)}
      >
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.4, 1]} />
          <meshBasicMaterial
            color={color}
            wireframe
            transparent
            opacity={hovered ? 1 : 0.7}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={hovered ? 0.3 : 0.1}
          />
        </mesh>
        <Text
          position={[0, 0.7, 0]}
          fontSize={0.15}
          color="#e0e0e0"
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
      </group>
    </Float>
  )
}

function ConnectionLine({ start, end }) {
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      ref.current.material.opacity = 0.1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
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
      <lineBasicMaterial color="#00f5ff" transparent opacity={0.2} />
    </line>
  )
}

function Constellation({ skills, onHover }) {
  const groupRef = useRef()

  const positions = useMemo(() => {
    return skills.map((skill, i) => {
      const angle = (i / skills.length) * Math.PI * 2
      const radius = 3
      return [
        Math.cos(angle) * radius,
        Math.sin(angle * 0.5) * 1.5,
        Math.sin(angle) * radius
      ]
    })
  }, [skills])

  const connections = useMemo(() => {
    const conns = []
    for (let i = 0; i < positions.length; i++) {
      const next = (i + 1) % positions.length
      conns.push({ start: positions[i], end: positions[next] })
    }
    return conns
  }, [positions])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const colors = ['#00f5ff', '#bf00ff', '#00ff88', '#ff00ff', '#ffff00']

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <SkillSphere
          key={i}
          position={pos}
          skill={skills[i]}
          color={colors[i % colors.length]}
          onHover={onHover}
        />
      ))}
      {connections.map((conn, i) => (
        <ConnectionLine key={i} start={conn.start} end={conn.end} />
      ))}
    </group>
  )
}

export default function SkillOrbs({ skills = [], onHover }) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <Constellation
          skills={skills.length > 0 ? skills : ['Python', 'ML', 'DL', 'TF', 'PT', 'DS']}
          onHover={onHover}
        />
      </Canvas>
    </div>
  )
}
