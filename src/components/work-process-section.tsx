
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Cylinder, Float, MeshDistortMaterial } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { Lightbulb, Palette, Code, Rocket } from "lucide-react"

function ProcessCylinder() {
  const cylinderRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (cylinderRef.current) {
      cylinderRef.current.rotation.y = state.clock.elapsedTime * 0.3
      cylinderRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Cylinder ref={cylinderRef} args={[1, 1, 2, 32]} position={[0, 0, -2]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
          metalness={0.8}
        />
      </Cylinder>
    </Float>
  )
}

export default function WorkProcessSection() {
  const processes = [
    {
      number: "01",
      title: "Discover",
      description: "Understanding your needs, goals, and vision to create the perfect solution strategy.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
    {
      number: "02",
      title: "Design",
      description: "Creating beautiful, user-friendly designs that align with your brand and objectives.",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
    },
    {
      number: "03",
      title: "Develop",
      description: "Building robust, scalable applications using cutting-edge technologies and best practices.",
      icon: <Code className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
    },
    {
      number: "04",
      title: "Launch",
      description: "Deploying your project with thorough testing, optimization, and ongoing support.",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
    },
  ]

  return (
    <section className="relative py-32 px-6 bg-gray-50 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 opacity-20">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <ProcessCylinder />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
            Work Process
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            How I Work
          </motion.h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My proven process ensures every project is delivered with excellence, from initial concept to final launch.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
                boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
              }}
              className="relative group"
            >
              <div
                className={`${process.bgColor} rounded-3xl p-8 shadow-lg border border-white/50 backdrop-blur-sm h-full transition-all duration-500`}
              >
                {/* Number Badge */}
                <motion.div
                  className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 },
                  }}
                >
                  {process.number}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(139, 92, 246, 0.3)",
                      "0 0 40px rgba(139, 92, 246, 0.6)",
                      "0 0 20px rgba(139, 92, 246, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.7 }}
                >
                  {process.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {process.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{process.description}</p>

                {/* Animated Line */}
                <motion.div
                  className={`w-full h-1 bg-gradient-to-r ${process.color} rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                />
              </div>

              {/* Connection Line (except for last item) */}
              {index < processes.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.2 + 1 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
