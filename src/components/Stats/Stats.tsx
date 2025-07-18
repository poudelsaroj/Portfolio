export default function Stats() {
  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '5', label: 'Certifications Earned' },
    { number: '4', label: 'Years of Study' },
    { number: '8+', label: 'Technologies Mastered' },
    { number: '3', label: 'ML/AI Projects' },
    { number: '2026', label: 'Graduation Year' }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 text-center hover:bg-primary-blue/10 hover:border-primary-blue/50 transition-all duration-300 observe"
            >
              <div className="text-3xl font-bold gradient-text font-mono mb-2">
                {stat.number}
              </div>
              <div className="text-text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
