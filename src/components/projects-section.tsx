"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Box, Float, MeshDistortMaterial } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { ExternalLink, Github, Code, Database, Globe, Server } from "lucide-react"

function ProjectsBox() {
  const boxRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (boxRef.current) {
      boxRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.2
      boxRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Box ref={boxRef} args={[1.5, 1.5, 1.5]} position={[0, 0, -2]}>
        <MeshDistortMaterial
          color="#10b981"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
          metalness={0.8}
        />
      </Box>
    </Float>
  )
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "WayCab - Complete Ride Booking Ecosystem",
      description:
        "Full-stack ride booking platform where I developed the complete admin panel (frontend & backend), created comprehensive APIs, and built the entire backend infrastructure for the mobile application.",
      image: "/placeholder.svg?height=300&width=400&text=WayCab+Ecosystem",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Redis",
        "REST APIs",
        "Admin Dashboard",
      ],
      category: "Full-Stack Platform",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-600",
      liveUrl: "https://play.google.com/store/apps/details?id=com.waycab.demo",
      githubUrl: "#",
      features: [
        "Complete Admin Panel (Frontend & Backend)",
        "RESTful API Development for Mobile App",
        "Real-time Tracking with Socket.io",
        "Backend Infrastructure & Database Design",
        "User Management & Analytics Dashboard",
        "Payment Integration & Fleet Management",
      ],
    },
    {
      title: "jigsawML - AI Monitoring",
      description:
        "Intelligent monitoring platform with machine learning capabilities, real-time data visualization, and predictive analytics for business intelligence.",
      image: "/placeholder.svg?height=300&width=400&text=jigsawML+Dashboard",
      technologies: ["React.js", "Python", "TensorFlow", "D3.js", "Docker", "AWS"],
      category: "Web Application",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-600",
      liveUrl: "https://jigsawml.com/",
      githubUrl: "#",
    },
    {
      title: "Chatwoot Enhanced",
      description:
        "Advanced customer support system with AI-powered features, automated workflows, and comprehensive admin controls for enterprise clients.",
      image: "/placeholder.svg?height=300&width=400&text=Chatwoot+Interface",
      technologies: ["Ruby on Rails", "Vue.js", "PostgreSQL", "Redis", "WebRTC", "Docker"],
      category: "Web Application",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce solution with payment integration, inventory management, analytics dashboard, and multi-vendor support.",
      image: "/placeholder.svg?height=300&width=400&text=E-Commerce+Platform",
      technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Tailwind", "TypeScript"],
      category: "Web Application",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management application with real-time updates, team collaboration, project tracking, and advanced reporting features.",
      image: "/placeholder.svg?height=300&width=400&text=Task+Manager",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Node.js"],
      category: "Web Application",
      icon: <Server className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-600",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Real-time weather data visualization with predictive modeling, historical analysis, interactive maps, and API integration.",
      image: "/placeholder.svg?height=300&width=400&text=Weather+Dashboard",
      technologies: ["React.js", "Chart.js", "OpenWeather API", "Node.js", "AWS", "MongoDB"],
      category: "Web Application",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-teal-500 to-green-600",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-slate-800 overflow-hidden">
      {/* 3D Background - Hidden on mobile */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 opacity-20 hidden lg:block">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <ProjectsBox />
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
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-950/50 text-emerald-300 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-emerald-500/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            My Projects
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            Featured Projects
          </motion.h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto">
            Showcasing my expertise in full-stack development through innovative projects that solve real-world problems
            and deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                boxShadow: "0 30px 60px rgba(16, 185, 129, 0.2)",
              }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl hover:border-emerald-500/30 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div
                    className={`flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-white text-xs font-semibold backdrop-blur-sm`}
                  >
                    {project.icon}
                    {project.category}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.liveUrl !== "#" && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-emerald-500/30 transition-colors border border-white/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-emerald-500/30 transition-colors border border-white/20"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3
                  className="text-xl sm:text-2xl font-bold text-white mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.5 }}
                      viewport={{ once: true }}
                      className="px-2 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg text-xs font-medium hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/30 transition-colors duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://github.com/Faizan-Ahmad04", "_blank")}
            className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg mx-auto text-sm sm:text-base"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>View All Projects on GitHub</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
