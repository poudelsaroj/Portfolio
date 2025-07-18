/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#60a5fa',
          purple: '#a855f7',
          cyan: '#22d3ee',
        },
        accent: {
          green: '#10b981',
          orange: '#f59e0b',
        },
        text: {
          white: '#ffffff',
          gray: {
            100: '#f3f4f6',
            300: '#d1d5db',
            400: '#9ca3af',
          }
        },
        bg: {
          dark: '#0f172a',
          darker: '#020617',
          card: 'rgba(15, 23, 42, 0.8)',
          glass: 'rgba(255, 255, 255, 0.05)',
        },
        border: {
          glass: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
        'data-flow': 'data-flow 2s ease-in-out infinite',
        'scan-lines': 'scan-lines 0.1s linear infinite',
        'logo-glow': 'logoGlow 3s ease-in-out infinite alternate',
        'text-float': 'text-float 6s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(40) 1s both',
        'detection-pulse': 'detection-pulse 3s ease-in-out infinite',
        'scan-box': 'scan-box 4s ease-in-out infinite',
        'ripple': 'ripple 4s ease-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'point-float': 'pointFloat 4s ease-in-out infinite',
        'ripple': 'ripple 4s ease-out infinite',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        'neural-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.3)', opacity: '1' }
        },
        'data-flow': {
          '0%': { opacity: '0.3', transform: 'scaleX(0)' },
          '50%': { opacity: '1', transform: 'scaleX(1)' },
          '100%': { opacity: '0.3', transform: 'scaleX(0)' }
        },
        'scan-lines': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 3px' }
        },
        logoGlow: {
          '0%': { filter: 'drop-shadow(0 0 5px rgba(96, 165, 250, 0.5))' },
          '100%': { filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.8))' }
        },
        'text-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'detection-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' }
        },
        'scan-box': {
          '0%, 100%': { 
            borderColor: '#22d3ee',
            boxShadow: '0 0 5px #22d3ee'
          },
          '50%': { 
            borderColor: '#10b981',
            boxShadow: '0 0 15px #10b981'
          }
        },
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' }
        },
        pointFloat: {
          '0%, 100%': { 
            transform: 'translateZ(0px) scale(1)',
            opacity: '0.6'
          },
          '50%': { 
            transform: 'translateZ(10px) scale(1.2)',
            opacity: '1'
          }
        },
        ripple: {
          '0%': { transform: 'scale(0.5)', opacity: '1' },
          '100%': { transform: 'scale(2.5)', opacity: '0' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        }
      },
      boxShadow: {
        'neural': '0 20px 25px -5px rgba(96, 165, 250, 0.1)',
        'glow': '0 0 20px rgba(96, 165, 250, 0.3)',
      }
    },
  },
  plugins: [],
}
