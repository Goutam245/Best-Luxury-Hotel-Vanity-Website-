import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, PartyPopper } from 'lucide-react';
import roomPenthouse from '@/assets/room-penthouse.jpg';
import diningRestaurant from '@/assets/dining-restaurant.jpg';
import rooftopBar from '@/assets/rooftop-bar.jpg';

const eventSpaces = [
  {
    name: 'The Grand Salon',
    capacity: '200 guests',
    features: ['Floor-to-ceiling windows', 'Private terrace access', 'Built-in AV system'],
    image: diningRestaurant,
  },
  {
    name: 'Rooftop Terrace',
    capacity: '150 guests',
    features: ['Panoramic city views', 'Retractable canopy', 'Dedicated bar'],
    image: rooftopBar,
  },
  {
    name: 'The Penthouse Suite',
    capacity: '50 guests',
    features: ['Intimate setting', 'Private dining room', 'Personal concierge'],
    image: roomPenthouse,
  },
];

const eventTypes = [
  {
    icon: Briefcase,
    name: 'Corporate Events',
    description: 'From board meetings to product launches, elevate your business gatherings.'
  },
  {
    icon: PartyPopper,
    name: 'Social Celebrations',
    description: 'Birthdays, anniversaries, and milestone moments deserve unforgettable settings.'
  },
  {
    icon: Users,
    name: 'Private Parties',
    description: 'Exclusive gatherings with the discretion and sophistication you expect.'
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={diningRestaurant}
            alt="Event Space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 container max-w-7xl mx-auto px-6 pb-16">
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Gatherings</p>
          <h1 className="font-serif text-display-lg text-foreground">Meetings & Events</h1>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-primary mx-auto mb-8" />
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">What We Host</p>
            <h2 className="font-serif text-display text-foreground">Event Types</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((event) => (
              <div key={event.name} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <event.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{event.name}</h3>
                <p className="text-muted-foreground text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Spaces */}
      <section className="py-24 section-charcoal">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Venues</p>
            <h2 className="font-serif text-display text-foreground">Our Spaces</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {eventSpaces.map((space) => (
              <div key={space.name} className="group luxury-card overflow-hidden rounded-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 glass-card">
                  <h3 className="font-serif text-xl text-foreground mb-2">{space.name}</h3>
                  <p className="text-primary text-sm mb-4">{space.capacity}</p>
                  <ul className="space-y-2">
                    {space.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-24">
        <div className="container max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="w-16 h-px bg-primary mx-auto mb-8" />
            <h2 className="font-serif text-display text-foreground mb-4">Plan Your Event</h2>
            <p className="text-muted-foreground">
              Our events team will work with you to create an unforgettable experience.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text"
                placeholder="Your Name"
                className="px-6 py-4 bg-muted/30 border border-primary/20 rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input 
                type="email"
                placeholder="Email Address"
                className="px-6 py-4 bg-muted/30 border border-primary/20 rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select className="px-6 py-4 bg-muted/30 border border-primary/20 rounded text-foreground focus:outline-none focus:border-primary transition-colors">
                <option value="">Event Type</option>
                <option value="corporate">Corporate Event</option>
                <option value="social">Social Celebration</option>
                <option value="private">Private Party</option>
              </select>
              <input 
                type="date"
                className="px-6 py-4 bg-muted/30 border border-primary/20 rounded text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <textarea 
              placeholder="Tell us about your event..."
              rows={4}
              className="w-full px-6 py-4 bg-muted/30 border border-primary/20 rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <div className="text-center">
              <Button variant="luxury">Submit Inquiry</Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
