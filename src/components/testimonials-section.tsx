
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Icosahedron, Float, MeshDistortMaterial } from "@react-three/drei"
import { Suspense, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

function TestimonialsIcosahedron() {
  const icosahedronRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      icosahedronRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={icosahedronRef} args={[1]} position={[0, 0, -2]}>
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0}
          metalness={0.8}
        />
      </Icosahedron>
    </Float>
  )
}

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Michael Chen",
      position: "CTO, InnovateLab",
      company: "InnovateLab",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "Working with faizan was a game-changer for our startup. He built our entire backend infrastructure using modern technologies including NestJS and created a beautiful React frontend. His code quality and communication skills are outstanding.",
      project: "SaaS Application",
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager, DigitalFlow",
      company: "DigitalFlow",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "faizan's ability to understand complex requirements and translate them into elegant solutions is remarkable. He delivered our project on time and within budget using React, Node.js, and NestJS. I highly recommend him for any full-stack development needs.",
      project: "Task Management System",
    },
    {
      name: "David Thompson",
      position: "Founder, PropTech Solutions",
      company: "PropTech Solutions",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "The real estate platform faizan built for us has transformed our business. His expertise in modern web technologies including React, NestJS, and database optimization resulted in a scalable solution that handles thousands of users seamlessly.",
      project: "Real Estate Portal",
    },
    {
      name: "Lisa Wang",
      position: "Director of Engineering, CloudTech",
      company: "CloudTech",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "faizan's technical skills are impressive, but what sets him apart is his problem-solving approach and dedication to delivering quality work. He's a reliable partner for any software development project using React, Node.js, and NestJS.",
      project: "API Development",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gray-900 overflow-hidden">
      {/* 3D Background - Hidden on mobile */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 opacity-20 hidden lg:block">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <TestimonialsIcosahedron />
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
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-cyan-900/30 text-cyan-300 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-cyan-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Client Testimonials
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            What Clients Say
          </motion.h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me on their projects.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          key={currentTestimonial}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-8 sm:mb-12"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
            {/* Quote Icon */}
            <motion.div
              className="flex justify-center mb-6"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            {/* Testimonial Text */}
            <motion.blockquote
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 text-center leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              "{testimonials[currentTestimonial].testimonial}"
            </motion.blockquote>

            {/* Rating */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                <motion.div
                  key={index}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                >
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </motion.div>

            {/* Client Info */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative">
                <motion.img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-cyan-500/30"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800"></div>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-lg sm:text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h4>
                <p className="text-cyan-400 font-semibold">{testimonials[currentTestimonial].position}</p>
                <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].company}</p>
                <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-cyan-300 text-sm font-medium">{testimonials[currentTestimonial].project}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8 sm:mb-12">
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-white hover:border-cyan-500/50 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-cyan-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-white hover:border-cyan-500/50 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setCurrentTestimonial(index)}
              className={`cursor-pointer p-4 sm:p-6 bg-gray-800/30 backdrop-blur-sm border rounded-2xl transition-all duration-300 ${
                index === currentTestimonial
                  ? "border-cyan-500/50 bg-cyan-500/10"
                  : "border-gray-700/50 hover:border-gray-600/50"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="text-white font-semibold text-sm sm:text-base truncate">{testimonial.name}</h5>
                  <p className="text-gray-400 text-xs sm:text-sm truncate">{testimonial.position}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">{testimonial.testimonial}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
