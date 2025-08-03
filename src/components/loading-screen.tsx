
import { motion } from "framer-motion"
import { Code, Zap } from "lucide-react"

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          className="relative mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="w-20 h-20 border-4 border-purple-500/30 rounded-full"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            <Code className="w-8 h-8 text-purple-400" />
          </motion.div>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-white mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          Faizan Ahmad
        </motion.h2>

        <motion.p
          className="text-gray-400 flex items-center justify-center gap-2"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <Zap className="w-4 h-4" />
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  )
}
