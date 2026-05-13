import { Hero } from '@/components/hero';
import { Gallery } from '@/components/gallery';
import { Proficiencies } from '@/components/proficiencies';
import { ProjectsSkeleton } from '@/components/projects-skeleton';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Suspense } from 'react';

async function getGitHubData() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/github`, { 
      next: { revalidate: 3600 },
      cache: 'force-cache'
    });
    
    if (!res.ok) return { categories: [], proficiencies: [] };
    return res.json();
  } catch {
    return { categories: [], proficiencies: [] };
  }
}

export default async function Home() {
  const { categories, proficiencies } = await getGitHubData();

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Suspense fallback={null}>
        <Gallery />
      </Suspense>
      <Proficiencies proficiencies={proficiencies} />
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects categories={categories} />
      </Suspense>
      <Contact />
    </main>
  );
}