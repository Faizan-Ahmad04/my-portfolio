
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { Award, Users, Coffee, Star, Code, Briefcase } from "lucide-react"

function AboutSphere() {
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1.5, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gray-800 overflow-hidden">
      {/* 3D Background - Hidden on mobile */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 opacity-20 hidden lg:block">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AboutSphere />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-xs sm:text-sm font-semibold border border-purple-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              About Me
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              I am Professional{" "}
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
                Software Engineer
              </motion.span>
            </motion.h2>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm a passionate <span className="text-purple-400 font-semibold">Full Stack Software Engineer</span> at{" "}
                <a
                  href="https://codegaragetech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 cursor-pointer"
                >
                  Code Garage Tech
                </a>, specializing in creating
                innovative web applications using modern technologies like MERN Stack, MEVN Stack, Java SpringBoot, and Ruby on Rails.              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                With expertise in both frontend and backend development, I transform complex business requirements into
                elegant, scalable solutions. I'm also available for freelance projects, helping businesses build robust
                digital experiences that drive growth and success.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                My passion lies in writing clean, efficient code and staying updated with the latest industry trends to
                deliver exceptional results for both my company and freelance clients.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { icon: <Award className="w-4 h-4 sm:w-6 sm:h-6" />, number: "1.5+", label: "Years Experience" },
                { icon: <Users className="w-4 h-4 sm:w-6 sm:h-6" />, number: "20+", label: "Happy Clients" },
                { icon: <Star className="w-4 h-4 sm:w-6 sm:h-6" />, number: "15+", label: "Projects Done" },
                { icon: <Coffee className="w-4 h-4 sm:w-6 sm:h-6" />, number: "1000+", label: "Cups of Coffee" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-3 sm:p-4 bg-gray-700/50 rounded-2xl border border-gray-600"
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

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white rounded-2xl font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                Download My Resume
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
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                Hire for Freelance
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative order-first lg:order-last"
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
                {/* Glowing border effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(139, 92, 246, 0.3)",
                      "0 0 60px rgba(139, 92, 246, 0.6)",
                      "0 0 30px rgba(139, 92, 246, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

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
                    alt="Faizan Ahmad - Professional Software Engineer"
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
                <Briefcase className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
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
