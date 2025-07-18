'use client'

import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'

interface ContactFormData {
  user_name: string
  user_email: string
  subject: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('')

    try {
      // Get EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS not configured. Please set up environment variables.')
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        e.target as HTMLFormElement,
        publicKey
      )
      
      setStatus('Message sent successfully! 🤖 Neural network activated!')
      setFormData({ user_name: '', user_email: '', subject: '', message: '' })
      
      // Optional: Trigger Tawk.to for immediate response
      if (typeof window !== 'undefined' && (window as any).Tawk_API) {
        (window as any).Tawk_API.toggle()
      }
      
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('Failed to send message. Please try the chat widget! 💬')
    } finally {
      setIsLoading(false)
    }
  }

  const contactMethods = [
    {
      icon: '📧',
      label: 'Neural Interface',
      value: 'sarojpoudel@example.com',
      link: 'mailto:sarojpoudel@example.com'
    },
    {
      icon: '💻',
      label: 'Code Repository',
      value: 'github.com/sarojpoudel',
      link: 'https://github.com/sarojpoudel'
    },
    {
      icon: '🔗',
      label: 'Professional Network',
      value: 'linkedin.com/in/sarojpoudel',
      link: 'https://linkedin.com/in/sarojpoudel'
    },
    {
      icon: '�',
      label: 'Contact Number',
      value: '+977-9848172487',
      link: 'tel:+977-9848172487'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Lalitpur, Nepal',
      link: 'https://maps.google.com/?q=Lalitpur,Nepal'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-bg-darker to-bg-dark">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16 observe">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Initialize Connection
          </h2>
          <p className="text-xl text-text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on groundbreaking AI projects? Let&apos;s build the future of intelligent systems together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 observe">
            <h3 className="text-2xl font-bold text-primary-cyan mb-6 font-mono">
              Send Neural Message
            </h3>
            
            <form onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-gray-300 mb-2 font-mono text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="w-full glass rounded-lg px-4 py-3 text-text-white placeholder-text-gray-400 border border-border-glass focus:border-primary-cyan focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-text-gray-300 mb-2 font-mono text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="w-full glass rounded-lg px-4 py-3 text-text-white placeholder-text-gray-400 border border-border-glass focus:border-primary-cyan focus:outline-none transition-colors"
                    placeholder="your.email@domain.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-text-gray-300 mb-2 font-mono text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full glass rounded-lg px-4 py-3 text-text-white placeholder-text-gray-400 border border-border-glass focus:border-primary-cyan focus:outline-none transition-colors"
                  placeholder="AI Collaboration Opportunity"
                />
              </div>
              
              <div>
                <label className="block text-text-gray-300 mb-2 font-mono text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full glass rounded-lg px-4 py-3 text-text-white placeholder-text-gray-400 border border-border-glass focus:border-primary-cyan focus:outline-none transition-colors resize-vertical"
                  placeholder="Let&apos;s discuss how we can build intelligent systems together..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-neural bg-gradient-to-r from-primary-blue to-primary-purple text-white py-4 rounded-xl font-semibold shadow-neural hover:shadow-glow hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Transmitting...' : 'Send via Neural Network 🚀'}
              </button>
              
              {status && (
                <div className={`p-4 rounded-lg text-center font-mono ${
                  status.includes('successfully') 
                    ? 'bg-accent-green/20 text-accent-green border border-accent-green/30' 
                    : 'bg-accent-orange/20 text-accent-orange border border-accent-orange/30'
                }`}>
                  {status}
                </div>
              )}
            </form>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6 observe">
            <h3 className="text-2xl font-bold text-primary-cyan mb-6 font-mono">
              Alternative Channels
            </h3>
            
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass rounded-xl p-6 hover:bg-primary-cyan/10 hover:border-primary-cyan/50 hover:shadow-glow transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{method.icon}</div>
                  <div>
                    <div className="font-semibold text-text-white group-hover:text-primary-cyan transition-colors">
                      {method.label}
                    </div>
                    <div className="text-text-gray-300 font-mono text-sm break-all">
                      {method.value}
                    </div>
                  </div>
                </div>
              </a>
            ))}
            
            {/* Live Chat CTA */}
            <div className="glass rounded-xl p-6 bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border-primary-cyan/30">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">💬</div>
                <div>
                  <div className="font-semibold text-primary-cyan">
                    Instant AI Assistant
                  </div>
                  <div className="text-text-gray-300 text-sm mb-3">
                    Click the chat widget in the bottom-right corner for immediate assistance!
                  </div>
                  <button
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).Tawk_API) {
                        (window as any).Tawk_API.toggle()
                      }
                    }}
                    className="bg-primary-cyan text-bg-dark px-4 py-2 rounded-lg font-semibold hover:bg-primary-blue transition-colors"
                  >
                    Open Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
