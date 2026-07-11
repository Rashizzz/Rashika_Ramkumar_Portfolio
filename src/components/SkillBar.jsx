import { motion } from 'framer-motion'

/**
 * A single animated skill progress bar. Fills to its target
 * percentage the first time it scrolls into view.
 */
export default function SkillBar({ name, level, delay = 0 }) {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-gray-200">{name}</span>
        <span className="font-semibold text-accent">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent shadow-glow"
        />
      </div>
    </div>
  )
}
