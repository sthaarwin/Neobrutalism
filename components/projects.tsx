'use client';

import Link from 'next/link';

interface Project {
  name: string;
  description: string;
  tags: string[];
  url: string;
  stars: number;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 bg-background border-b-4 border-foreground">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-16 tracking-tighter">
          PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <p className="text-foreground col-span-full text-center">Loading projects...</p>
          ) : (
            projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary border-4 border-foreground p-6 flex flex-col justify-between shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all group cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-foreground tracking-tight flex-1">
                      {project.name}
                    </h3>
                    {project.stars > 0 && (
                      <span className="text-foreground font-bold text-sm ml-2 flex-shrink-0">
                        ★ {project.stars}
                      </span>
                    )}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-foreground px-2 py-1 text-xs font-bold text-foreground bg-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
}