'use client';

import { useEffect, useState } from 'react';

interface Project {
  name: string;
  description: string;
  tags: string[];
  url: string;
  stars: number;
}

interface Category {
  name: string;
  color: string;
  textColor: string;
  projects: Project[];
}

interface ProjectsProps {
  categories: Category[];
}

export function Projects({ categories }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 bg-background border-b-4 border-foreground">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-16 tracking-tighter">
          PROJECTS
        </h2>

        {categories.length === 0 ? (
          <p className="text-foreground text-center">Loading projects...</p>
        ) : (
          categories.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <div className={`inline-block ${category.color} border-4 border-foreground px-6 py-3 mb-8 shadow-[4px_4px_0px_rgba(0,0,0,1)]`}>
                <h3 className={`text-xl lg:text-2xl font-bold ${category.textColor} tracking-tight`}>
                  {category.name}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, index) => (
                  <a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${category.color} border-4 border-foreground p-6 flex flex-col justify-between shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all group cursor-pointer`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <h4 className={`text-xl font-bold ${category.textColor} tracking-tight flex-1`}>
                          {project.name}
                        </h4>
                        {project.stars > 0 && (
                          <span className={`${category.textColor} font-bold text-sm ml-2 flex-shrink-0`}>
                            ★ {project.stars}
                          </span>
                        )}
                      </div>
                      <p className={`${category.textColor} text-sm leading-relaxed mb-4`}>
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
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}