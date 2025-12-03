import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import rooftopBar from '@/assets/rooftop-bar.jpg';

export const FinalCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={rooftopBar}
          alt="The Valorian Rooftop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-radial-gold opacity-30" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 
          className={`font-serif text-display-lg md:text-display-xl text-foreground mb-6 text-glow-lg transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          Your Escape Awaits
        </h2>
        
        <p 
          className={`text-foreground/70 text-lg md:text-xl mb-10 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Limited availability • Book now
        </p>
        
        <div 
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Button variant="hero" className="group animate-pulse-glow">
            Reserve Your Stay
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Button>
        </div>
        
        <p 
          className={`mt-8 text-primary text-sm transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Starting from $450 per night
        </p>
      </div>
    </section>
  );
};
