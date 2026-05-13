'use client';

import { useState, useEffect } from 'react';
import { scrollToSection, scrollToTop } from '@/lib/smooth-scroll';

export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? 'bg-primary border-b-4 border-foreground' : 'bg-background border-b-4 border-foreground'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-foreground cursor-pointer" onClick={scrollToTop}>ARWIN</div>
          <div className="flex gap-8">
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-foreground font-bold hover:text-foreground transition-all hover:bg-primary px-2 py-1 cursor-pointer"
            >
              GALLERY
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-foreground font-bold hover:text-foreground transition-all hover:bg-primary px-2 py-1 cursor-pointer"
            >
              PROJECTS
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground font-bold hover:text-foreground transition-all hover:bg-primary px-2 py-1 cursor-pointer"
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-background border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-none tracking-tighter">
                A DREAMER IN SEARCH OF
              </h1>
              <div className="inline-block bg-primary border-4 border-foreground px-6 py-4">
                <p className="text-5xl lg:text-6xl font-bold text-foreground">INFINITY</p>
              </div>
            </div>

            <p className="text-xl text-muted-foreground font-medium max-w-md leading-relaxed">
              Exploring low-level abstractions, 3D graphics, and AI-powered systems. Building the next generation of digital tools.
            </p>

            <div className="flex gap-4">
              <button 
                onClick={() => scrollToSection('gallery')}
                className="border-4 border-foreground bg-foreground text-background px-8 py-4 font-bold text-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                VIEW WORK
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-4 border-foreground bg-transparent text-foreground px-8 py-4 font-bold text-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>

          {/* Right Column - Color Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary border-4 border-foreground h-48 flex items-center justify-center">
              <span className="text-foreground font-bold text-center text-sm">LANGUAGES</span>
            </div>
            <div className="bg-secondary border-4 border-foreground h-48 flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-center text-sm">LOW-LEVEL</span>
            </div>
            <div className="bg-accent border-4 border-foreground h-48 flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-center text-sm">3D GRAPHICS</span>
            </div>
            <div className="bg-foreground border-4 border-foreground h-48 flex items-center justify-center">
              <span className="text-background font-bold text-center text-sm">AI SYSTEMS</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}