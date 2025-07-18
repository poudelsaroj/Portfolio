'use client'

import { useState } from 'react'

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'C++', 'C']
    },
    {
      title: 'Web & Frameworks',
      skills: ['React', 'Node.js', 'Express', 'HTML/CSS']
    },
    {
      title: 'ML & DL Frameworks',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'NLTK/SpaCy']
    },
    {
      title: 'Databases & Tools',
      skills: ['MongoDB', 'SQL', 'Git', 'Docker']
    },
    {
      title: 'Cloud & Deployment',
      skills: ['AWS (EC2, S3)', 'Heroku', 'Cloud Deployment', 'CI/CD']
    },
    {
      title: 'AI & Machine Learning',
      skills: ['Neural Networks', 'Computer Vision', 'NLP', 'Deep Learning']
    },
    {
      title: 'Data Science',
      skills: ['Pandas/NumPy', 'Data Visualization', 'Statistical Analysis', 'Feature Engineering']
    },
    {
      title: 'Specialized Skills',
      skills: ['Graph Theory', 'Algorithms', 'API Development', 'Payment Integration']
    }
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary-cyan rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-primary-blue rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-primary-cyan rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary-blue rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16 observe">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Neural Architecture
          </h2>
          <p className="text-xl text-text-gray-300 max-w-3xl mx-auto">
            Advanced AI systems engineering with cutting-edge machine learning frameworks and neural network architectures
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:bg-primary-blue/5 hover:border-primary-blue/30 transition-all duration-500 observe neural-glow group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl font-semibold text-primary-cyan group-hover:text-white transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills as Animated Tags */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="relative group/skill cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className={`
                      px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${hoveredSkill === skill 
                        ? 'bg-gradient-to-r from-primary-blue/30 to-primary-cyan/30 text-white border border-primary-cyan/50 shadow-lg scale-105 transform' 
                        : 'bg-gradient-to-r from-bg-glass/40 to-bg-glass/60 text-text-gray-300 hover:from-primary-blue/20 hover:to-primary-cyan/20 hover:text-white border border-transparent hover:border-primary-cyan/30'
                      }
                    `}>
                      {skill}
                    </div>
                    
                    {/* Hover Effect */}
                    {hoveredSkill === skill && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-blue/20 to-primary-cyan/20 animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-primary-cyan/30 to-transparent transform group-hover:scale-x-110 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Skill Cloud - Alternative View */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-primary-cyan mb-8">Complete Skill Ecosystem</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
            {skillCategories.flatMap(category => category.skills).map((skill, index) => (
              <div
                key={index}
                className="px-3 py-2 bg-gradient-to-r from-bg-glass/30 to-bg-glass/50 text-text-gray-300 rounded-lg text-sm font-mono hover:from-primary-blue/20 hover:to-primary-cyan/20 hover:text-white border border-transparent hover:border-primary-cyan/30 transition-all duration-300 cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
