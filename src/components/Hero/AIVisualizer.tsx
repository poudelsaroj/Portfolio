'use client'

import { useState, useEffect } from 'react'
import DetectionSystem from './DetectionSystem'
import ModelSwitcher from './ModelSwitcher'

export default function AIVisualizer() {
  const [currentModel, setCurrentModel] = useState('cv')
  const [inferenceSpeed, setInferenceSpeed] = useState('23ms')
  const [gpuUtil, setGpuUtil] = useState('78%')

  // Simulate real-time metrics
  useEffect(() => {
    const interval = setInterval(() => {
      const baseSpeed = currentModel === '3d' ? 45 : currentModel === 'nlp' ? 120 : 23
      const variation = Math.floor(Math.random() * 10) - 5
      setInferenceSpeed(Math.max(1, baseSpeed + variation) + 'ms')
      
      const baseGpu = Math.floor(Math.random() * 20) + 70
      setGpuUtil(baseGpu + '%')
    }, 3000)

    return () => clearInterval(interval)
  }, [currentModel])

  return (
    <div className="glass rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden">
      {/* Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-blue via-primary-purple to-primary-cyan"></div>
      
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-primary-cyan font-mono">
          AI_NEURAL_SYSTEM.STATUS
        </h3>
        
        <ModelSwitcher 
          currentModel={currentModel} 
          onModelChange={setCurrentModel} 
        />
        
        {/* Status Indicators */}
        <div className="flex gap-3">
          <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-accent-orange animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-primary-cyan animate-pulse"></div>
        </div>
      </div>

      {/* Detection System */}
      <DetectionSystem currentModel={currentModel} />

      {/* Neural Network Visualization */}
      <div className="mt-6 h-32 glass rounded-lg relative overflow-hidden bg-gradient-to-br from-primary-blue/5 to-primary-purple/5">
        {/* Neural Nodes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full animate-neural-pulse"
            style={{
              top: `${15 + (i % 3) * 25}%`,
              left: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.3}s`
            }}
          >
            <div className="absolute -inset-3 border border-primary-blue/30 rounded-full animate-ripple"></div>
          </div>
        ))}
        
        {/* Connections */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-primary-blue/60 to-primary-purple/60 animate-data-flow"
            style={{
              top: `${25 + i * 15}%`,
              left: `${15 + i * 10}%`,
              width: `${30 + i * 5}px`,
              transform: `rotate(${i * 15 - 30}deg)`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Real-time Metrics */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="glass rounded-lg p-4 text-center">
          <div className="text-xs text-text-gray-400 font-mono mb-2">Inference Speed</div>
          <div className="text-xl font-bold text-primary-blue font-mono">{inferenceSpeed}</div>
          <div className="text-xs text-accent-green font-mono">+15% optimized</div>
        </div>
        
        <div className="glass rounded-lg p-4 text-center">
          <div className="text-xs text-text-gray-400 font-mono mb-2">GPU Utilization</div>
          <div className="text-xl font-bold text-primary-blue font-mono">{gpuUtil}</div>
          <div className="text-xs text-accent-orange font-mono">Stable</div>
        </div>
      </div>
    </div>
  )
}
