export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Computer Engineering',
      institution: 'Pulchowk Engineering Campus',
      location: 'Lalitpur, Nepal',
      duration: '2022 - 2026 (Expected)',
      status: 'In Progress',
      icon: '🎓',
      description: 'Comprehensive computer engineering program with focus on AI, machine learning, and software development.',
      coursework: [
        'Data Structures & Algorithms',
        'Database Systems',
        'Operating Systems',
        'Artificial Intelligence',
        'Web Technologies',
        'Computer Networks',
        'Software Engineering',
        'Machine Learning'
      ],
      achievements: [
        'Strong foundation in AI and ML',
        'Active in hackathons and competitions',
        'Completed multiple industry projects',
        'Participated in NAAMII AI School'
      ]
    },
    {
      degree: 'AI Fellowship',
      institution: 'FuseMachine',
      location: 'Nepal',
      duration: '2024',
      status: 'Completed',
      icon: '🤖',
      description: 'Intensive AI fellowship program focusing on practical machine learning applications and industry best practices.',
      coursework: [
        'Python Programming',
        'MLOps & Model Deployment',
        'Deep Learning Fundamentals',
        'Computer Vision Applications',
        'Machine Learning Pipeline Design',
        'Model Optimization Techniques',
        'Production ML Systems',
        'AI Ethics & Responsible AI'
      ],
      achievements: [
        'Hands-on experience with ML pipelines',
        'Industry-standard MLOps practices',
        'Computer vision project implementation',
        'Collaborative AI development'
      ]
    }
  ]

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-bg-dark to-bg-darker">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16 observe">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Academic Foundation
          </h2>
          <p className="text-xl text-text-gray-300 max-w-3xl mx-auto">
            Building technical expertise through rigorous academic training and practical application
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass rounded-xl p-8 hover:bg-primary-blue/5 hover:border-primary-blue/30 transition-all duration-300 observe neural-glow"
            >
              {/* Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className="text-5xl flex-shrink-0">
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-cyan mb-2">
                        {edu.degree}
                      </h3>
                      <div className="text-xl text-text-white font-semibold">
                        {edu.institution}
                      </div>
                      <div className="text-text-gray-300 font-mono">
                        {edu.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-primary-cyan font-mono font-semibold">
                        {edu.duration}
                      </div>
                      <div className="text-accent-green text-sm font-mono">
                        {edu.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-gray-300 mb-6 leading-relaxed">
                {edu.description}
              </p>

              {/* Coursework and Achievements */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-lg font-semibold text-primary-cyan mb-4 font-mono">
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <div
                        key={courseIndex}
                        className="glass rounded-lg p-3 hover:bg-primary-blue/10 transition-colors"
                      >
                        <div className="text-text-white font-mono text-sm">
                          {course}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-primary-cyan mb-4 font-mono">
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="text-accent-green text-sm mt-1">▸</div>
                        <div className="text-text-gray-300 text-sm">
                          {achievement}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-border-glass">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-cyan">4</div>
                    <div className="text-text-gray-300 text-sm font-mono">Years Program</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-cyan">8+</div>
                    <div className="text-text-gray-300 text-sm font-mono">Core Subjects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-cyan">10+</div>
                    <div className="text-text-gray-300 text-sm font-mono">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-cyan">2026</div>
                    <div className="text-text-gray-300 text-sm font-mono">Expected Graduation</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
