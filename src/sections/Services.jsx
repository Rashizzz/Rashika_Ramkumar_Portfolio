import { Figma, Code2, BarChart4 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'

const SERVICES = [
  {
    icon: Figma,
    title: 'UI/UX Design',
    description:
      'Design clean and intuitive user interfaces using Figma while focusing on user experience and modern layouts.',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    description:
      'Develop responsive MERN Stack web applications with scalable backend APIs and modern frontend experiences.',
  },
  {
    icon: BarChart4,
    title: 'Data Analytics',
    description:
      'Build interactive dashboards and visualize business insights using Power BI, SQL, and Excel.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <SectionHeading
        eyebrow="What I Do"
        title="Services I offer"
        subtitle="A blend of design, engineering, and data thinking that turns ideas into working products."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </section>
  )
}
