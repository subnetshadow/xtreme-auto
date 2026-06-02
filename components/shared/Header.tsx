'use client'

import { useState } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Before & After', href: '/#beforeafter' },
  { label: 'Service Areas', href: '/#areas' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/#book' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-xad-black/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo-horizontal.png"
              alt="Xtreme Auto Detailing YYC"
              width={1200}
              height={557}
              priority
              className="h-9 md:h-11 w-auto object-contain"
            />
          </a>

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
              href="/#book"
              className="bg-xad-gold text-xad-black text-sm font-bold px-4 py-2 rounded-sm hover:bg-xad-warm transition-colors duration-200"
            >
              Book Now
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
              <a href="tel:5877072736" className="text-xad-gold text-sm font-medium text-center py-2">
                (587) 707-2736
              </a>
              <a
                href="/#book"
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
