import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import sunsetStrip from '@/assets/sunset-strip.jpg';
import rooftopBar from '@/assets/rooftop-bar.jpg';

const places = [
  { name: 'Chateau Marmont', type: 'Legendary Hotel', distance: '0.3 mi', description: 'Hollywood\'s most storied hideaway since 1929' },
  { name: 'The Comedy Store', type: 'Entertainment', distance: '0.5 mi', description: 'Where comedy legends are born' },
  { name: 'Rainbow Bar & Grill', type: 'Rock History', distance: '0.4 mi', description: 'The heart of the Sunset Strip music scene' },
  { name: 'Whisky a Go Go', type: 'Live Music', distance: '0.6 mi', description: 'Birthplace of rock and roll' },
  { name: 'Melrose Avenue', type: 'Shopping', distance: '0.8 mi', description: 'Boutique shopping and vintage treasures' },
  { name: 'LACMA', type: 'Arts & Culture', distance: '2.1 mi', description: 'Los Angeles County Museum of Art' },
];

const categories = [
  { name: 'Nightlife', description: 'From legendary clubs to intimate speakeasies, West Hollywood pulses with possibility after dark.' },
  { name: 'Shopping', description: 'Designer boutiques, vintage treasures, and everything in between along Melrose and Robertson.' },
  { name: 'Culture', description: 'World-class museums, galleries, and the ever-present creative energy of Los Angeles.' },
];

const Experiences = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={sunsetStrip}
            alt="West Hollywood"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 container max-w-7xl mx-auto px-6 pb-16">
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Neighborhood</p>
          <h1 className="font-serif text-display-lg text-foreground">West Hollywood Awaits</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-px bg-primary mx-auto mb-8" />
          <p className="font-serif text-heading text-foreground mb-6">
            At the crossroads of legend and reinvention
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Sunset Strip has been the backdrop for rock and roll rebellion, Hollywood romance, 
            and countless unforgettable nights. Step outside The Valorian and you're instantly 
            immersed in one of the world's most iconic neighborhoods.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 section-charcoal">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.name} className="glass-card p-8 text-center group hover:-translate-y-2 transition-transform duration-500">
                <h3 className="font-serif text-xl text-foreground mb-4">{category.name}</h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Recommendations */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Curated</p>
            <h2 className="font-serif text-display text-foreground">Our Recommendations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {places.map((place) => (
              <div 
                key={place.name}
                className="flex items-start gap-4 p-6 glass-card hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-serif text-lg text-foreground">{place.name}</h3>
                    <span className="text-xs text-primary">{place.distance}</span>
                  </div>
                  <p className="text-xs text-primary/80 uppercase tracking-wider mb-2">{place.type}</p>
                  <p className="text-sm text-muted-foreground">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 section-charcoal">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-px bg-primary mb-6" />
              <h2 className="font-serif text-display text-foreground mb-6">Find Your Way</h2>
              <p className="text-muted-foreground mb-8">
                Located at the heart of the Sunset Strip, The Valorian puts you within 
                walking distance of legendary venues, acclaimed restaurants, and the 
                pulse of West Hollywood nightlife.
              </p>
              <div className="space-y-3 mb-8 text-foreground/80">
                <p><span className="text-primary">Address:</span> 1234 Sunset Boulevard</p>
                <p><span className="text-primary">West Hollywood,</span> CA 90069</p>
              </div>
              <Button variant="outline">Get Directions</Button>
            </div>
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
      </section>

      <Footer />
    </div>
  );
};

export default Experiences;
