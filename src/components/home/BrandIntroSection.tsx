import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-main.jpg';

export const BrandIntroSection = () => {
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
      id="brand-intro"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden section-navy-gradient"
    >
      <div className="container max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src={heroImage}
                alt="The Valorian Interior"
                className="w-full h-full object-cover"
              />
              {/* Vignette Effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_20px_rgba(10,22,40,0.5)]" />
              {/* Gold Accent Border */}
              <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent" />
            </div>
            {/* Floating Accent Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-primary/20 rounded-sm hidden lg:block" />
          </div>

          {/* Content Side */}
          <div 
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Glass Card */}
            <div className="glass-card p-8 md:p-12 lg:p-16 rounded-sm">
              {/* Decorative Line */}
              <div className="w-20 h-px bg-primary mb-8" />
              
              {/* Headline */}
              <h2 className="font-serif text-heading-lg md:text-display text-foreground mb-6">
                Step Through the Looking Glass
              </h2>
              
              {/* Body Text */}
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                Rising above the Sunset Strip, The Valorian is a seductive collision of fantasy and fame. 
                Within its translucent walls, glamour hides danger and pleasure flirts with consequence.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                Cross the threshold and time seems to slow, as if you've followed a White Rabbit into a world 
                where rules dissolve and beauty bends. Here, allure is the rule, and transcendence is always 
                one drink — or one glance — away.
              </p>

              {/* CTA */}
              <Button variant="outline" className="group">
                Discover Our Story
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
