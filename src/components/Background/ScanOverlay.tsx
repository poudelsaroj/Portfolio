export default function ScanOverlay() {
  return (
    <>
      {/* Neural Network CSS Background */}
      <div className="neural-network-bg" />
      
      {/* Scan Lines Overlay */}
      <div className="neural-scan-overlay" />
      
      {/* Neural Grid Pattern */}
      <div className="neural-grid" />
      
      {/* Additional Neural Particles Container */}
      <div className="neural-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="neural-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`
            }}
          />
        ))}
      </div>

      {/* Neural Connections */}
      <div className="neural-connections">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="neural-connection"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              width: `${Math.random() * 100 + 50}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </>
  )
}
