import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const LOGO = 'https://storage.googleapis.com/gpt-engineer-file-uploads/DIpf0zM67tWvGVBUwNbwVLz8ZOy1/uploads/1767279237196-Logo_single_black_background.png'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'The Offer', href: '#offer' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'SOFIA', href: '#sofia' },
    { label: 'Sessions', href: '#sessions' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-botti-bg/95 backdrop-blur-md border-b border-botti-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={LOGO} alt="heybotti" className="h-8 w-8 rounded-md" />
          <span className="font-display font-bold text-xl text-white tracking-tight">
            hey<span className="gradient-text">botti</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-botti-muted hover:text-white transition-colors animated-underline"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-black bg-botti-teal hover:bg-botti-teal-dark transition-all duration-200 teal-glow-sm"
          >
            Start Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-botti-muted hover:text-white"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 border-b border-botti-border' : 'max-h-0'
        } bg-botti-bg/98 backdrop-blur-md`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-base text-botti-muted hover:text-white py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-center px-5 py-3 rounded-lg text-sm font-bold text-black bg-botti-teal"
          >
            Start Now
          </a>
        </div>
      </div>
    </header>
  )
}
