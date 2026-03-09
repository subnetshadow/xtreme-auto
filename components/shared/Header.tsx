'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Packages & Pricing', href: '#pricing' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Service Areas', href: '#areas' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
  { label: 'Legal', href: '#legal' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-xad-black/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="4" fill="#3CB0F5"/>
              <path d="M8 8L16 16M16 16L24 8M16 16L8 24M16 16L24 24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <span className="hidden sm:block text-white font-bold tracking-wider text-sm uppercase">
              Xtreme Auto Detailing
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xad-muted text-sm font-medium hover:text-white transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:5877072736"
              className="text-xad-muted text-sm font-medium hover:text-xad-gold transition-colors duration-150 mr-2"
            >
              (587) 707-2736
            </a>
            <a
              href="#quote"
              className="border border-white/30 text-white text-sm font-semibold px-4 py-2 rounded-sm hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
            >
              Get an Instant Quote
            </a>
            <a
              href="#book"
              className="bg-xad-gold text-xad-black text-sm font-bold px-4 py-2 rounded-sm hover:bg-xad-warm transition-colors duration-200"
            >
              Book Your Detail
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-xad-dark border-t border-white/5">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xad-muted text-sm font-medium py-2 hover:text-white transition-colors duration-150"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10 mt-2">
              <a
                href="tel:5877072736"
                className="text-xad-gold text-sm font-medium text-center py-2"
              >
                (587) 707-2736
              </a>
              <a
                href="#quote"
                className="border border-white/30 text-white text-sm font-semibold px-4 py-2.5 rounded-sm hover:border-xad-gold hover:text-xad-gold transition-colors duration-200 text-center"
              >
                Get an Instant Quote
              </a>
              <a
                href="#book"
                className="bg-xad-gold text-xad-black text-sm font-bold px-4 py-2.5 rounded-sm hover:bg-xad-warm transition-colors duration-200 text-center"
              >
                Book Your Detail
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
