'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Tawk_API?: any
    Tawk_LoadStart?: Date
  }
}

export default function TawkTo() {
  useEffect(() => {
    // Check if already loaded
    if (document.querySelector('script[src*="tawk.to"]')) {
      return
    }

    // Direct script injection - exactly as provided by Tawk.to
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()
    
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://embed.tawk.to/6872384176aca4190cb94599/1ivv2nghf'
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    
    const firstScript = document.getElementsByTagName('script')[0]
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript)
    }

    // Enhanced customization for AI chatbot experience
    window.Tawk_API.onLoad = function() {
      console.log('Tawk.to loaded - customizing...')
      
      // Custom configuration for AI theme
      window.Tawk_API.setAttributes({
        name: 'Visitor',
        email: '',
        hash: ''
      })

      // Function to remove default text and apply custom styling
      const customizeWidget = () => {
        // Hide all default text elements
        const textElements = document.querySelectorAll([
          '.tawk-bubble-text',
          '.tawk-min-bubble-text', 
          '#tawk-bubble .tawk-bubble-text',
          '[class*="bubble-text"]',
          '[class*="tawk-text"]'
        ].join(','))
        
        textElements.forEach(el => {
          const element = el as HTMLElement
          if (element) {
            element.style.display = 'none'
            element.style.visibility = 'hidden'
            element.style.opacity = '0'
            element.remove()
          }
        })

        // Force hide any text content in bubble
        const bubble = document.querySelector('#tawk-bubble') as HTMLElement
        if (bubble) {
          // Remove all text nodes
          const walker = document.createTreeWalker(
            bubble,
            NodeFilter.SHOW_TEXT
          )
          
          const textNodes: Text[] = []
          let node
          while (node = walker.nextNode()) {
            textNodes.push(node as Text)
          }
          
          textNodes.forEach(textNode => {
            if (textNode.textContent && textNode.textContent.trim()) {
              textNode.textContent = ''
            }
          })
        }
      }

      // Apply customizations immediately and with delays
      customizeWidget()
      setTimeout(customizeWidget, 100)
      setTimeout(customizeWidget, 500)
      setTimeout(customizeWidget, 1000)
      setTimeout(customizeWidget, 2000)

      // Watch for changes and reapply customizations
      const observer = new MutationObserver(customizeWidget)
      if (document.body) {
        observer.observe(document.body, { 
          childList: true, 
          subtree: true, 
          characterData: true 
        })
      }
    }

    // Add enhanced CSS for AI chatbot styling
    const style = document.createElement('style')
    style.textContent = `
      /* Aggressively hide ALL default Tawk.to text */
      #tawk-bubble .tawk-bubble-text,
      .tawk-bubble-text,
      .tawk-min-bubble-text,
      .tawk-text-overlay,
      .tawk-bubble-text-container,
      #tawk-bubble span,
      #tawk-bubble div[class*="text"],
      #tawk-bubble [class*="bubble-text"],
      #tawk-bubble [class*="tawk-text"],
      #tawk-bubble > *:not(::before):not(::after) {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        font-size: 0 !important;
        line-height: 0 !important;
        height: 0 !important;
        width: 0 !important;
        overflow: hidden !important;
      }
      
      /* Custom AI chatbot bubble styling */
      #tawk-bubble {
        background: linear-gradient(135deg, #60a5fa 0%, #a855f7 100%) !important;
        border: 1px solid rgba(96, 165, 250, 0.5) !important;
        box-shadow: 
          0 8px 32px rgba(96, 165, 250, 0.3),
          0 0 0 1px rgba(96, 165, 250, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
        border-radius: 50% !important;
        width: 64px !important;
        height: 64px !important;
        position: relative !important;
        overflow: hidden !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
      
      /* Add AI icon - force it to be the only visible content */
      #tawk-bubble::before {
        content: '🤖' !important;
        position: absolute !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
        font-size: 28px !important;
        z-index: 999 !important;
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) !important;
      }
      
      /* Clear any potential text content */
      #tawk-bubble {
        text-indent: -9999px !important;
        color: transparent !important;
        font-size: 0 !important;
      }
      
      /* Hover effects for AI bubble */
      #tawk-bubble:hover {
        background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%) !important;
        box-shadow: 
          0 12px 40px rgba(96, 165, 250, 0.4),
          0 0 0 1px rgba(96, 165, 250, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
        transform: scale(1.08) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }
      
      /* Pulsing animation for the AI bubble */
      #tawk-bubble {
        animation: aiPulse 3s ease-in-out infinite !important;
      }
      
      @keyframes aiPulse {
        0%, 100% {
          box-shadow: 
            0 8px 32px rgba(96, 165, 250, 0.3),
            0 0 0 0 rgba(96, 165, 250, 0.4);
        }
        50% {
          box-shadow: 
            0 8px 32px rgba(96, 165, 250, 0.3),
            0 0 0 15px rgba(96, 165, 250, 0);
        }
      }
      
      /* Custom chat window styling */
      .tawk-widget {
        border-radius: 20px !important;
        border: 1px solid rgba(96, 165, 250, 0.3) !important;
        box-shadow: 
          0 25px 70px rgba(0, 0, 0, 0.4),
          0 0 0 1px rgba(96, 165, 250, 0.1) !important;
        backdrop-filter: blur(20px) !important;
        background: rgba(15, 23, 42, 0.95) !important;
        overflow: hidden !important;
      }
      
      /* Chat header customization */
      .tawk-widget .tawk-header {
        background: linear-gradient(135deg, #1e293b 0%, #334155 100%) !important;
        border-bottom: 1px solid rgba(96, 165, 250, 0.2) !important;
      }
      
      /* All Tawk.to elements positioning */
      div[id*="tawk"],
      iframe[src*="tawk"],
      *[class*="tawk"] {
        z-index: 999999 !important;
        position: fixed !important;
      }
    `
    document.head.appendChild(style)

    console.log('AI Chatbot initialized')

    return () => {
      // Cleanup
      const tawkScript = document.querySelector('script[src*="tawk.to"]')
      if (tawkScript?.parentNode) {
        tawkScript.parentNode.removeChild(tawkScript)
      }
    }
  }, [])

  return null
}
