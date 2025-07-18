'use client'

export default function CSSNeuralBackground() {
  return (
    <div className="neural-background-container">
      {/* Main neural background */}
      <div className="neural-background" />
      
      {/* Particle layer */}
      <div className="particle-layer">
        {Array.from({ length: 40 }, (_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              animationDelay: `${Math.random() * 20}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Neural connections overlay */}
      <div className="neural-connections">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="connection-line"
            style={{
              animationDelay: `${Math.random() * 15}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Scan lines overlay */}
      <div className="scan-lines" />
      
      {/* Grid overlay */}
      <div className="grid-overlay" />
    </div>
  )
}
