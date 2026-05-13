'use client';

export function Expertise() {
  const expertiseItems = [
    {
      title: 'LANGUAGES',
      color: 'bg-primary',
      textColor: 'text-foreground',
    },
    {
      title: 'LOW-LEVEL',
      color: 'bg-secondary',
      textColor: 'text-secondary-foreground',
    },
    {
      title: '3D GRAPHICS',
      color: 'bg-accent',
      textColor: 'text-accent-foreground',
    },
    {
      title: 'AI SYSTEMS',
      color: 'bg-foreground',
      textColor: 'text-background',
    },
  ];

  return (
    <section id="expertise" className="py-24 px-6 bg-background border-b-4 border-foreground">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-16 tracking-tighter">
          EXPERTISE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className={`${item.color} border-4 border-foreground min-h-64 flex items-center justify-center shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all`}
            >
              <h3 className={`text-3xl lg:text-4xl font-bold ${item.textColor} tracking-tight text-center`}>
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Tech Stack Details */}
        <div className="mt-16 border-4 border-foreground bg-white p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-bold text-foreground mb-8 tracking-tight">LANGUAGE PROFICIENCIES</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['Python', 'TypeScript', 'JavaScript', 'C++', 'React', 'Three.js', 'Next.js', 'Audio Processing', 'Machine Learning', 'Graph Theory'].map((tech) => (
              <div key={tech} className="border-4 border-foreground bg-primary px-4 py-3 font-bold text-foreground text-center text-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
