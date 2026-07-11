import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import useActiveSection from '../hooks/useActiveSection'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { activeId, scrolled } = useActiveSection(NAV_LINKS.map((l) => l.id))

  const handleNavClick = (id) => {
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-6 transition-all duration-300 sm:px-8 ${
          scrolled
            ? 'border border-border bg-bg/80 py-2.5 shadow-soft backdrop-blur-xl'
            : 'border border-transparent bg-transparent py-2.5'
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('home')
          }}
          className="text-lg font-bold tracking-tight text-white"
        >
          Rashika<span className="gradient-text">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeId === link.id ? 'text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {activeId === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-primary/20 ring-1 ring-primary/50"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </nav>

        {/* Desktop socials */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="icon-btn h-9 w-9"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="icon-btn h-9 w-9"
          >
            <Linkedin size={16} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="icon-btn lg:hidden"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-3 rounded-2xl border border-border bg-bg/95 p-4 shadow-soft backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                    activeId === link.id
                      ? 'bg-primary/15 text-white'
                      : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="mt-3 flex items-center gap-3 border-t border-border px-4 pt-3">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="icon-btn h-9 w-9">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon-btn h-9 w-9">
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
