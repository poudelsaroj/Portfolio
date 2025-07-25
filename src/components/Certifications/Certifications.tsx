export default function Certifications() {
  const certifications = [
    {
      title: 'NAAMII AI SCHOOL (ANAIS 2024)',
      issuer: 'NAAMII',
      date: '2024',
      description: 'Completed courses on geometric deep learning, graph neural networks, transformers, and attention mechanisms. Implemented self-supervised learning techniques and 3D reconstruction.',
      status: 'Completed',
      link: '#'
    },
    {
      title: 'Samsung Innovation Campus',
      issuer: 'Samsung',
      date: '2024',
      description: 'Acquired fundamental data science and Python programming skills through a structured curriculum. Developed core data structures, algorithms, and machine learning foundations.',
      status: 'Completed',
      link: '#'
    },
    {
      title: 'Data Scientist with Python',
      issuer: 'DataCamp',
      date: '2024',
      description: 'Gained proficiency in data manipulation, visualization, and statistical analysis using Pandas and NumPy. Built and evaluated machine learning models for real-world datasets.',
      status: 'Certified',
      link: '#'
    },
    {
      title: 'React Basics',
      issuer: 'Meta/Coursera',
      date: '2024',
      description: 'Covered React fundamentals: component-based architecture, state management, and Hooks to build dynamic UIs.',
      status: 'Completed',
      link: '#'
    },
    {
      title: 'Programming with JavaScript',
      issuer: 'Meta/Coursera',
      date: '2024',
      description: 'Mastered ES6 syntax, DOM manipulation, asynchronous programming, and building interactive web applications.',
      status: 'Completed',
      link: '#'
    }
  ]

  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-bg-dark to-bg-darker">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16 observe">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Neural Certifications
          </h2>
          <p className="text-xl text-text-gray-300 max-w-3xl mx-auto">
            Professional certifications and advanced training in AI, machine learning, and software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 hover:bg-primary-blue/5 hover:border-primary-blue/30 transition-all duration-300 observe neural-glow group"
            >
              {/* Certification Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-white mb-1 group-hover:text-primary-cyan transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-text-gray-300 mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-primary-cyan font-mono">
                      {cert.date}
                    </span>
                    <span className="text-xs px-2 py-1 bg-primary-blue/20 text-primary-cyan rounded-full border border-primary-blue/30">
                      {cert.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-text-gray-400 mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Action Link */}
              <a
                href={cert.link}
                className="inline-flex items-center gap-2 text-primary-cyan hover:text-primary-blue text-sm font-medium transition-colors group/link"
              >
                <span>verify_credentials()</span>
                <span className="text-xs group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-cyan mb-6 text-center">
              Certification Achievements
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue font-mono mb-2">8</div>
                <div className="text-sm text-text-gray-300">Total Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-purple font-mono mb-2">5</div>
                <div className="text-sm text-text-gray-300">Cloud Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-cyan font-mono mb-2">3</div>
                <div className="text-sm text-text-gray-300">AI Specializations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-green font-mono mb-2">2024</div>
                <div className="text-sm text-text-gray-300">Latest Certification</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
