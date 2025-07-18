'use client'

import { useState, useEffect, useMemo } from 'react'
import AIVisualizer from './AIVisualizer'
import AIChatbot from '../Chat/AIChatbot'

export default function Hero() {
  const [nameText, setNameText] = useState('')
  const [roleText, setRoleText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const fullName = 'Saroj Poudel'
  const roles = useMemo(() => [
    'ai_engineer()',
    'learner()',
    'full_stack_engineer()',
    'problem_solver()',
    'innovator()',
    'ml_enthusiast()'
  ], [])

  // Typewriter effect for name (one time only)
  useEffect(() => {
    let timeout: NodeJS.Timeout
    let currentLength = 0
    
    const typeWriter = () => {
      if (currentLength < fullName.length) {
        currentLength++
        setNameText(fullName.slice(0, currentLength))
        timeout = setTimeout(typeWriter, 100)
      }
    }

    // Start typing immediately
    timeout = setTimeout(typeWriter, 100)
    
    return () => clearTimeout(timeout)
  }, []) // Empty dependency array to run only once

  // Typewriter effect for roles (cycling)
  useEffect(() => {
    let timeout: NodeJS.Timeout
    
    const typeRole = () => {
      const currentRole = roles[roleIndex]
      
      if (isTyping) {
        if (roleText.length < currentRole.length) {
          setRoleText(currentRole.slice(0, roleText.length + 1))
          timeout = setTimeout(typeRole, 80)
        } else {
          // Wait 2 seconds then start deleting
          timeout = setTimeout(() => {
            setIsTyping(false)
          }, 2000)
        }
      } else {
        if (roleText.length > 0) {
          setRoleText(roleText.slice(0, -1))
          timeout = setTimeout(typeRole, 50)
        } else {
          // Move to next role
          setRoleIndex((prev) => (prev + 1) % roles.length)
          setIsTyping(true)
        }
      }
    }

    timeout = setTimeout(typeRole, 100)
    return () => clearTimeout(timeout)
  }, [roleText, roleIndex, isTyping, roles])

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text leading-tight">
              <span className="inline-block min-h-[1.2em]">
                {nameText}
                {/* <span className="animate-pulse">|</span> */}
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-primary-cyan font-mono min-h-[1.5em] flex items-center">
              <span>
                {roleText}
                <span className="animate-pulse ml-1">|</span>
              </span>
            </div>
            
            <p className="text-lg text-text-gray-300 leading-relaxed max-w-2xl">
              Highly motivated Computer Engineering student at Pulchowk Engineering Campus with a strong foundation in AI, machine learning, and web development. Skilled in Python, JavaScript, React, Node.js, and modern deep learning frameworks. Building intelligent systems that learn, adapt, and transform how we interact with technology.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="btn-neural bg-gradient-to-r from-primary-blue to-primary-purple text-white px-8 py-3 rounded-xl font-semibold shadow-neural hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
              >
                Explore Projects
              </a>
              <a 
                href="#contact" 
                className="glass border border-primary-cyan text-primary-cyan px-8 py-3 rounded-xl font-semibold font-mono hover:bg-primary-cyan/10 hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
              >
                $ Connect
              </a>
              <AIChatbot />
            </div>
          </div>

          {/* AI Visualizer */}
          <div className="relative">
            <AIVisualizer />
          </div>
        </div>
      </div>
    </section>
  )
}
