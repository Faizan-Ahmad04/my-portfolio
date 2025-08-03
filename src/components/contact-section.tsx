import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Sphere, Float, MeshDistortMaterial } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Briefcase,
  Code,
  Sparkles,
} from "lucide-react"

function ContactSphere() {
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1.5, 64, 64]} position={[0, 0, -2]}>
        <MeshDistortMaterial
          color="#a855f7"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  )
}

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gray-900 overflow-hidden">
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
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Enhanced floating particles */}
        <div className="absolute inset-0">
          {[...Array(35)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0, 1, 0],
                scale: [0, 3, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 6,
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
            backgroundSize: "75px 75px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "75px 75px"],
          }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* 3D Background */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 opacity-20">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} color="#a855f7" />
            <ContactSphere />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
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
            Get In Touch
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
            Do you have Project Idea?
          </motion.h2>

          <motion.h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-6 sm:mb-8">
            Let's discuss your project!
          </motion.h3>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8">
            Ready to bring your vision to life? Whether you need a full-stack application, want to enhance an existing
            project, or looking for technical consulting, I'm here to help you succeed.
          </p>

          {/* Availability Status */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <motion.div
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800/50 text-green-400 rounded-full text-xs sm:text-sm font-semibold border border-gray-700/50"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(34, 197, 94, 0)",
                  "0 0 20px rgba(34, 197, 94, 0.3)",
                  "0 0 0 rgba(34, 197, 94, 0)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="hidden sm:inline">Available for</span> Freelance Projects
            </motion.div>
            <motion.div
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800/50 text-purple-400 rounded-full text-xs sm:text-sm font-semibold border border-gray-700/50"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(168, 85, 247, 0)",
                  "0 0 20px rgba(168, 85, 247, 0.3)",
                  "0 0 0 rgba(168, 85, 247, 0)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
            >
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
              Full Stack Engineer at Code Garage Tech
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form and Info */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-6 sm:p-8 shadow-2xl"
          >
            <motion.div
              className="w-full h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-6 sm:mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            />

            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <motion.div
                className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Send className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Send me a message</h3>
            </div>

            <form className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-gray-800/70 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Your Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-gray-800/70 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-300 text-sm font-semibold mb-2">Project Type</label>
                <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:bg-gray-800/70 transition-all duration-300">
                  <option value="" className="bg-gray-800">
                    Select project type
                  </option>
                  <option value="web-app" className="bg-gray-800">
                    Web Application
                  </option>
                  <option value="mobile-app" className="bg-gray-800">
                    Mobile Application
                  </option>
                  <option value="api" className="bg-gray-800">
                    API Development
                  </option>
                  <option value="consulting" className="bg-gray-800">
                    Consulting
                  </option>
                  <option value="other" className="bg-gray-800">
                    Other
                  </option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-300 text-sm font-semibold mb-2">Budget Range</label>
                <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:bg-gray-800/70 transition-all duration-300">
                  <option value="" className="bg-gray-800">
                    Select budget range
                  </option>
                  <option value="1k-5k" className="bg-gray-800">
                    $1,000 - $5,000
                  </option>
                  <option value="5k-10k" className="bg-gray-800">
                    $5,000 - $10,000
                  </option>
                  <option value="10k-25k" className="bg-gray-800">
                    $10,000 - $25,000
                  </option>
                  <option value="25k+" className="bg-gray-800">
                    $25,000+
                  </option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-300 text-sm font-semibold mb-2">Project Details</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-gray-800/70 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project requirements, timeline, and any specific technologies you'd like to use..."
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <Send className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                <span className="relative z-10 text-sm sm:text-base">Send Project Inquiry</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: "Email",
                  value: "faizanalvi093@gmail.com",
                  href: "mailto:faizanalvi093@gmail.com",
                  gradient: "from-red-400 to-pink-500",
                },
                {
                  icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: "Phone",
                  value: "+92 300 1234567",
                  href: "tel:+923001234567",
                  gradient: "from-green-400 to-emerald-500",
                },
                {
                  icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: "Location",
                  value: "Available Worldwide (Remote)",
                  href: "#",
                  gradient: "from-blue-400 to-cyan-500",
                },
                {
                  icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: "Response Time",
                  value: "Within 24 hours",
                  href: "#",
                  gradient: "from-purple-400 to-indigo-500",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl hover:border-purple-500/30 transition-all duration-300"
                >
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-r ${contact.gradient}`}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(168, 85, 247, 0.3)",
                        "0 0 40px rgba(168, 85, 247, 0.6)",
                        "0 0 20px rgba(168, 85, 247, 0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  >
                    {contact.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">{contact.title}</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{contact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6"
            >
              <h4 className="text-white font-bold text-base sm:text-lg mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {[
                  {
                    icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
                    href: "https://www.linkedin.com/in/faizan--ahmad/",
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
                    href: "https://github.com/Faizan-Ahmad04",
                    color: "from-gray-400 to-gray-600",
                  },
                  {
                    icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
                    href: "#",
                    color: "from-green-400 to-green-600",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Coding Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6"
            >
              <h4 className="text-white font-bold text-base sm:text-lg mb-4">Coding Profiles</h4>
              <div className="flex gap-4">
                {[
                  {
                    name: "LeetCode",
                    href: "https://leetcode.com/u/faizan004/",
                    color: "from-yellow-400 to-orange-500",
                    icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />,
                  },
                  {
                    name: "HackerRank",
                    href: "https://www.hackerrank.com/profile/faizan_Ahmad04",
                    color: "from-green-400 to-emerald-500",
                    icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />,
                  },
                ].map((profile, index) => (
                  <motion.a
                    key={index}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r ${profile.color} rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 text-xs sm:text-sm`}
                  >
                    {profile.icon}
                    <span>{profile.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </motion.div>
                <h4 className="text-white font-bold text-base sm:text-lg">Ready to start your project?</h4>
              </div>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                Let's turn your ideas into reality with cutting-edge technology and professional expertise!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-xs sm:text-sm"
                >
                  <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                  Schedule a Call
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-600/50 text-purple-400 rounded-xl font-semibold hover:bg-gray-800/30 transition-all duration-300 text-xs sm:text-sm"
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  Quick Chat
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-gray-800/50"
        >
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 Faizan Ahmad. Full Stack Software Engineer at Code Garage Tech & Available for Freelance Projects.
            Crafted with 💜 and cutting-edge technology.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
