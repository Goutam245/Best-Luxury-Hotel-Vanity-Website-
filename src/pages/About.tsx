import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-main.jpg';
import roomPenthouse from '@/assets/room-penthouse.jpg';

const pillars = [
  {
    title: 'Dream',
    description: 'A sanctuary for the imagination where reality bends to beauty and every moment feels lifted from a reverie.'
  },
  {
    title: 'Danger',
    description: 'The thrill of the unexpected. A world where elegance flirts with temptation and nothing is quite as it seems.'
  },
  {
    title: 'Desire',
    description: 'The pursuit of the extraordinary. An uncompromising commitment to experiences that stir the soul.'
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="The Valorian"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-6">Our Story</p>
          <h1 className="font-serif text-display-lg text-foreground mb-6 text-glow">
            "Where elegance flirts with temptation"
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="prose prose-invert prose-lg mx-auto">
            <div className="w-16 h-px bg-primary mb-8" />
            <p className="font-serif text-2xl text-foreground leading-relaxed mb-8">
              Rising above the Sunset Strip, The Valorian is a fever dream in white — a seductive 
              collision of fantasy and fame.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Within its translucent walls, glamour hides danger and pleasure flirts with consequence. 
              It's a place where creativity, confidence, and desire intertwine — a modern temple for 
              those who live between light and shadow.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cross the threshold and time seems to slow, as if you've followed a White Rabbit into 
              a world where rules dissolve and beauty bends. Refined yet untamed, The Valorian invites 
              guests to drift beyond reality, where every reflection hints at another world.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Here, allure is the rule, and transcendence is always one drink — or one glance — away.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="py-24 section-charcoal">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Our Essence</p>
            <h2 className="font-serif text-display text-foreground">Three Pillars</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className="glass-card p-10 text-center group hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-primary flex items-center justify-center">
                  <span className="font-serif text-xl text-primary">{index + 1}</span>
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design & Architecture */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="w-16 h-px bg-primary mb-6" />
              <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Design</p>
              <h2 className="font-serif text-display text-foreground mb-6">Architecture of Dreams</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The Valorian's design speaks in whispers. Luminous whites and soft contrasts create 
                spaces that feel both intimate and infinite. Custom furnishings, curated art, and 
                thoughtful details transform every corner into a moment of discovery.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our design philosophy embraces minimalism charged with emotion — clean lines that 
                hold back chaos, surfaces that play with light, and proportions that inspire awe 
                without overwhelming the senses.
              </p>
              <Button variant="outline">View Gallery</Button>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img 
                src={roomPenthouse}
                alt="Design Detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 section-charcoal">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-px bg-primary mx-auto mb-8" />
          <blockquote className="font-serif text-heading-lg italic text-foreground mb-8">
            "The Valorian is not trying to be 'cool.' It simply is. Our design conveys intrigue 
            through simplicity and proportion. A whisper will travel farther than a shout."
          </blockquote>
          <p className="text-primary text-sm uppercase tracking-wider">— Design Philosophy</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
