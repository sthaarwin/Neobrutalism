'use client';

import { Hero } from '@/components/hero';
import { Expertise } from '@/components/expertise';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { useEffect, useState } from 'react';

interface Project {
  name: string;
  description: string;
  tags: string[];
  url: string;
  stars: number;
}

interface Proficiency {
  name: string;
  percentage: number;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [proficiencies, setProficiencies] = useState<Proficiency[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/github')
      .then((res) => res.json())
      .then((data) => {
        if (data.projects) setProjects(data.projects);
        if (data.proficiencies) setProficiencies(data.proficiencies);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Expertise proficiencies={loading ? [] : proficiencies} />
      <Projects projects={loading ? [] : projects} />
      <Contact />
    </main>
  );
}