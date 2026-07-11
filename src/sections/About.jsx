import { motion } from 'framer-motion'
import {
  GraduationCap,
  Server,
  BarChart3,
  Layers,
  Lightbulb,
  BookOpen,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const HIGHLIGHTS = [
  { icon: GraduationCap, label: 'Final Year Student' },
  { icon: Server, label: 'Backend Developer' },
  { icon: BarChart3, label: 'Data Analytics Enthusiast' },
  { icon: Layers, label: 'MERN Stack Learner' },
  { icon: Lightbulb, label: 'Problem Solver' },
  { icon: BookOpen, label: 'Continuous Learner' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading eyebrow="About Me" title="Getting to know me" />

      <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-14">
        {/* Glass content card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-10 lg:col-span-3"
        >
          <div className="space-y-5 text-base leading-relaxed text-gray-300">
            <p>
              Final-year B.Tech Information Technology undergraduate 
              with a strong foundation in Full Stack Development (MERN Stack) and Java.
            </p>
            <p>
              Specialized in <span className="text-white"> building responsive web applications </span> and transforming business data into 
              meaningful insights through interactive dashboards.
            </p>
            <p>
              Continuously enhancing technical expertise through solving complex problems,
              developing scalable applications, and practical learning while focusing on writing 
              clean, efficient, and maintainable code. 
              
            </p>
            <p>
              I believe in continuous learning, teamwork, innovation, and creating
              impactful digital experiences.
            </p>
          </div>
        </motion.div>

        {/* Highlight chips grid */}
        <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-1">
          {HIGHLIGHTS.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ x: 4 }}
              className="glass-card flex items-center gap-3 px-5 py-4 transition-colors duration-300 hover:border-primary/50"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-accent">
                <Icon size={18} />
              </span>
              <span className="text-sm font-medium text-gray-200">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
