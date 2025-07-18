import { AIModel } from '@/types/ai'

export const aiModels: Record<string, AIModel> = {
  cv: {
    id: 'cv',
    name: 'Computer Vision',
    architecture: 'ResNet-50 | Computer Vision Pipeline',
    model: 'YOLOv8',
    layers: [
      { name: 'INPUT', size: '224x224x3' },
      { name: 'CONV1', size: '112x112x64' },
      { name: 'RESBLOCK', size: '56x56x256' },
      { name: 'POOL', size: '7x7x2048' },
      { name: 'OUTPUT', size: '1000 classes' }
    ],
    detectionTypes: [
      {
        type: 'Curious Developer',
        emoji: '👨‍💻',
        description: 'High probability of coffee consumption and late-night coding sessions',
        confidence: '97.3%',
        interest: '94%',
        techSavvy: '98%',
        hireIntent: '87%'
      },
      {
        type: 'AI Research Scientist',
        emoji: '🔬',
        description: 'Advanced neural architecture analysis in progress',
        confidence: '98.7%',
        interest: '99%',
        techSavvy: '97%',
        hireIntent: '72%'
      }
    ]
  },
  nlp: {
    id: 'nlp',
    name: 'Natural Language Processing',
    architecture: 'Transformer | BERT-Large Architecture',
    model: 'BERT-Large',
    layers: [
      { name: 'TOKENIZER', size: '512 tokens' },
      { name: 'EMBEDDING', size: '768 dims' },
      { name: 'ATTENTION', size: '24 layers' },
      { name: 'POOLER', size: '768 hidden' },
      { name: 'CLASSIFIER', size: '2 classes' }
    ],
    detectionTypes: [
      {
        type: 'Language Model Expert',
        emoji: '📝',
        description: 'Processing semantic understanding patterns',
        confidence: '95.8%',
        interest: '96%',
        techSavvy: '94%',
        hireIntent: '89%'
      },
      {
        type: 'Chatbot Enthusiast',
        emoji: '💬',
        description: 'Analyzing conversational AI capabilities',
        confidence: '92.4%',
        interest: '91%',
        techSavvy: '86%',
        hireIntent: '77%'
      }
    ]
  },
  '3d': {
    id: '3d',
    name: '3D Computer Vision',
    architecture: 'PointNet++ | 3D Point Cloud Processing',
    model: 'PointNet++',
    layers: [
      { name: 'POINTS', size: 'N x 3' },
      { name: 'SAMPLING', size: '1024 points' },
      { name: 'GROUPING', size: '32 neighbors' },
      { name: 'POINTCONV', size: '128 features' },
      { name: 'SEGMENT', size: 'K classes' }
    ],
    detectionTypes: [
      {
        type: '3D Vision Specialist',
        emoji: '🎯',
        description: 'Depth perception and spatial analysis detected',
        confidence: '96.2%',
        interest: '98%',
        techSavvy: '95%',
        hireIntent: '91%'
      },
      {
        type: 'AR/VR Developer',
        emoji: '🥽',
        description: 'Immersive technology passion levels critical',
        confidence: '94.7%',
        interest: '97%',
        techSavvy: '92%',
        hireIntent: '85%'
      }
    ]
  },
  rl: {
    id: 'rl',
    name: 'Reinforcement Learning',
    architecture: 'PPO | Actor-Critic Network',
    model: 'PPO-Agent',
    layers: [
      { name: 'STATE', size: '84x84x4' },
      { name: 'CONV', size: '32 filters' },
      { name: 'ACTOR', size: '512 hidden' },
      { name: 'CRITIC', size: '512 hidden' },
      { name: 'ACTION', size: '4 actions' }
    ],
    detectionTypes: [
      {
        type: 'Game AI Developer',
        emoji: '🎮',
        description: 'Reward optimization strategies being evaluated',
        confidence: '93.5%',
        interest: '95%',
        techSavvy: '89%',
        hireIntent: '82%'
      },
      {
        type: 'Robotics Engineer',
        emoji: '🤖',
        description: 'Autonomous decision-making algorithms appreciated',
        confidence: '97.1%',
        interest: '98%',
        techSavvy: '96%',
        hireIntent: '93%'
      }
    ]
  }
}
