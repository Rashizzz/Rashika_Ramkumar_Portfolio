import { Github, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-border bg-bg">
      <div className="section flex flex-col items-center gap-8 py-14 text-center">
        <div>
          <p className="text-xl font-bold text-white">
            Rashika<span className="gradient-text">.</span>
          </p>
          <p className="mt-1 text-sm text-gray-500">Backend Developer</p>
        </div>

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

        <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-border to-transparent" />

        <p className="text-xs text-gray-500">
          © 2026 Rashika Ramkumar. All Rights Reserved.
        </p>

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="icon-btn absolute right-6 top-8 sm:right-8"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  )
}
