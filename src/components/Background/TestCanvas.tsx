'use client'

import { useEffect, useRef } from 'react'

export default function TestCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Draw a simple test pattern
    ctx.fillStyle = 'rgba(96, 165, 250, 0.8)'
    ctx.fillRect(100, 100, 100, 100)

    ctx.fillStyle = 'rgba(168, 85, 247, 0.8)'
    ctx.beginPath()
    ctx.arc(300, 200, 50, 0, Math.PI * 2)
    ctx.fill()

    // Animate some particles
    const particles = []
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 5 + 2
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.fillStyle = 'rgba(34, 211, 238, 0.8)'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="test-canvas"
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        zIndex: -15,
        opacity: 1,
        background: 'transparent'
      }}
    />
  )
}
