'use client'

import { useEffect, useRef } from 'react'

export default function SimpleTestCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      console.log('❌ Canvas is null')
      return
    }

    console.log('✅ Canvas found:', canvas)
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      console.log('❌ Context is null')
      return
    }

    console.log('✅ Context found:', ctx)

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    console.log('✅ Canvas size set:', canvas.width, 'x', canvas.height)

    // Draw a simple test - bright red rectangle
    ctx.fillStyle = 'red'
    ctx.fillRect(50, 50, 200, 100)
    console.log('✅ Red rectangle drawn')

    // Draw some bright blue circles
    ctx.fillStyle = 'blue'
    for (let i = 0; i < 10; i++) {
      ctx.beginPath()
      ctx.arc(100 + i * 50, 200, 20, 0, Math.PI * 2)
      ctx.fill()
    }
    console.log('✅ Blue circles drawn')

    // Add some text
    ctx.fillStyle = 'white'
    ctx.font = '30px Arial'
    ctx.fillText('TEST CANVAS VISIBLE', 50, 350)
    console.log('✅ Text drawn')

  }, [])

  console.log('🔄 SimpleTestCanvas rendering...')

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        background: 'rgba(0,0,0,0.3)',
        pointerEvents: 'none'
      }}
    />
  )
}
