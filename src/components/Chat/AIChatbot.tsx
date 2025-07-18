'use client'

import { useState, useEffect, useRef } from 'react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
  isTyping?: boolean
}

interface QuickQuestion {
  id: string
  question: string
  category: string
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showQuestions, setShowQuestions] = useState(false)
  const [inputFocused, setInputFocused] = useState(false)
  const [researchMode, setResearchMode] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickQuestions: QuickQuestion[] = [
    { id: '1', question: 'Tell me about your AI/ML projects', category: 'Projects' },
    { id: '2', question: 'What are your technical skills?', category: 'Skills' },
    { id: '3', question: 'What\'s your educational background?', category: 'Education' },
    { id: '4', question: 'How can I contact you?', category: 'Contact' },
    { id: '5', question: 'What are your career goals?', category: 'Career' }
  ]

  const shortAnswers: Record<string, string> = {
    '1': "I've built several AI/ML projects including CNN image classification (94% accuracy), real-time object detection with YOLO, NLP chatbots, recommendation systems, and predictive analytics platforms using TensorFlow and PyTorch.",
    '2': "Expert in Python, JavaScript/TypeScript, C++. Skilled in PyTorch, TensorFlow, React/Next.js, Node.js, OpenCV, and specialized in Graph Neural Networks, Reinforcement Learning, and 3D Computer Vision.",
    '3': "Computer Engineering student at Pulchowk Engineering Campus with advanced AI training from NAAMII AI School (2024), Samsung Innovation Campus, and DataCamp certifications in Data Science and React development.",
    '4': "Email: sarojpoudel@example.com | LinkedIn: linkedin.com/in/sarojpoudel | GitHub: github.com/sarojpoudel | Available for AI/ML collaborations and opportunities.",
    '5': "Aspiring AI researcher focused on AGI development, publishing research papers, leading AI teams, and founding an AI research lab to create technology that positively impacts society."
  }

  const detailedAnswers: Record<string, string> = {
    '1': "I've worked on several exciting AI/ML projects including:\n\n🧠 **Neural Network Architecture Design** - Built custom CNN models for image classification with 94% accuracy\n\n🔍 **Computer Vision System** - Developed real-time object detection using YOLO and OpenCV\n\n💬 **NLP Chatbot** - Created an intelligent conversational AI using transformer models\n\n🎯 **Recommendation System** - Built collaborative filtering algorithms for personalized content\n\n📊 **Data Analysis Platform** - Implemented predictive analytics using scikit-learn and TensorFlow\n\nEach project challenged me to solve real-world problems and push the boundaries of what's possible with AI!",
    
    '2': "I'm proficient in a comprehensive tech stack:\n\n**Programming Languages:**\n• Python (Advanced) - 5+ years\n• JavaScript/TypeScript (Expert) - 4+ years\n• C++ (Advanced) - 3+ years\n• C (Intermediate) - 2+ years\n\n**AI/ML Frameworks:**\n• PyTorch & TensorFlow for deep learning\n• Scikit-learn for traditional ML\n• OpenCV for computer vision\n• NLTK/SpaCy for NLP\n• Hugging Face Transformers\n\n**Web Technologies:**\n• React.js & Next.js (Expert)\n• Node.js & Express (Advanced)\n• MongoDB & PostgreSQL\n• Docker & AWS deployment\n\n**Specialized Skills:**\n• Graph Neural Networks (GNNs)\n• Reinforcement Learning\n• 3D Computer Vision\n• Statistical Analysis\n\nI'm always learning and adapting to new technologies in this rapidly evolving field!",
    
    '3': "I'm currently pursuing my degree in Computer Engineering at Pulchowk Engineering Campus, one of Nepal's most prestigious engineering institutions.\n\n**Academic Journey:**\n🎓 **Computer Engineering** - Pulchowk Engineering Campus\n• Focus: AI, Machine Learning, and Software Engineering\n• Relevant Coursework: Data Structures, Algorithms, Database Systems, Computer Networks\n\n**Specialized Training:**\n🧠 **NAAMII AI School (ANAIS 2024)** - Advanced AI specialization\n• Geometric Deep Learning\n• Graph Neural Networks\n• Transformer Architecture\n• Self-supervised Learning\n\n💻 **Samsung Innovation Campus** - Data Science Foundation\n🐍 **DataCamp Certified Data Scientist** - Python specialization\n⚛️ **Meta/Coursera** - React & JavaScript mastery\n\nMy education combines strong theoretical foundations with hands-on practical experience, preparing me for the challenges of modern AI development.",
    
    '4': "I'd love to connect with you! Here are the best ways to reach me:\n\n**Professional Contact:**\n📧 **Email:** sarojpoudel@example.com\n💼 **LinkedIn:** linkedin.com/in/sarojpoudel\n🐱 **GitHub:** github.com/sarojpoudel\n\n**Social Media:**\n🐦 **Twitter:** @sarojpoudel\n📸 **Instagram:** @sarojpoudel\n💬 **Discord:** Available for tech discussions\n\n**Quick Response:**\n• Email: Best for formal inquiries and project discussions\n• LinkedIn: Professional networking and opportunities\n• GitHub: Code collaboration and technical questions\n\n**Response Time:**\n• Typically respond within 24 hours\n• Faster response for urgent technical discussions\n• Always open to discussing AI/ML projects and collaborations!\n\nFeel free to reach out about opportunities, collaborations, or just to chat about AI and technology!",
    
    '5': "My career vision is to become a leading AI researcher and engineer who creates technology that positively impacts society.\n\n**Short-term Goals (1-2 years):**\n🎯 Complete my Computer Engineering degree with excellence\n🔬 Publish research papers in top-tier AI conferences\n💼 Join a cutting-edge AI research team or startup\n🌟 Contribute to open-source AI projects\n\n**Medium-term Goals (3-5 years):**\n🚀 Lead AI development teams on groundbreaking projects\n🧠 Specialize in AGI (Artificial General Intelligence) research\n🌍 Develop AI solutions for global challenges like climate change\n📚 Mentor the next generation of AI engineers\n\n**Long-term Vision (5+ years):**\n🏢 Found an AI research lab or company\n🎓 Pursue a PhD in AI/ML from a top university\n🌐 Bridge the gap between AI research and practical applications\n🤝 Foster international collaboration in AI development\n\n**Core Values:**\n• Ethical AI development\n• Making technology accessible to everyone\n• Solving real-world problems\n• Continuous learning and adaptation\n\nI believe AI should augment human capabilities, not replace them. My goal is to create intelligent systems that empower people and make the world a better place!"
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      const welcomeMessage: Message = {
        id: 'welcome',
        text: "👋 Hello! I'm Saroj's AI Assistant. I can help you learn more about his background, projects, and expertise. Click in the input field below to see suggested questions or ask me anything!",
        isUser: false,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen])

  const simulateTyping = (text: string, callback: () => void) => {
    setIsTyping(true)
    // Simulate realistic typing time based on text length
    const typingTime = Math.min(text.length * 20, 3000) // Max 3 seconds
    setTimeout(() => {
      setIsTyping(false)
      callback()
    }, typingTime)
  }

  const simulateResearch = (callback: () => void) => {
    const sources = [
      "linkedin.com/in/sarojpoudel",
      "github.com/sarojpoudel",
      "portfolio.sarojpoudel.com",
      "scholar.google.com",
      "researchgate.net",
      "kaggle.com/sarojpoudel"
    ]
    
    let currentSourceIndex = 0
    const showNextSource = () => {
      if (currentSourceIndex < sources.length) {
        const searchMessage: Message = {
          id: `search-${Date.now()}-${currentSourceIndex}`,
          text: `🔍 Searching ${sources[currentSourceIndex]}...`,
          isUser: false,
          timestamp: new Date(),
          isTyping: true
        }
        setMessages(prev => [...prev, searchMessage])
        
        setTimeout(() => {
          setMessages(prev => prev.filter(msg => msg.id !== searchMessage.id))
          currentSourceIndex++
          showNextSource()
        }, 800)
      } else {
        // All sources searched, show final analysis
        const analysisMessage: Message = {
          id: `analysis-${Date.now()}`,
          text: "🧠 Analyzing gathered information...",
          isUser: false,
          timestamp: new Date(),
          isTyping: true
        }
        setMessages(prev => [...prev, analysisMessage])
        
        setTimeout(() => {
          setMessages(prev => prev.filter(msg => msg.id !== analysisMessage.id))
          callback()
        }, 1500)
      }
    }
    
    showNextSource()
  }

  const handleQuickQuestion = (questionId: string) => {
    const question = quickQuestions.find(q => q.id === questionId)
    if (!question) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: question.question,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setShowQuestions(false)
    setInputFocused(false)

    // Use research mode to determine response type
    if (researchMode) {
      simulateResearch(() => {
        const answer = detailedAnswers[questionId]
        if (answer) {
          simulateTyping(answer, () => {
            const aiMessage: Message = {
              id: `ai-${Date.now()}`,
              text: answer,
              isUser: false,
              timestamp: new Date()
            }
            setMessages(prev => [...prev, aiMessage])
          })
        }
      })
    } else {
      const answer = shortAnswers[questionId]
      if (answer) {
        simulateTyping(answer, () => {
          const aiMessage: Message = {
            id: `ai-${Date.now()}`,
            text: answer,
            isUser: false,
            timestamp: new Date()
          }
          setMessages(prev => [...prev, aiMessage])
        })
      }
    }
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setShowQuestions(false)
    setInputFocused(false)

    // Use research mode to determine response type
    if (researchMode) {
      simulateResearch(() => {
        simulateTyping("Based on my comprehensive research across multiple sources, I found detailed information about your inquiry. For the most accurate and up-to-date details about Saroj's background, projects, and expertise, I recommend using the suggested questions above or contacting him directly through his professional channels. His work spans advanced AI/ML research, full-stack development, and innovative solutions in computer vision and natural language processing.", () => {
          const aiMessage: Message = {
            id: `ai-${Date.now()}`,
            text: "Based on my comprehensive research across multiple sources, I found detailed information about your inquiry. For the most accurate and up-to-date details about Saroj's background, projects, and expertise, I recommend using the suggested questions above or contacting him directly through his professional channels. His work spans advanced AI/ML research, full-stack development, and innovative solutions in computer vision and natural language processing.",
            isUser: false,
            timestamp: new Date()
          }
          setMessages(prev => [...prev, aiMessage])
        })
      })
    } else {
      simulateTyping("Thanks for your question! For detailed info, please use the suggested questions above or contact Saroj directly.", () => {
        const aiMessage: Message = {
          id: `ai-${Date.now()}`,
          text: "Thanks for your question! For detailed info, please use the suggested questions above or contact Saroj directly.",
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiMessage])
      })
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const handleInputFocus = () => {
    setInputFocused(true)
    setShowQuestions(true)
  }

  const handleInputBlur = () => {
    // Delay hiding questions to allow clicking on them
    setTimeout(() => {
      setInputFocused(false)
      setShowQuestions(false)
    }, 200)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="glass border border-primary-blue text-primary-blue px-8 py-3 rounded-xl font-semibold font-mono hover:bg-primary-blue/10 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group"
      >
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.4 0-2.74-.35-3.9-.99L3 20l.99-5.1C3.35 13.74 3 12.4 3 11c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9z"/>
            <path d="M8.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm3 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z"/>
          </svg>
          🤖 AI Chat
        </span>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-bg-dark/98 backdrop-blur-2xl border border-white/30 w-full max-w-4xl h-[80vh] rounded-2xl flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-blue to-primary-cyan rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AI</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Saroj's AI Assistant</h3>
                  <p className="text-sm text-text-gray-400">Ask me anything about Saroj's background!</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* Research Mode Toggle */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-text-gray-400">Research Mode</span>
                  <button
                    onClick={() => setResearchMode(!researchMode)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      researchMode ? 'bg-primary-blue' : 'bg-gray-600'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                        researchMode ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.isUser
                        ? 'bg-primary-blue text-white'
                        : 'bg-bg-dark/90 backdrop-blur-lg border border-white/30 text-text-gray-100'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.text}</div>
                    {message.isTyping && (
                      <div className="flex items-center gap-1 mt-2">
                        <div className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse delay-200"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-bg-dark/90 backdrop-blur-lg border border-white/30 text-text-gray-100 p-4 rounded-2xl">
                    <div className="flex items-center gap-2">
                      <span>AI is typing</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {showQuestions && (
              <div className="p-6 border-t border-white/10">
                <h4 className="text-sm font-semibold text-text-gray-400 mb-3">
                  {messages.length > 1 ? "Ask another question:" : "Quick Questions:"}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question.id}
                      onClick={() => handleQuickQuestion(question.id)}
                      className="text-left p-3 rounded-lg bg-bg-dark/85 backdrop-blur-lg border border-white/30 text-sm hover:bg-primary-blue/30 hover:border-primary-blue/60 transition-all duration-200 group"
                    >
                      <span className="text-primary-cyan text-xs font-mono">{question.category}</span>
                      <div className="text-text-gray-100 group-hover:text-white">{question.question}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-6 border-t border-white/10">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  placeholder="Type your message..."
                  className="flex-1 bg-bg-dark/85 backdrop-blur-lg border border-white/30 rounded-xl px-4 py-3 text-white placeholder-text-gray-400 focus:outline-none focus:border-primary-cyan focus:bg-bg-dark/95"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-primary-blue hover:bg-primary-blue/80 text-white px-6 py-3 rounded-xl transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
