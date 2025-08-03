
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Octahedron, Float, MeshDistortMaterial } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { Calendar, Clock, ArrowRight, Tag, User } from "lucide-react"

function BlogOctahedron() {
  const octahedronRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (octahedronRef.current) {
      octahedronRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      octahedronRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Octahedron ref={octahedronRef} args={[1]} position={[0, 0, -2]}>
        <MeshDistortMaterial
          color="#f97316"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0}
          metalness={0.8}
        />
      </Octahedron>
    </Float>
  )
}

export default function BlogSection() {
  const blogPosts = [
    {
      title: "Building Scalable Web Applications with MERN Stack",
      excerpt:
        "Learn how to create robust and scalable web applications using MongoDB, Express.js, React, and Node.js. This comprehensive guide covers best practices and optimization techniques.",
      image: "/placeholder.svg?height=250&width=400",
      category: "Web Development",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Modern JavaScript: ES6+ Features Every Developer Should Know",
      excerpt:
        "Explore the latest JavaScript features that can improve your code quality and development efficiency. From arrow functions to async/await and beyond.",
      image: "/placeholder.svg?height=250&width=400",
      category: "JavaScript",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      tags: ["JavaScript", "ES6", "Programming", "Frontend"],
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      title: "API Design Best Practices for RESTful Services",
      excerpt:
        "Design better APIs with these proven best practices. Learn about proper HTTP methods, status codes, authentication, and documentation strategies.",
      image: "/placeholder.svg?height=250&width=400",
      category: "Backend",
      readTime: "10 min read",
      date: "Dec 5, 2024",
      tags: ["API", "REST", "Backend", "Design"],
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Database Optimization Techniques for Better Performance",
      excerpt:
        "Improve your database performance with indexing strategies, query optimization, and proper schema design. Real-world examples included.",
      image: "/placeholder.svg?height=250&width=400",
      category: "Database",
      readTime: "12 min read",
      date: "Nov 28, 2024",
      tags: ["Database", "Performance", "SQL", "Optimization"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "React Performance Optimization: Tips and Tricks",
      excerpt:
        "Boost your React application's performance with these optimization techniques. Learn about memoization, code splitting, and efficient rendering.",
      image: "/placeholder.svg?height=250&width=400",
      category: "React",
      readTime: "9 min read",
      date: "Nov 20, 2024",
      tags: ["React", "Performance", "Optimization", "Frontend"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Getting Started with TypeScript in Node.js Projects",
      excerpt:
        "Add type safety to your Node.js applications with TypeScript. This guide covers setup, configuration, and best practices for backend development.",
      image: "/placeholder.svg?height=250&width=400",
      category: "TypeScript",
      readTime: "7 min read",
      date: "Nov 15, 2024",
      tags: ["TypeScript", "Node.js", "Backend", "JavaScript"],
      gradient: "from-indigo-500 to-purple-600",
    },
  ]

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gray-800 overflow-hidden">
      {/* 3D Background - Hidden on mobile */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 opacity-20 hidden lg:block">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <BlogOctahedron />
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
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-orange-900/30 text-orange-300 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-orange-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            Latest Blog Posts
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            Tech Insights & Tutorials
          </motion.h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge and insights about modern web development, best practices, and the latest technologies in
            the software development world.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative overflow-hidden">
              <motion.img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-64 sm:h-80 lg:h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute top-4 left-4">
                <div
                  className={`px-3 py-1 bg-gradient-to-r ${blogPosts[0].gradient} rounded-full text-white text-xs font-semibold`}
                >
                  Featured
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {blogPosts[0].date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 text-sm font-semibold">{blogPosts[0].category}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                {blogPosts[0].title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {blogPosts[0].tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors self-start"
              >
                Read Full Article
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
              }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl hover:border-gray-600/50 transition-all duration-500"
            >
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 sm:h-56 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div
                    className={`px-3 py-1 bg-gradient-to-r ${post.gradient} rounded-full text-white text-xs font-semibold`}
                  >
                    {post.category}
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-xs sm:text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors text-sm"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Posts Button */}
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
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg mx-auto text-sm sm:text-base"
          >
            <User className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>View All Blog Posts</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
