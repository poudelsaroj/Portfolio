'use client'

export default function SimpleNeuralCanvas() {
  return (
    <div 
      id="simple-neural-test"
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        zIndex: -20,
        background: 'rgba(96, 165, 250, 0.1)',
        border: '2px solid red'
      }}
    >
      <div style={{ color: 'white', fontSize: '24px', margin: '20px' }}>
        NEURAL BACKGROUND TEST - If you can see this, the component is loading
      </div>
    </div>
  )
}
