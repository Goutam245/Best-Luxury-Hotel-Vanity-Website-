import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import sunsetStrip from '@/assets/sunset-strip.jpg';

const nearbyPlaces = [
  { name: 'Chateau Marmont', distance: '0.3 mi' },
  { name: 'The Comedy Store', distance: '0.5 mi' },
  { name: 'Rainbow Bar & Grill', distance: '0.4 mi' },
];

export const LocationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={sunsetStrip}
          alt="West Hollywood Sunset Strip"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="glass-card p-8 md:p-12 rounded-sm" style={{ background: 'linear-gradient(135deg, hsl(157 74% 17% / 0.9), hsl(220 30% 7% / 0.95))' }}>
              {/* Decorative Line */}
              <div className="w-20 h-px bg-primary mb-8" />
              
              {/* Location Label */}
              <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Location</p>
              
              {/* Headline */}
              <h2 className="font-serif text-heading-lg md:text-display text-foreground mb-6">
                Sunset Strip,<br />West Hollywood
              </h2>
              
              {/* Description */}
              <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                At the crossroads of legend and reinvention. The Valorian rises where rock icons played, 
                where Hollywood dreams are born, and where the night never truly ends.
              </p>

              {/* Nearby Places */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-4">Nearby</p>
                <ul className="space-y-3">
                  {nearbyPlaces.map((place) => (
                    <li key={place.name} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/80 text-sm">{place.name}</span>
                      <span className="text-muted-foreground text-xs ml-auto">{place.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button variant="outline" className="group">
                Explore Neighborhood
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
            </div>
          </div>

          {/* Map Placeholder Side */}
          <div 
            className={`hidden lg:block transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* This would be a custom styled Google Map */}
            <div className="aspect-square rounded-sm overflow-hidden border border-primary/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.858044456372!2d-118.38!3d34.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA1JzI0LjAiTiAxMTjCsDIyJzQ4LjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(90%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Valorian Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
