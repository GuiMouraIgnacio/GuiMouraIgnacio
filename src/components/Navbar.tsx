import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Games', href: '#games' },
  { label: 'Art', href: '#art' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.4 },
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'bg-bg/90 border-border' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-mono text-sm text-text-muted hover:text-accent transition-colors duration-200"
          >
            gmi<span className="text-accent">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-accent'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-text-muted hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-surface border-b border-border md:hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
