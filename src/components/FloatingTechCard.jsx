import { motion } from 'framer-motion'

/**
 * A small glassmorphism chip that floats near the hero profile image,
 * labelling a technology Rashika works with.
 */
export default function FloatingTechCard({ icon, label, className = '', delay = 0, duration = 6 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration, repeat: Infinity, ease: 'easeInOut', delay },
      }}
      className={`glass-card absolute flex items-center gap-2 px-4 py-2.5 shadow-glow ${className}`}
    >
      <span className="text-lg leading-none">{icon}</span>
      <span className="text-sm font-medium text-gray-100">{label}</span>
    </motion.div>
  )
}
