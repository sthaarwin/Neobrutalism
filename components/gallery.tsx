'use client';

import { useState } from 'react';
import { galleryConfig } from '@/app/api/gallery-config';

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredImages = activeCategory === 'all' 
    ? galleryConfig.images 
    : galleryConfig.images.filter(img => img.category === activeCategory);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <>
      <section id="gallery" className="py-24 px-6 bg-background border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-16 tracking-tighter">
            {galleryConfig.title}
          </h2>

          {/* Category Filter */}
          <div className="flex gap-4 mb-12">
            {galleryConfig.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 font-bold border-4 border-foreground transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-foreground text-background' 
                    : 'bg-background text-foreground hover:bg-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className="relative group cursor-pointer overflow-hidden border-4 border-foreground shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-background font-bold text-lg">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
          onClick={closeModal}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); closeModal(); }}
            className="absolute top-6 right-6 text-background text-4xl font-bold hover:text-primary transition-colors"
          >
            ×
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 text-background text-5xl font-bold hover:text-primary transition-colors"
          >
            ‹
          </button>
          
          <img
            src={filteredImages[currentIndex].src}
            alt={filteredImages[currentIndex].alt}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 text-background text-5xl font-bold hover:text-primary transition-colors"
          >
            ›
          </button>
          
          <div className="absolute bottom-6 text-background font-bold">
            {currentIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </>
  );
}