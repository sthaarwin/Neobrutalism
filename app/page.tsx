import { Hero } from '@/components/hero';
import { Gallery } from '@/components/gallery';
import { Proficiencies } from '@/components/proficiencies';
import { ProjectsSkeleton } from '@/components/projects-skeleton';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Suspense } from 'react';
import data from '@/app/api/github-data';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Suspense fallback={null}>
        <Gallery />
      </Suspense>
      <Proficiencies proficiencies={data.proficiencies} />
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects categories={data.categories} />
      </Suspense>
      <Contact />
    </main>
  );
}