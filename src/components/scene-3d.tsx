
import { Canvas } from "@react-three/fiber"
import { Float, Environment, Stars } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function FloatingElements() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[5, 2, -5]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[-4, -1, -3]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#a855f7" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2}>
        <mesh position={[3, -3, -7]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#c084fc" metalness={0.7} roughness={0.3} />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[-6, 4, -8]}>
          <tetrahedronGeometry args={[0.7]} />
          <meshStandardMaterial color="#ddd6fe" metalness={0.6} roughness={0.4} />
        </mesh>
      </Float>
    </group>
  )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          <Environment preset="night" />
          <Stars radius={300} depth={60} count={5000} factor={4} saturation={0} fade />
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.3} />
          <FloatingElements />
        </Suspense>
      </Canvas>
    </div>
  )
}
