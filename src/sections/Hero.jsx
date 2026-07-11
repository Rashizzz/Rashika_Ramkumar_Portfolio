import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Github, Linkedin, Download, Award } from 'lucide-react'
import FloatingTechCard from '../components/FloatingTechCard'
import profileImage from "../assets/profile.jpg";

const TECH_CARDS = [
  { icon: '☕', label: 'Java', className: 'top-4 -left-6 sm:-left-10', delay: 0.2, duration: 6 },
  { icon: '🟢', label: 'Node.js', className: 'bottom-24 -left-8 sm:-left-14', delay: 0.8, duration: 6.5 },
  { icon: '🍃', label: 'MongoDB', className: 'bottom-6 right-2 sm:right-6', delay: 1.1, duration: 7.5 },
  { icon: '⚛️', label: 'React', className: 'top-4 left-1/2 -translate-x-1/2 hidden sm:flex', delay: 1.4, duration: 6 },
]

export default function Hero() {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 60, damping: 20 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig)

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-bg pt-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="section grid items-center gap-16 py-0 lg:grid-cols-2">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-start gap-6"
        >
          <span className="badge-pill">Backend Developer</span>

          <h1 className="text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="gradient-text">Rashika Ramkumar</span>
            <br />
            <span className="mt-2 block text-2xl font-bold text-gray-200 sm:text-3xl lg:text-4xl">
              I build scalable backend systems <br className="hidden sm:block" />
              and data-driven web applications.
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Adaptive and enthusiastic learner specializing in Backend Development, MERN
            Stack, and Data Analytics. Passionate about creating modern web applications
            and insightful business dashboards.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
  href="/Rashika-Ramkumar.pdf"
  download
  className="btn-neon"
>
  <Download size={16} />
  <span>Download Resume</span>
</a>
            <button onClick={() => scrollTo('certifications')} className="btn-outline">
              <Award size={16} /> View Certifications
            </button>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="icon-btn"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="icon-btn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto flex h-[420px] w-[320px] items-center justify-center sm:h-[480px] sm:w-[400px]"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Glowing ring backdrop */}
          <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-tr from-primary via-transparent to-accent opacity-30 blur-2xl" />
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 blur-3xl sm:h-80 sm:w-80" />

          {/* Profile image placeholder with parallax tilt */}
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative flex h-64 w-64 items-center justify-center rounded-full border border-border bg-gradient-to-br from-card to-bg shadow-glow-lg sm:h-80 sm:w-80"
          >
            <div className="flex h-[92%] w-[92%] items-center justify-center rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 text-6xl font-bold text-white/90">
              <img
    src={profileImage}
    alt="Rashika Ramkumar"
    className="h-80 w-80 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
/>
            </div>
          </motion.div>

          {/* Floating tech cards */}
          {TECH_CARDS.map((card) => (
            <FloatingTechCard key={card.label} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
