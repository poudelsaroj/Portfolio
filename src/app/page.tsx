import React from 'react'
import Hero from '@/components/Hero/Hero'
import Stats from '@/components/Stats/Stats'
import Skills from '@/components/Skills/Skills'
import Education from '@/components/Education/Education'
import Certifications from '@/components/Certifications/Certifications'
import Projects from '@/components/Projects/Projects'
import Terminal from '@/components/Terminal/Terminal'
import Contact from '@/components/Contact/Contact'
import Header from '@/components/Layout/Header'
import NeuralCanvas from '@/components/Background/NeuralCanvas'
import ScanOverlay from '@/components/Background/ScanOverlay'

export default function Home() {
  return (
    <>
      {/* Background Effects */}
      <NeuralCanvas />
      <ScanOverlay />
      
      {/* Main Content */}
      <main className="relative min-h-screen bg-bg-dark text-text-white">
        <Header />
        
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <Stats />

        {/* Skills Section */}
        <Skills />

        {/* Education Section */}
        {/* <Education /> */}

        {/* Certifications Section */}
        <Certifications />

        {/* Projects Section */}
        <Projects />

        {/* Terminal Section */}
        <Terminal />

        {/* Contact Section */}
        <Contact />
      </main>
    </>
  )
}
