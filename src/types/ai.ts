export interface AIModel {
  id: string
  name: string
  architecture: string
  model: string
  layers: LayerInfo[]
  detectionTypes: DetectionType[]
}

export interface LayerInfo {
  name: string
  size: string
}

export interface DetectionType {
  type: string
  emoji: string
  description: string
  confidence: string
  interest: string
  techSavvy: string
  hireIntent: string
}

export interface VisitorType {
  type: string
  emoji: string
  description: string
  confidence: string
  interest: string
  techSavvy: string
  hireIntent: string
}

export interface ModelMetrics {
  inferenceSpeed: string
  gpuUtilization: string
  accuracy: string
  memoryUsage: string
}
