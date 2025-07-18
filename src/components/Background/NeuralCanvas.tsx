'use client'

import { useEffect, useRef } from 'react'

// Neural Particle Class
class NeuralParticle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  life: number
  maxLife: number
  pulseOffset: number
  canvas: HTMLCanvasElement
  options: any

  constructor(canvas: HTMLCanvasElement, options: any) {
    this.canvas = canvas
    this.options = options
    this.reset()
    this.life = Math.random() * 200 + 200
    this.maxLife = this.life
  }

  reset() {
    this.x = Math.random() * this.canvas.width
    this.y = Math.random() * this.canvas.height
    this.vx = (Math.random() - 0.5) * this.options.particleSpeed
    this.vy = (Math.random() - 0.5) * this.options.particleSpeed
    this.size = Math.random() * (this.options.particleSize.max - this.options.particleSize.min) + this.options.particleSize.min
    this.pulseOffset = Math.random() * Math.PI * 2
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.life--

    // Bounce off edges
    if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1
    if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1

    // Keep particles in bounds
    this.x = Math.max(0, Math.min(this.canvas.width, this.x))
    this.y = Math.max(0, Math.min(this.canvas.height, this.y))

    // Reset particle when life is over
    if (this.life <= 0) {
      this.reset()
      this.life = this.maxLife
    }

    // Add slight velocity damping for more realistic movement
    this.vx *= 0.999
    this.vy *= 0.999
  }

  draw(ctx: CanvasRenderingContext2D) {
    const alpha = this.life / this.maxLife
    const pulse = Math.sin(Date.now() * 0.002 + this.pulseOffset) * 0.3 + 0.7
    const currentSize = this.size * pulse

    // Create radial gradient for particle
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, currentSize * 3
    )

    gradient.addColorStop(0, this.hexToRgba(this.options.colors.primary, alpha * 0.8))
    gradient.addColorStop(0.4, this.hexToRgba(this.options.colors.secondary, alpha * 0.6))
    gradient.addColorStop(1, this.hexToRgba(this.options.colors.accent, alpha * 0.2))

    // Draw particle core
    ctx.beginPath()
    ctx.fillStyle = gradient
    ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2)
    ctx.fill()

    // Draw particle glow ring (optional)
    if (this.options.showGlowRing) {
      ctx.beginPath()
      ctx.strokeStyle = this.hexToRgba(this.options.colors.accent, alpha * 0.3)
      ctx.lineWidth = 1
      ctx.arc(this.x, this.y, currentSize * 2, 0, Math.PI * 2)
      ctx.stroke()
    }
  }

  hexToRgba(hex: string, alpha: number) {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
}

// Neural Network Background Class
class NeuralNetworkBackground {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  options: any
  particles: NeuralParticle[]
  animationId: number | null
  isVisible: boolean

  constructor(canvas: HTMLCanvasElement, options: any = {}) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')!
    
    // Configuration options
    this.options = {
      particleCount: options.particleCount || 60,
      connectionDistance: options.connectionDistance || 120,
      particleSpeed: options.particleSpeed || 0.3,
      particleSize: options.particleSize || { min: 1, max: 4 },
      colors: options.colors || {
        primary: '#60a5fa',
        secondary: '#a855f7', 
        accent: '#22d3ee'
      },
      opacity: options.opacity || 0.4,
      showGlowRing: options.showGlowRing || false,
      ...options
    }
    
    this.particles = []
    this.animationId = null
    this.isVisible = true
    
    this.init()
    this.setupEventListeners()
  }
  
  init() {
    this.resizeCanvas()
    this.createParticles()
    this.animate()
  }
  
  resizeCanvas() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }
  
  setupEventListeners() {
    window.addEventListener('resize', () => this.resizeCanvas())
    
    // Pause animations when tab is not visible for performance
    document.addEventListener('visibilitychange', () => {
      this.isVisible = !document.hidden
      if (this.isVisible) {
        this.animate()
      } else if (this.animationId) {
        cancelAnimationFrame(this.animationId)
      }
    })
  }
  
  createParticles() {
    this.particles = []
    for (let i = 0; i < this.options.particleCount; i++) {
      this.particles.push(new NeuralParticle(this.canvas, this.options))
    }
  }
  
  drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x
        const dy = this.particles[i].y - this.particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < this.options.connectionDistance) {
          this.drawConnection(this.particles[i], this.particles[j], distance)
        }
      }
    }
  }
  
  drawConnection(particle1: NeuralParticle, particle2: NeuralParticle, distance: number) {
    const alpha = (this.options.connectionDistance - distance) / this.options.connectionDistance
    
    // Create gradient connection
    const gradient = this.ctx.createLinearGradient(
      particle1.x, particle1.y,
      particle2.x, particle2.y
    )
    
    gradient.addColorStop(0, this.hexToRgba(this.options.colors.primary, alpha * 0.3))
    gradient.addColorStop(0.5, this.hexToRgba(this.options.colors.secondary, alpha * 0.2))
    gradient.addColorStop(1, this.hexToRgba(this.options.colors.accent, alpha * 0.1))
    
    this.ctx.beginPath()
    this.ctx.strokeStyle = gradient
    this.ctx.lineWidth = alpha * 1.5
    this.ctx.moveTo(particle1.x, particle1.y)
    this.ctx.lineTo(particle2.x, particle2.y)
    this.ctx.stroke()
  }
  
  animate() {
    if (!this.isVisible) return
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    
    // Update and draw particles
    this.particles.forEach(particle => {
      particle.update()
      particle.draw(this.ctx)
    })
    
    // Draw connections
    this.drawConnections()
    
    this.animationId = requestAnimationFrame(() => this.animate())
  }
  
  // Utility function to convert hex to rgba
  hexToRgba(hex: string, alpha: number) {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  
  // Public methods for control
  start() {
    this.isVisible = true
    this.animate()
  }
  
  stop() {
    this.isVisible = false
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  }
  
  updateParticleCount(count: number) {
    this.options.particleCount = count
    this.createParticles()
  }
  
  updateColors(colors: any) {
    this.options.colors = { ...this.options.colors, ...colors }
  }
}

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const neuralNetworkRef = useRef<NeuralNetworkBackground | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Initialize neural network background
    neuralNetworkRef.current = new NeuralNetworkBackground(canvas, {
      particleCount: 80,
      connectionDistance: 150,
      particleSpeed: 0.5,
      particleSize: { min: 2, max: 6 },
      colors: {
        primary: '#60a5fa',
        secondary: '#a855f7',
        accent: '#22d3ee'
      },
      opacity: 0.6,
      showGlowRing: true
    })

    return () => {
      if (neuralNetworkRef.current) {
        neuralNetworkRef.current.stop()
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="neural-canvas"
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        zIndex: -20,
        opacity: 0.7,
        background: 'transparent'
      }}
    />
  )
}
