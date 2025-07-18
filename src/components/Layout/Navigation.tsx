'use client'

import { useState } from 'react'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'skills', label: 'Neural.Net', href: '#skills' },
    // { id: 'education', label: 'Education', href: '#education' },
    { id: 'certifications', label: 'Certificates', href: '#certifications' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Connect', href: '#contact' },
  ]

  const handleTerminalToggle = () => {
    const terminalSection = document.getElementById('terminal')
    if (terminalSection) {
      terminalSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(href.substring(1))
    }
  }

  return (
    <nav className="container mx-auto px-8 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-2xl font-bold gradient-text animate-logo-glow font-mono"
          onClick={(e) => smoothScroll(e, '#home')}
        >
          AI.ENGINEER
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={(e) => smoothScroll(e, item.href)}
                className={`px-4 py-2 rounded-lg font-medium font-mono text-sm transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-primary-cyan bg-bg-glass shadow-glow'
                    : 'text-text-gray-300 hover:text-primary-cyan hover:bg-bg-glass hover:shadow-glow'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Terminal Toggle */}
        <button
          onClick={handleTerminalToggle}
          className="glass px-4 py-2 rounded-lg text-primary-cyan font-mono text-sm hover:bg-primary-cyan/10 hover:shadow-glow transition-all duration-300"
        >
          $ Terminal
        </button>
      </div>
    </nav>
  )
}
