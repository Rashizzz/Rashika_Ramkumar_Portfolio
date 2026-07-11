import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view to highlight the
 * matching navbar link, and reports whether the page has been
 * scrolled past a threshold (used to switch the navbar style).
 */
export default function useActiveSection(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0])
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top - offset <= 0) {
          current = id
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return { activeId, scrolled }
}
