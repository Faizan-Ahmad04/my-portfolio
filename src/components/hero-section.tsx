
import { Canvas } from "@react-three/fiber"
import { Float, Environment, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { motion } from "framer-motion"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { ArrowRight, Star, Users, Coffee, Award, Code, Globe } from "lucide-react"

function Hero3DElements() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[0.8, 64, 64]} position={[3, 1, -2]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0}
            metalness={0.8}
            transparent
            opacity={0.7}
          />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[-2.5, -1, -1]}>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color="#a855f7" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2}>
        <mesh position={[2, -2, -3]}>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#c084fc" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
    </group>
  )
}

export default function HeroSection() {
  const stats = [
    { number: "1.5+", label: "Years Experience", icon: <Award className="w-4 h-4 sm:w-6 sm:h-6" /> },
    { number: "15+", label: "Projects Completed", icon: <Star className="w-4 h-4 sm:w-6 sm:h-6" /> },
    { number: "30+", label: "Happy Clients", icon: <Users className="w-4 h-4 sm:w-6 sm:h-6" /> },
    { number: "1000+", label: "Cups of Coffee", icon: <Coffee className="w-4 h-4 sm:w-6 sm:h-6" /> },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 px-4 sm:px-6"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900/20" />

      {/* 3D Scene - Hidden on mobile for performance */}
      <div className="absolute inset-0 z-0 opacity-60 hidden sm:block">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <Suspense fallback={null}>
            <Environment preset="night" />
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
            <Hero3DElements />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 sm:space-y-4"
            >
              <motion.p
                className="text-purple-400 font-semibold text-base sm:text-lg"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              >
                Faizan{" "}
                <motion.span
                  className="text-purple-400 block sm:inline"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(139, 92, 246, 0.3)",
                      "0 0 40px rgba(139, 92, 246, 0.6)",
                      "0 0 20px rgba(139, 92, 246, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  Ahmad
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-200"
                animate={{
                  color: ["#e5e7eb", "#a855f7", "#e5e7eb"],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                Full Stack Software Engineer
              </motion.h2>

              {/* Professional Status */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4">
                <motion.a
                  href="https://codegaragetech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white-900 text-white-300 rounded-full text-xs sm:text-sm font-semibold border border-purple-500/30 hover:bg-purple-800/40 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(139, 92, 246, 0)",
                      "0 0 20px rgba(139, 92, 246, 0.3)",
                      "0 0 0 rgba(139, 92, 246, 0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <img
                    src="/images/code-garage-logo.png"
                    alt="Code Garage"
                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                  />
                  <span className="text-indigo-500">Code</span> Garage
                </motion.a>
                <motion.div
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-900/30 text-green-300 rounded-full text-xs sm:text-sm font-semibold border border-green-500/30"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(34, 197, 94, 0)",
                      "0 0 20px rgba(34, 197, 94, 0.3)",
                      "0 0 0 rgba(34, 197, 94, 0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                >
                  <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                  Available for Freelance
                </motion.div>
              </div>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              Passionate about building high-impact web applications using{" "}
              <span className="text-purple-400 font-semibold">MERN, MEVN, Java SpringBoot, and Ruby on Rails</span>. Currently crafting
              innovative solutions at Code Garage Tech while helping businesses grow through freelance projects.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white rounded-2xl font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg group text-sm sm:text-base"
              >
                <span>View My Work</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-600 text-purple-400 rounded-2xl font-semibold hover:bg-purple-900/20 transition-all duration-300 text-sm sm:text-base"
              >
                <span>Hire Me for Freelance</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-6 sm:pt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-3 sm:p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-500/20"
                >
                  <motion.div
                    className="flex justify-center mb-2 text-purple-400"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="text-lg sm:text-2xl font-bold text-white"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative order-1 lg:order-2"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Main Image */}
              <motion.div
                className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                <div
                  className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/50 to-gray-800 shadow-2xl relative border border-purple-500/20"
                  style={{
                    boxShadow: `
         0 25px 50px -12px rgba(139, 92, 246, 0.4),
         0 0 0 1px rgba(139, 92, 246, 0.1),
         inset 0 1px 0 rgba(255, 255, 255, 0.1),
         0 10px 30px rgba(0, 0, 0, 0.3),
         0 0 60px rgba(139, 92, 246, 0.3)
       `,
                  }}
                >
                  <img
                    src="/images/faizan.png"
                    alt="Faizan Ahmad - Full Stack Software Engineer"
                    className="w-full h-full object-cover profile-image-fix"
                  />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-lg flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg flex items-center justify-center"
                animate={{
                  rotate: [360, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  y: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <Globe className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </motion.div>

              {/* Background Decoration */}
              <motion.div
                className="absolute -z-10 top-8 right-8 sm:top-10 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
