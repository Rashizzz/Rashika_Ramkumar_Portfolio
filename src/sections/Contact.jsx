import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const EMAIL = 'rashikaramkumar2005@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: Wire this up to a backend/email service (e.g. EmailJS, Formspree)
    // to actually send the message. For now we simulate a successful send.
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        subtitle="I'm always open to internship opportunities, collaborations, and exciting projects in Backend Development, Data Analytics, and Full Stack Development."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-5">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-card flex flex-col justify-between gap-8 p-8 lg:col-span-2"
        >
          <div>
            <h3 className="text-lg font-semibold text-white">Reach out directly</h3>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-gray-200 transition-colors hover:border-primary/50 hover:text-white"
            >
              <Mail size={16} className="text-accent" />
              {EMAIL}
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-gray-400">Find me on</h3>
            <div className="flex items-center gap-3">
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
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass-card grid gap-5 p-8 lg:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-primary/60"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-primary/60"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={form.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className="rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-primary/60"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the opportunity or project..."
              className="resize-none rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-primary/60"
            />
          </div>

          <button type="submit" className="btn-neon mt-2 w-full sm:w-fit">
            {submitted ? <CheckCircle2 size={16} /> : <Send size={16} />}
            {submitted ? 'Message Sent' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
