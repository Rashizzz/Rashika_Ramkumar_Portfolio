import { motion } from 'framer-motion'

/**
 * Consistent section eyebrow + title + subtitle used across sections.
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex max-w-2xl flex-col gap-4 ${alignment}`}
    >
      {eyebrow && <span className="badge-pill">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="text-base text-gray-400 sm:text-lg">{subtitle}</p>}
    </motion.div>
  )
}
