import React from 'react'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import CSSNeuralBackground from '@/components/Background/CSSNeuralBackground'
import SocialSidebar from '@/components/Layout/SocialSidebar'
import Footer from '@/components/Layout/Footer'
import TawkTo from '@/components/Chat/TawkTo'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  title: 'Saroj Poudel - AI Engineer | Neural Systems Architect',
  description: 'Computer engineering student specializing in artificial intelligence, machine learning, computer vision, and NLP. Building intelligent systems that learn, adapt, and transform how we interact with technology.',
  keywords: 'AI Engineer, Machine Learning, Computer Vision, NLP, Neural Networks, Deep Learning',
  authors: [{ name: 'Saroj Poudel' }],
  openGraph: {
    title: 'Saroj Poudel - AI Engineer',
    description: 'Building intelligent systems with cutting-edge AI technologies',
    url: 'https://saroj-poudel.com.np',
    siteName: 'Saroj Poudel Portfolio',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              
              // Custom AI chatbot configuration
              Tawk_API.onLoad = function(){
                // Set custom attributes for AI assistant
                Tawk_API.setAttributes({
                  'name': 'Visitor',
                  'email': '',
                  'hash': ''
                });
                
                // Hide default greeting and customize
                Tawk_API.hideWidget();
                
                setTimeout(function() {
                  Tawk_API.showWidget();
                }, 1000);
              };
              
              // Custom welcome message
              Tawk_API.onChatStarted = function(){
                // This will be handled by your admin panel
              };
              
              // Load Tawk.to script
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6872384176aca4190cb94599/1ivv2nghf';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </head>
      <body className="neural-theme bg-bg-dark text-text-white overflow-x-hidden">
        <CSSNeuralBackground />
        <SocialSidebar />
        {children}
        <Footer />
        <TawkTo />
      </body>
    </html>
  )
}
