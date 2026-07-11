import { motion } from 'framer-motion'

export default function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      className="glass-card group relative overflow-hidden p-8 transition-all duration-300 hover:border-primary/50"
    >
      {/* Ambient glow on hover */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent ring-1 ring-primary/30 transition-transform duration-300 group-hover:scale-110">
        <Icon size={26} />
      </div>

      <h3 className="relative mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-gray-400">{description}</p>
    </motion.div>
  )
}
