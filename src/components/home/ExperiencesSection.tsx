import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Wine, Utensils, Building, MapPin } from 'lucide-react';
import rooftopBar from '@/assets/rooftop-bar.jpg';
import diningRestaurant from '@/assets/dining-restaurant.jpg';
import sunsetStrip from '@/assets/sunset-strip.jpg';
import barInterior from '@/assets/bar-interior.jpg';

const experiences = [
  {
    name: 'Rooftop Bar',
    description: 'Watch the sun set over LA from our iconic rooftop lounge',
    icon: Wine,
    image: rooftopBar,
    href: '/dining#rooftop'
  },
  {
    name: 'Fine Dining',
    description: 'California cuisine reimagined through an ethereal lens',
    icon: Utensils,
    image: diningRestaurant,
    href: '/dining#restaurant'
  },
  {
    name: 'The Lounge',
    description: 'Intimate cocktails in a setting of seductive sophistication',
    icon: Building,
    image: barInterior,
    href: '/dining#lounge'
  },
  {
    name: 'West Hollywood',
    description: 'The legendary Sunset Strip at your doorstep',
    icon: MapPin,
    image: sunsetStrip,
    href: '/experiences'
  },
];

export const ExperiencesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 ambient-bg overflow-hidden"
    >
      {/* Particle Effect (subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 px-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Indulge</p>
          <h2 className="font-serif text-display text-foreground">
            Curated Experiences
          </h2>
        </div>

        {/* Horizontal Scroll Cards */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 px-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Spacer */}
          <div className="flex-shrink-0 w-[calc((100vw-1280px)/2)] min-w-[24px]" />
          
          {experiences.map((experience, index) => (
            <Link
              key={experience.name}
              to={experience.href}
              className={`group flex-shrink-0 w-[340px] md:w-[400px] lg:w-[500px] snap-center transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm luxury-card">
                <img 
                  src={experience.image}
                  alt={experience.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    <experience.icon className="w-5 h-5" />
                  </div>
                  
                  {/* Text */}
                  <h3 className="font-serif text-2xl text-foreground mb-2">{experience.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 max-w-xs">{experience.description}</p>
                  
                  {/* Link */}
                  <span className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[0.15em] font-medium group-hover:gap-3 transition-all duration-300">
                    Discover
                    <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
          
          {/* Spacer */}
          <div className="flex-shrink-0 w-[calc((100vw-1280px)/2)] min-w-[24px]" />
        </div>
      </div>
    </section>
  );
};
