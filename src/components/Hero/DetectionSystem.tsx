'use client'

import { useState, useEffect } from 'react'
import { aiModels } from '@/utils/aiModels'

interface DetectionSystemProps {
  currentModel: string
}

export default function DetectionSystem({ currentModel }: DetectionSystemProps) {
  const [currentDetectionIndex, setCurrentDetectionIndex] = useState(0)
  const [attentionSpan, setAttentionSpan] = useState(0)

  const model = aiModels[currentModel]
  const detection = model?.detectionTypes[currentDetectionIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      if (model?.detectionTypes) {
        setCurrentDetectionIndex(prev => 
          (prev + 1) % model.detectionTypes.length
        )
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [model])

  useEffect(() => {
    const startTime = Date.now()
    const interval = setInterval(() => {
      setAttentionSpan(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!model || !detection) return null

  return (
    <div className="glass rounded-xl p-4 border-primary-cyan/30 relative overflow-hidden animate-detection-pulse">
      {/* Detection Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 items-center">
          <div className="bg-primary-cyan text-bg-dark px-2 py-1 rounded text-xs font-bold font-mono animate-pulse">
            MULTI_OBJECT_DETECTED
          </div>
          <div className="bg-primary-purple text-white px-2 py-1 rounded text-xs font-mono">
            {model.model}
          </div>
        </div>
        <div className="text-accent-green font-mono text-sm font-semibold">
          CONFIDENCE: {detection.confidence}
        </div>
      </div>

      {/* Detection Content */}
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div>
          <div className="text-primary-cyan font-semibold mb-2 text-sm">
            Entity Classification:
          </div>
          <div className="text-text-white font-medium">
            {detection.type}
          </div>
          <div className="text-text-gray-400 text-sm mt-1">
            {detection.description}
          </div>
        </div>

        <div className="relative h-24 glass rounded-lg flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-blue/10 to-primary-cyan/10">
          {/* Bounding Boxes */}
          <div className="absolute w-12 h-8 border-2 border-primary-cyan rounded animate-scan-box top-2 left-2"></div>
          <div className="absolute w-8 h-6 border-2 border-accent-green rounded animate-scan-box top-4 right-3" style={{ animationDelay: '1s' }}></div>
          
          {/* Detection Visual */}
          <div className="text-3xl z-10">{detection.emoji}</div>
          
          {/* Depth Indicator */}
          <div className="absolute bottom-1 left-1 text-xs text-primary-cyan font-mono bg-bg-dark/80 px-1 rounded">
            Z: 2.3m
          </div>
        </div>
      </div>

      {/* Detection Stats */}
      <div className="grid grid-cols-4 gap-2 mt-4">
        <div className="text-center p-2 glass rounded">
          <div className="text-primary-blue font-bold font-mono text-sm">{detection.interest}</div>
          <div className="text-text-gray-400 text-xs">Interest</div>
        </div>
        <div className="text-center p-2 glass rounded">
          <div className="text-primary-blue font-bold font-mono text-sm">{detection.techSavvy}</div>
          <div className="text-text-gray-400 text-xs">Tech Level</div>
        </div>
        <div className="text-center p-2 glass rounded">
          <div className="text-primary-blue font-bold font-mono text-sm">{detection.hireIntent}</div>
          <div className="text-text-gray-400 text-xs">Hire Intent</div>
        </div>
        <div className="text-center p-2 glass rounded">
          <div className="text-primary-blue font-bold font-mono text-sm">{attentionSpan}s</div>
          <div className="text-text-gray-400 text-xs">Attention</div>
        </div>
      </div>
    </div>
  )
}
