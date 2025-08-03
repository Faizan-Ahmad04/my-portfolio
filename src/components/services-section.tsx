import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Torus, Float, MeshDistortMaterial } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { Code, Globe, Briefcase, Zap, Rocket, Sparkles, Server } from "lucide-react"

function ServicesTorus() {
  const torusRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.2
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Torus ref={torusRef} args={[1, 0.4, 16, 100]} position={[0, 0, -2]}>
        <MeshDistortMaterial
          color="#a855f7"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
          metalness={0.9}
        />
      </Torus>
    </Float>
  )
}

export default function ServicesSection() {
  const services = [
    {
      title: "Full Stack Web Development",
      description:
        "End-to-end web application development using MERN, MEVN stacks with modern frameworks and best practices for scalable solutions.",
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      features: [
        "React.js & Vue.js Applications",
        "Node.js Backend Development",
        "Database Design & Integration",
        "Responsive UI/UX Design",
      ],
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "bg-slate-900/50",
    },
    {
      title: "Backend & API Development",
      description:
        "Robust server-side applications and RESTful APIs using Node.js, Java SpringBoot, Ruby on Rails with Docker and Redis integration.",
      icon: <Server className="w-6 h-6 sm:w-8 sm:h-8" />,
      features: [
        "RESTful API Development",
        "Database Architecture",
        "Docker Containerization",
        "Redis Caching Solutions",
      ],
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-slate-900/50",
    },
    {
      title: "Frontend Development",
      description:
        "Modern, responsive user interfaces with React.js, Vue.js, and cutting-edge frontend technologies for exceptional user experiences.",
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      features: [
        "React.js & Vue.js Development",
        "Modern JavaScript/TypeScript",
        "Responsive Design",
        "State Management",
      ],
      gradient: "from-purple-500 to-indigo-600",
      bgColor: "bg-slate-900/50",
    },
    {
      title: "Performance Optimization",
      description:
        "Enhancing application performance, reducing load times, database optimization, and implementing caching strategies with Redis.",
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      features: [
        "Speed Optimization",
        "Database Query Tuning",
        "Redis Caching Implementation",
        "Performance Monitoring",
      ],
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-slate-900/50",
    },
  ]

  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gray-900 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"
          animate={{
            background: [
              "linear-gradient(135deg, #111827 0%, #000000 50%, #111827 100%)",
              "linear-gradient(135deg, #1f2937 0%, #111827 50%, #1f2937 100%)",
              "linear-gradient(135deg, #111827 0%, #000000 50%, #111827 100%)",
            ],
          }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Enhanced floating particles */}
        <div className="absolute inset-0">
          {[...Array(32)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -65, 0],
                opacity: [0, 1, 0],
                scale: [0, 2.2, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Animated grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "65px 65px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "65px 65px"],
          }}
          transition={{ duration: 32, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* 3D Background */}
      <div className="absolute left-0 top-1/3 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 opacity-20">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} color="#a855f7" />
            <ServicesTorus />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-purple-300 rounded-full text-sm font-semibold border border-gray-700/50 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(55, 65, 81, 0.7)" }}
            animate={{
              boxShadow: [
                "0 0 0 rgba(168, 85, 247, 0)",
                "0 0 20px rgba(168, 85, 247, 0.4)",
                "0 0 0 rgba(168, 85, 247, 0)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            What I Do
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            animate={{
              textShadow: [
                "0 0 20px rgba(255, 255, 255, 0.3)",
                "0 0 40px rgba(255, 255, 255, 0.6)",
                "0 0 20px rgba(255, 255, 255, 0.3)",
              ],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            My Services
          </motion.h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive development services for both corporate projects and freelance clients. From concept to
            deployment, I deliver high-quality solutions that drive business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
                boxShadow: "0 30px 60px rgba(168, 85, 247, 0.2)",
              }}
              className="group"
            >
              <div
                className={`${service.bgColor} backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-800/50 h-full transition-all duration-500 relative overflow-hidden group-hover:border-purple-500/30`}
              >
                {/* Icon */}
                <motion.div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(168, 85, 247, 0.3)",
                      "0 0 40px rgba(168, 85, 247, 0.6)",
                      "0 0 20px rgba(168, 85, 247, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.7 }}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors"
                    >
                      <motion.div
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: featureIndex * 0.2 }}
                      />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className={`w-full py-3 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base`}
                >
                  <Briefcase className="w-4 h-4" />
                  Get Started
                </motion.button>

                {/* Animated Line */}
                <motion.div
                  className={`w-full h-1 bg-gradient-to-r ${service.gradient} rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 sm:p-12 shadow-xl">
            <motion.div
              className="flex items-center justify-center gap-3 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to Start Your Project?</h3>
            </motion.div>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Whether you need a complete application or want to enhance an existing project, I'm here to help you
              achieve your goals with cutting-edge technology and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-600/50 text-purple-300 rounded-2xl font-semibold hover:bg-gray-800/30 transition-all duration-300 text-sm sm:text-base"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
