'use client'

import { useState, useEffect } from 'react'

interface ModelSwitcherProps {
  currentModel: string
  onModelChange: (model: string) => void
}

export default function ModelSwitcher({ currentModel, onModelChange }: ModelSwitcherProps) {
  const models = [
    { id: 'cv', label: 'CV' },
    { id: 'nlp', label: 'NLP' },
    { id: '3d', label: '3D' },
    { id: 'rl', label: 'RL' }
  ]

  // Auto-switch models every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = models.findIndex(model => model.id === currentModel)
      const nextIndex = (currentIndex + 1) % models.length
      onModelChange(models[nextIndex].id)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentModel, onModelChange])

  return (
    <div className="flex gap-2">
      {models.map((model) => (
        <button
          key={model.id}
          onClick={() => onModelChange(model.id)}
          className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-all duration-300 ${
            currentModel === model.id
              ? 'bg-primary-blue text-white shadow-glow'
              : 'glass text-text-gray-300 hover:text-primary-cyan hover:border-primary-cyan/50'
          }`}
        >
          {model.label}
        </button>
      ))}
    </div>
  )
}
