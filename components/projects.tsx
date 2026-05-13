'use client';

export function Projects() {
  const projects = [
    {
      name: 'AXTONE',
      description: 'AI that detects and produces Guitar tabs from vocal (mp3) and MIDI files. Combines audio processing with machine learning for music transcription.',
      tags: ['AI', 'JavaScript', 'Audio'],
      color: 'bg-primary',
      textColor: 'text-foreground',
      highlight: true,
      url: 'https://github.com/sthaarwin/AxTone',
      stars: 4
    },
    {
      name: 'PULSEAI',
      description: 'Advanced AI research project exploring neural architectures and machine learning optimization.',
      tags: ['AI', 'Python', 'Research'],
      color: 'bg-secondary',
      textColor: 'text-secondary-foreground',
      url: 'https://github.com/sthaarwin/pulseAI'
    },
    {
      name: 'AXEAID',
      description: 'Guitar toolkit for tuning, timing, and ear training. A comprehensive solution for musicians.',
      tags: ['TypeScript', 'Web', 'Audio'],
      color: 'bg-accent',
      textColor: 'text-accent-foreground',
      url: 'https://github.com/sthaarwin/AxeAid'
    },
    {
      name: 'PORTFOLIO 2.0',
      description: '3D portfolio built with Three.js. Interactive 3D experience showcasing work.',
      tags: ['Three.js', 'TypeScript', '3D'],
      color: 'bg-primary',
      textColor: 'text-foreground',
      url: 'https://github.com/sthaarwin/portfolio-2.0'
    },
    {
      name: 'ECOSNAP',
      description: 'Photo clipping utility for environmental and ecological documentation.',
      tags: ['TypeScript', 'Web'],
      color: 'bg-secondary',
      textColor: 'text-secondary-foreground',
      url: 'https://github.com/sthaarwin/EcoSnap'
    },
    {
      name: 'AXGROUND',
      description: 'Simulated environment for reinforcement learning models based on NEPSE data.',
      tags: ['TypeScript', 'ML', 'Finance'],
      color: 'bg-accent',
      textColor: 'text-accent-foreground',
      url: 'https://github.com/sthaarwin/Axground'
    },
    {
      name: 'NEPGRAPH',
      description: 'Community detection in NEPSE investor networks using graph analysis techniques.',
      tags: ['Python', 'Graph Theory', 'Finance'],
      color: 'bg-primary',
      textColor: 'text-foreground',
      url: 'https://github.com/sthaarwin/Nepgraph'
    },
    {
      name: 'SATYATATHYA',
      description: 'TikTok news authenticity checker. Analyzes and verifies the authenticity of news content.',
      tags: ['Python', 'ML', 'Verification'],
      color: 'bg-secondary',
      textColor: 'text-secondary-foreground',
      url: 'https://github.com/sthaarwin/SatyaTathya'
    },
    {
      name: 'TINYGPT',
      description: 'A tiny transformer model implementation exploring deep learning fundamentals.',
      tags: ['Python', 'Transformers', 'ML'],
      color: 'bg-accent',
      textColor: 'text-accent-foreground',
      url: 'https://github.com/sthaarwin/TinyGPT'
    },
    {
      name: 'GRAPHICSLAB',
      description: 'Computer graphics laboratory work exploring rendering, shaders, and visual effects.',
      tags: ['C++', 'Graphics', 'OpenGL'],
      color: 'bg-primary',
      textColor: 'text-foreground',
      url: 'https://github.com/sthaarwin/GraphicsLab'
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-background border-b-4 border-foreground">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-16 tracking-tighter">
          PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${project.color} border-4 border-foreground p-6 flex flex-col justify-between shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all group cursor-pointer`}
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-2xl font-bold ${project.textColor} tracking-tight flex-1`}>
                    {project.name}
                  </h3>
                  {project.stars && (
                    <span className={`${project.textColor} font-bold text-sm ml-2 flex-shrink-0`}>
                      ★ {project.stars}
                    </span>
                  )}
                </div>
                <p className={`${project.textColor} text-sm leading-relaxed mb-4`}>
                  {project.description}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`border-2 border-foreground px-2 py-1 text-xs font-bold text-foreground bg-white`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
