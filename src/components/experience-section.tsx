
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Cylinder, Float, MeshDistortMaterial } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { Building, Calendar, MapPin, TrendingUp } from "lucide-react"

function ExperienceCylinder() {
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
          color="#10b981"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0}
          metalness={0.8}
        />
      </Cylinder>
    </Float>
  )
}

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Code Garage Tech",
      position: "Full Stack Software Engineer",
      duration: "2023 - Present",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "🚀 Built high-impact web applications using MERN, MEVN, and Java SpringBoot",
        "⚡ Optimized server performance resulting in 40% faster response times",
        "🎯 Developed scalable APIs serving 10,000+ daily active users",
        "💡 Led feature development from conception to deployment",
        "🔧 Implemented Ruby on Rails solutions for complex business logic",
      ],
      gradient: "from-emerald-400 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
    },
    {
      company: "Previous Experience",
      position: "Software Developer",
      duration: "2022 - 2023",
      location: "Hybrid",
      type: "Full-time",
      achievements: [
        "🌟 Contributed to multiple client projects using modern tech stack",
        "📱 Developed responsive web applications with React and Vue.js",
        "🗄️ Designed and implemented database schemas for PostgreSQL and MongoDB",
        "🔄 Collaborated with cross-functional teams in Agile environment",
        "📊 Improved application performance through code optimization",
      ],
      gradient: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-500/10 to-indigo-500/10",
    },
  ]

  return (
    <section id="experience" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden bg-gray-800">
      {/* 3D Background - Hidden on mobile */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 opacity-20 hidden lg:block">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <ExperienceCylinder />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            EXPERIENCE
          </motion.h2>
          <div className="w-24 sm:w-32 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full mb-8 sm:mb-12"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            Professional journey building innovative solutions and driving technological excellence
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -15 : 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateX: 2,
                boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
              }}
              className={`backdrop-blur-xl bg-gradient-to-br ${exp.bgGradient} bg-gray-800/50 border border-gray-700/50 rounded-3xl p-6 sm:p-8 shadow-2xl hover:border-gray-600/50 transition-all duration-500`}
            >
              <div className={`w-full h-2 bg-gradient-to-r ${exp.gradient} rounded-full mb-4 sm:mb-6`}></div>

              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Company Info */}
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-3 sm:space-y-4"
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className={`p-2 sm:p-3 rounded-2xl bg-gradient-to-r ${exp.gradient}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Building className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.company}</h3>
                        <p className="text-base sm:text-lg text-gray-300">{exp.position}</p>
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center space-x-2 text-gray-400 text-sm sm:text-base">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm sm:text-base">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm sm:text-base">
                        <TrendingUp className="w-4 h-4" />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Achievements */}
                <div className="lg:col-span-2">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
                    Key Achievements & Responsibilities
                  </h4>
                  <div className="space-y-3 sm:space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.3 + achIndex * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-700/30 transition-all duration-300"
                      >
                        <motion.div
                          className={`w-2 h-2 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 flex-shrink-0`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: achIndex * 0.2 }}
                        />
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
