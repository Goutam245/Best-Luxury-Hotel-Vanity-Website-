import { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { X } from 'lucide-react';
import heroImage from '@/assets/hero-main.jpg';
import rooftopBar from '@/assets/rooftop-bar.jpg';
import roomSuite from '@/assets/room-suite.jpg';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomPenthouse from '@/assets/room-penthouse.jpg';
import diningRestaurant from '@/assets/dining-restaurant.jpg';
import barInterior from '@/assets/bar-interior.jpg';
import sunsetStrip from '@/assets/sunset-strip.jpg';

const images = [
  { src: heroImage, alt: 'The Valorian Lobby', category: 'Interior' },
  { src: rooftopBar, alt: 'Rooftop Bar at Sunset', category: 'Views' },
  { src: roomSuite, alt: 'Deluxe Suite', category: 'Rooms' },
  { src: diningRestaurant, alt: 'Reverie Restaurant', category: 'Dining' },
  { src: roomPenthouse, alt: 'Signature Penthouse', category: 'Rooms' },
  { src: barInterior, alt: 'The Lounge', category: 'Dining' },
  { src: sunsetStrip, alt: 'West Hollywood', category: 'Views' },
  { src: roomDeluxe, alt: 'Premium King Room', category: 'Rooms' },
];

const categories = ['All', 'Rooms', 'Dining', 'Views', 'Interior'];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container max-w-7xl mx-auto px-6">
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Visual Journey</p>
          <h1 className="font-serif text-display-lg text-foreground mb-8">Gallery</h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-300 rounded-full border ${
                  activeCategory === category
                    ? 'bg-primary text-background border-primary'
                    : 'bg-transparent text-foreground/60 border-primary/30 hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden rounded-sm">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-end">
                    <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-primary uppercase tracking-wider">{image.category}</p>
                      <p className="text-foreground text-sm">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-primary hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage}
            alt="Gallery Image"
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
