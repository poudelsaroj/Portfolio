'use client'

import { useEffect, useRef } from 'react'

export default function MinimalNeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    console.log('MinimalNeuralCanvas: Starting')
    
    const canvas = canvasRef.current
    if (!canvas) {
      console.log('MinimalNeuralCanvas: No canvas ref')
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      console.log('MinimalNeuralCanvas: No 2d context')
      return
    }

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    console.log('MinimalNeuralCanvas: Canvas sized to', canvas.width, 'x', canvas.height)

    // Draw something simple
    ctx.fillStyle = 'rgba(96, 165, 250, 0.8)'
    ctx.fillRect(50, 50, 100, 100)
    
    ctx.fillStyle = 'rgba(168, 85, 247, 0.8)'
    ctx.beginPath()
    ctx.arc(200, 200, 30, 0, Math.PI * 2)
    ctx.fill()

    console.log('MinimalNeuralCanvas: Drew test shapes')

    // Simple animation
    let x = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Moving circle
      ctx.fillStyle = 'rgba(34, 211, 238, 0.8)'
      ctx.beginPath()
      ctx.arc(x, 100, 20, 0, Math.PI * 2)
      ctx.fill()
      
      x = (x + 2) % canvas.width
      requestAnimationFrame(animate)
    }

    animate()
    console.log('MinimalNeuralCanvas: Animation started')
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="minimal-neural-canvas"
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        zIndex: -15,
        opacity: 1.0,
        background: 'transparent'
      }}
    />
  )
}
