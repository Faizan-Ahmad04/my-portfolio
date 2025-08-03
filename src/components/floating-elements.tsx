
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Octahedron, Torus } from "@react-three/drei"
import type * as THREE from "three"

export default function FloatingElements() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      group.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={group}>
      <Box position={[-3, 2, -2]} scale={0.5}>
        <meshStandardMaterial color="#10b981" />
      </Box>
      <Octahedron position={[3, -1, -1]} scale={0.7}>
        <meshStandardMaterial color="#8b5cf6" />
      </Octahedron>
      <Torus position={[0, -3, -3]} scale={0.6}>
        <meshStandardMaterial color="#ef4444" />
      </Torus>
      <Box position={[2, 3, -4]} scale={0.4}>
        <meshStandardMaterial color="#06b6d4" />
      </Box>
    </group>
  )
}
