export default function Projects() {
  const projects = [
    {
      title: 'MCQ Generation using T5',
      icon: '🧠',
      description: 'System using T5 transformer models to automatically generate multiple-choice questions from educational texts. Implemented text summarization and semantic analysis pipelines to produce contextually relevant distractors.',
      metrics: [
        { label: 'Model', value: 'T5' },
        { label: 'Accuracy', value: '90%+' },
        { label: 'Pipeline', value: 'NLP' }
      ],
      techStack: ['Python', 'PyTorch', 'NLTK', 'SpaCy', 'Transformers'],
      links: [
        { label: 'view_code() →', href: 'https://github.com/sarojpoudel' },
        { label: 'demo() →', href: '#' }
      ]
    },
    {
      title: 'E-commerce Website',
      icon: '�',
      description: 'Full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Features responsive React front-end, Node.js/Express back-end, and MongoDB for data storage.',
      metrics: [
        { label: 'Stack', value: 'MERN' },
        { label: 'Features', value: '15+' },
        { label: 'API', value: 'REST' }
      ],
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Stripe API'],
      links: [
        { label: 'view_code() →', href: 'https://github.com/sarojpoudel' },
        { label: 'live_demo() →', href: '#' }
      ]
    },
    {
      title: 'Chess Game Implementation',
      icon: '♟️',
      description: 'Full-featured chess application with move validation, game-state tracking, and AI opponent. Developed with Object-Oriented Design principles and simple GUI for board visualization.',
      metrics: [
        { label: 'Language', value: 'C++' },
        { label: 'AI', value: 'Yes' },
        { label: 'GUI', value: 'Custom' }
      ],
      techStack: ['C++', 'CMake', 'OOP', 'Game Logic', 'AI'],
      links: [
        { label: 'view_code() →', href: 'https://github.com/sarojpoudel' },
        { label: 'play_game() →', href: '#' }
      ]
    },
    {
      title: 'Weather App',
      icon: '🌤️',
      description: 'Web application that fetches and displays real-time weather data and five-day forecast. Designed with intuitive UI using React Hooks for state management and Axios for API requests.',
      metrics: [
        { label: 'Framework', value: 'React' },
        { label: 'Real-time', value: 'Yes' },
        { label: 'Forecast', value: '5 days' }
      ],
      techStack: ['React', 'JavaScript', 'Axios', 'CSS', 'Weather API'],
      links: [
        { label: 'view_code() →', href: 'https://github.com/sarojpoudel' },
        { label: 'live_demo() →', href: '#' }
      ]
    },
    {
      title: 'Invigilator Management System',
      icon: '📋',
      description: 'Web-based tool for scheduling exam invigilation, tracking assignments, and recording attendance. Implemented user roles (admin, invigilator, student) and RESTful APIs for CRUD operations.',
      metrics: [
        { label: 'Users', value: '3 roles' },
        { label: 'API', value: 'REST' },
        { label: 'Database', value: 'MongoDB' }
      ],
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
      links: [
        { label: 'view_code() →', href: 'https://github.com/sarojpoudel' },
        { label: 'system_demo() →', href: '#' }
      ]
    },
    {
      title: 'Cash Flow Minimizer',
      icon: '💰',
      description: 'Algorithmic solution using graph theory to optimize transaction networks and minimize net cash transfers. Implemented efficient algorithms for financial optimization.',
      metrics: [
        { label: 'Algorithm', value: 'Graph' },
        { label: 'Optimization', value: 'Yes' },
        { label: 'Efficiency', value: 'O(n²)' }
      ],
      techStack: ['Graph Theory', 'Algorithms', 'Data Structures', 'Optimization'],
      links: [
        { label: 'view_code() →', href: 'https://github.com/sarojpoudel' },
        { label: 'algorithm() →', href: '#' }
      ]
    },
    {
      title: 'Ant Colony Optimization Visualizer',
      icon: '🐜',
      description: 'Visualization tool for route planning leveraging the Haversine formula on real GPS data. Interactive demonstration of swarm intelligence algorithms.',
      metrics: [
        { label: 'Algorithm', value: 'ACO' },
        { label: 'GPS', value: 'Real data' },
        { label: 'Visual', value: 'Yes' }
      ],
      techStack: ['Ant Colony Optimization', 'GPS Data', 'Visualization', 'Haversine'],
      links: [
        { label: 'view_code() →', href: 'https://github.com/sarojpoudel' },
        { label: 'visualize() →', href: '#' }
      ]
    },
    {
      title: 'Face Mask Detection & Spam Classifier',
      icon: '�',
      description: 'Machine learning models for detecting face masks in images and classifying spam emails. Developed using computer vision and NLP techniques.',
      metrics: [
        { label: 'CV Model', value: 'CNN' },
        { label: 'NLP Model', value: 'Yes' },
        { label: 'Accuracy', value: '90%+' }
      ],
      techStack: ['Computer Vision', 'NLP', 'Machine Learning', 'Image Processing'],
      links: [
        { label: 'view_code() →', href: 'https://github.com/sarojpoudel' },
        { label: 'ml_demo() →', href: '#' }
      ]
    }
  ]

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-bg-dark to-bg-darker">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16 observe">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Neural Projects
          </h2>
          <p className="text-xl text-text-gray-300 max-w-3xl mx-auto">
            Cutting-edge AI systems combining research, innovation, and real-world deployment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden hover:shadow-neural hover:-translate-y-2 transition-all duration-300 observe neural-glow"
            >
              {/* Project Header */}
              <div className="h-48 bg-gradient-to-br from-primary-blue/10 to-primary-purple/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-primary-cyan/5 animate-float"></div>
                <div className="text-6xl z-10">{project.icon}</div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-text-white mb-4">
                  {project.title}
                </h3>
                
                <p className="text-text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="glass rounded-lg p-3 text-center"
                    >
                      <div className="text-lg font-bold text-primary-blue font-mono">
                        {metric.value}
                      </div>
                      <div className="text-xs text-text-gray-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary-blue/10 text-primary-cyan px-3 py-1 rounded-full text-sm border border-primary-blue/20 hover:bg-primary-blue/20 hover:shadow-glow transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="text-primary-cyan hover:text-primary-blue font-mono text-sm font-medium hover:glow transition-all duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
