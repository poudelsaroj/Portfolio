'use client'

import { useState, useRef, useEffect } from 'react'

export default function Terminal() {
  const [isVisible, setIsVisible] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: 'python neural_status.py',
      output: 'Loading neural networks... [████████████████] 100%\nAI Models: 7 ACTIVE | Accuracy: 98.7% | Edge Nodes: 500+ | Learning Rate: OPTIMAL\nFederated Learning: ENABLED | 3D Vision: ONLINE | Generative AI: READY'
    },
    {
      command: 'ls -la /skills/',
      output: 'drwxr-xr-x deep_learning/     98% proficiency\ndrwxr-xr-x computer_vision/   96% proficiency\ndrwxr-xr-x nlp_systems/       94% proficiency\ndrwxr-xr-x fullstack_ai/      84% proficiency'
    }
  ])
  const inputRef = useRef<HTMLInputElement>(null)

  const commands: Record<string, string> = {
    help: `Available commands:
📊 General:
help, about, skills, projects, contact, certifications
🚀 Advanced AI:
federated_learn, edge_optimize, generate_molecules, quantum_ai, multimodal
🔬 Research:
automl, neuromorphic, gnn_analysis, diffusion_model, transformer_scale
📚 Learning:
few_shot, continual_learn, self_supervised
💻 System:
gpu_status, deploy, coffee, matrix, clear`,
    
    skills: '🎨 Frontend: React 95% | JavaScript 98% | TypeScript 96% | Next.js 94%\n🧠 Deep Learning: 97% | 👁️ Computer Vision: 96% | 🎯 3D Vision: 93% | 💬 NLP: 94%\n🎮 Reinforcement Learning: 87% | 📱 Edge AI: 89% | 🧬 Generative AI: 91% | ⚡ MLOps: 84%',
    
    projects: 'Active projects: 5 | Models deployed: 35+ | Accuracy avg: 98.2% | Edge devices: 500+',
    
    contact: 'Email: paudyalsaroj3@gmail.com | GitHub: github.com/poudelsaroj',
    
    certifications: '🏆 AWS ML Specialty | ☁️ Google Cloud ML Engineer | 🔷 Azure AI Engineer\n🎓 Deep Learning Specialization | 🔥 TensorFlow Developer | 👁️ Computer Vision Nanodegree\n⚛️ React Developer Certification | ⚙️ MLOps Engineering Specialization',
    
    neural_status: 'Current Model: YOLOv8 | Architecture: Computer Vision | Status: ONLINE | Performance: OPTIMAL',
    
    coffee: 'Coffee levels: CRITICAL ☕ | Recommendation: Immediate refill required | Neural performance: 23% degraded',
    
    matrix: 'Entering the Matrix... Reality loading... 🔴🔵 Choose your pill.',
    
    gpu_status: 'GPU Status: NVIDIA RTX 4090 | CUDA Cores: 16384 | Memory: 24GB | Utilization: 78% | Temperature: 67°C',
    
    clear: 'CLEAR_TERMINAL'
  }

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    
    if (command === 'clear') {
      setHistory([])
      return
    }
    
    const output = commands[command] || `Command not found: ${command}. Type 'help' for available commands.`
    
    setHistory(prev => [...prev, { command: cmd, output }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput('')
    }
  }

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isVisible])

  return (
    <section id="terminal" className="py-24">
      <div className="container mx-auto px-8">
        <div className="text-center mb-8">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="glass px-6 py-3 rounded-xl text-primary-cyan font-mono hover:bg-primary-cyan/10 hover:shadow-glow transition-all duration-300"
          >
            {isVisible ? 'Close Terminal' : '$ Open Terminal'}
          </button>
        </div>

        {isVisible && (
          <div className="max-w-4xl mx-auto glass rounded-2xl overflow-hidden observe">
            {/* Terminal Header */}
            <div className="glass border-b border-border-glass px-6 py-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-text-gray-400 font-mono text-sm">
                neural_interface@ai_engineer:~$
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm bg-bg-darker/50 min-h-96 max-h-96 overflow-y-auto">
              {/* Command History */}
              {history.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-primary-cyan">saroj@ai-engineer:~$</span>
                    <span className="text-accent-green">{item.command}</span>
                  </div>
                  <div className="text-text-gray-300 whitespace-pre-line ml-6">
                    {item.output}
                  </div>
                </div>
              ))}

              {/* Current Input */}
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <span className="text-primary-cyan">saroj@ai-engineer:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent text-accent-green outline-none"
                  placeholder="Type 'help' for commands"
                />
                <span className="terminal-cursor"></span>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
