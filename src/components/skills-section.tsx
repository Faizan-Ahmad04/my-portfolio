
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Dodecahedron, Float, MeshDistortMaterial } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function SkillsGeometry() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Dodecahedron args={[1]} position={[0, 0, 0]}>
          <MeshDistortMaterial color="#8b5cf6" distort={0.4} speed={1.5} roughness={0} metalness={0.8} />
        </Dodecahedron>
      </Float>
    </group>
  )
}

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating beautiful, responsive, and interactive user interfaces",
      skills: [
        { name: "React.js", icon: "⚛️", color: "from-blue-400 to-cyan-500" },
        { name: "Vue.js", icon: "💚", color: "from-green-400 to-emerald-500" },
        { name: "JavaScript", icon: "🟨", color: "from-yellow-400 to-orange-500" },
        { name: "TypeScript", icon: "🔷", color: "from-blue-500 to-indigo-600" },
        { name: "Next.js", icon: "⚫", color: "from-gray-700 to-gray-900" },
        { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400 to-blue-500" },
        { name: "HTML", icon: "🧡", color: "from-orange-400 to-red-500" },
        { name: "CSS", icon: "💙", color: "from-blue-400 to-purple-500" },
      ],
      gradient: "from-purple-500 to-indigo-600",
      bgColor: "bg-gray-800/50",
      icon: "🎨",
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs",
      skills: [
        { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-500" },
        { name: "Express.js", icon: "🚀", color: "from-gray-400 to-slate-500" },
        { name: "Java", icon: "☕", color: "from-red-400 to-orange-500" },
        { name: "SpringBoot", icon: "🍃", color: "from-green-500 to-teal-500" },
        { name: "Ruby on Rails", icon: "💎", color: "from-red-500 to-pink-500" },
        { name: "REST APIs", icon: "🔗", color: "from-purple-400 to-indigo-500" },
        { name: "GraphQL", icon: "🔮", color: "from-pink-400 to-purple-500" },
        { name: "Microservices", icon: "🏗️", color: "from-indigo-400 to-blue-500" },
      ],
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-gray-800/50",
      icon: "⚙️",
    },
    {
      title: "Database & Storage",
      description: "Managing data with efficient database solutions",
      skills: [
        { name: "PostgreSQL", icon: "🐘", color: "from-blue-400 to-indigo-500" },
        { name: "MongoDB", icon: "🍃", color: "from-green-400 to-teal-500" },
        { name: "MySQL", icon: "🐬", color: "from-orange-400 to-yellow-500" },
        { name: "Prisma", icon: "🔺", color: "from-indigo-400 to-purple-500" },
      ],
      gradient: "from-cyan-500 to-blue-600",
      bgColor: "bg-gray-800/50",
      icon: "🗄️",
    },
    {
      title: "Tools & Technologies",
      description: "Development tools and modern technologies",
      skills: [
        { name: "Git", icon: "📝", color: "from-orange-400 to-red-500" },
        { name: "Docker", icon: "🐳", color: "from-blue-400 to-cyan-500" },
        { name: "VS Code", icon: "💙", color: "from-blue-400 to-indigo-500" },
        { name: "Postman", icon: "📮", color: "from-orange-400 to-red-500" },
      ],
      gradient: "from-pink-500 to-rose-600",
      bgColor: "bg-gray-800/50",
      icon: "🛠️",
    },
  ]

  return (
    <section id="skills" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gray-900 overflow-hidden">
      {/* 3D Background - Hidden on mobile */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 opacity-20 hidden lg:block">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <SkillsGeometry />
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
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-purple-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            My Skills
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            Technical Expertise
          </motion.h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build exceptional full-stack applications and deliver outstanding
            results for both corporate and freelance projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
              }}
              className={`${category.bgColor} rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-700/50 backdrop-blur-sm`}
            >
              {/* Header */}
              <div className="flex items-center mb-4 sm:mb-6">
                <motion.div
                  className={`w-3 sm:w-4 h-8 sm:h-12 bg-gradient-to-b ${category.gradient} rounded-full mr-3 sm:mr-4`}
                  animate={{ scaleY: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: categoryIndex * 0.5 }}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <motion.span
                      className="text-2xl sm:text-3xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: categoryIndex * 0.5 }}
                    >
                      {category.icon}
                    </motion.span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">{category.description}</p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    }}
                    className="group"
                  >
                    <div className="bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-3 sm:p-4 hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col items-center justify-center text-center shadow-sm">
                      <motion.div
                        className="text-2xl sm:text-3xl mb-2 sm:mb-3"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: skillIndex * 0.2,
                        }}
                      >
                        {skill.icon}
                      </motion.div>

                      <h4 className="text-white font-semibold text-xs sm:text-sm group-hover:text-purple-400 transition-colors">
                        {skill.name}
                      </h4>

                      <motion.div
                        className={`w-full h-1 bg-gradient-to-r ${skill.color} rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
