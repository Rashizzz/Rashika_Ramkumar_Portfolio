import { motion } from 'framer-motion'
import { Wrench, Code, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import SkillBar from '../components/SkillBar'

const SKILL_GROUPS = [
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Canva', level: 90 },
      { name: 'Figma', level: 80 },
      { name: 'SQL', level: 60 },
    ],
  },
  {
    title: 'Programming',
    icon: Code,
    skills: [
      { name: 'Java', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'HTML', level: 60 },
      { name: 'CSS', level: 60 },
      { name: 'SQL', level: 60 },
    ],
  },
  {
    title: 'Professional Skills',
    icon: Users,
    skills: [
      { name: 'Communication', level: 90 },
      { name: 'Teamwork', level: 90 },
      { name: 'Creativity', level: 80 },
      { name: 'Problem Solving', level: 80 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="Skills"
        title="What I bring to the table"
        subtitle="A growing toolkit across analytics, programming, and collaboration."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
            className="glass-card p-8"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-accent">
                <group.icon size={18} />
              </span>
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            </div>

            <div className="flex flex-col gap-5">
              {group.skills.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} delay={si * 0.08} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
