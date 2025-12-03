import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-main.jpg';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById('brand-intro');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 scale-110 animate-[scale-in_20s_ease-out_forwards]"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Ambient Effects */}
        <div className="absolute inset-0 bg-gradient-radial-amethyst opacity-50" />
        <div className="absolute inset-0 bg-gradient-radial-gold opacity-20" />
        {/* Grain Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow Text */}
        <p 
          className={`text-primary text-xs uppercase tracking-[0.3em] mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          West Hollywood • Sunset Strip
        </p>

        {/* Main Headline */}
        <h1 
          className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-display-xl text-foreground mb-6 text-glow transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          THE VALORIAN
        </h1>

        {/* Subheadline */}
        <p 
          className={`text-foreground/80 text-lg md:text-xl lg:text-2xl font-light tracking-wide max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          A fever dream in white<br className="hidden sm:block" />
          <span className="text-primary/80">Where elegance meets desire</span>
        </p>

        {/* CTA Button */}
        <div 
          className={`transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Button variant="hero" className="group">
            Book Your Escape
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToContent}
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/60 hover:text-primary transition-all duration-500 cursor-pointer ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1.2s' }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce-subtle" />
      </button>
    </section>
  );
};
