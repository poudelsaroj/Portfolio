'use client'

import { useState, useEffect } from 'react'
import Navigation from './Navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-bg-dark/98 backdrop-blur-xl shadow-lg border-b border-border-glass' 
          : 'bg-bg-dark/95 backdrop-blur-xl border-b border-border-glass'
      }`}
    >
      <Navigation />
    </header>
  )
}
