'use client'

import { useState, useEffect } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [buildTime, setBuildTime] = useState('')
  const [buildHash, setBuildHash] = useState('')

  useEffect(() => {
    // Generate build time and hash on mount
    const now = new Date()
    setBuildTime(now.toISOString())
    setBuildHash(Math.random().toString(36).substring(2, 8).toUpperCase())
  }, [])

  const techStack = [
    'Next.js 14',
    'TypeScript',
    'TailwindCSS',
    'React 18',
    'Node.js'
  ]

  const licenses = [
    'MIT Licensed',
    'Open Source',
    'GPLv3 Compatible',
    'Apache 2.0 Friendly'
  ]

  return (
    <footer className="relative bg-bg-dark/50 backdrop-blur-md border-t border-white/10">
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="neural-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="currentColor" />
              <line x1="5" y1="5" x2="15" y2="5" stroke="currentColor" strokeWidth="0.5" />
              <line x1="5" y1="5" x2="5" y2="15" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-8 py-12 relative z-10">
        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright & License */}
            <div className="text-center md:text-left">
              <p className="text-text-gray-300 font-mono text-sm">
                © {currentYear} Saroj Poudel. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                {licenses.map((license, index) => (
                  <span
                    key={index}
                    className="text-xs text-primary-cyan font-mono bg-primary-blue/10 px-2 py-1 rounded"
                  >
                    {license}
                  </span>
                ))}
              </div>
            </div>

            {/* Build Info */}
            <div className="text-center md:text-right">
              <p className="text-text-gray-400 font-mono text-xs">
                Build: {buildHash} • {}
              </p>
              <p className="text-text-gray-400 font-mono text-xs mt-1">
                Powered by Neural Networks & Coffee ☕
              </p>
            </div>
          </div>
        </div>

        {/* Easter Egg - Hidden Developer Console */}
        <div className="mt-4 text-center">
          <p className="text-text-gray-500 font-mono text-xs">
            console.log("Thanks for visiting! 🚀 Built with 💙 and lots of debugging")
          </p>
        </div>
      </div>
    </footer>
  )
}
