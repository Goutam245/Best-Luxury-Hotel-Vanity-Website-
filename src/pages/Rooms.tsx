import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Wifi, Tv, Wine, Bath, Mountain, Coffee } from 'lucide-react';
import roomSuite from '@/assets/room-suite.jpg';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomPenthouse from '@/assets/room-penthouse.jpg';

const amenities = [
  { icon: Wifi, name: 'High-Speed WiFi' },
  { icon: Tv, name: '65" Smart TV' },
  { icon: Wine, name: 'Premium Minibar' },
  { icon: Bath, name: 'Luxury Bath Amenities' },
  { icon: Mountain, name: 'City Views' },
  { icon: Coffee, name: 'Nespresso Machine' },
];

const rooms = [
  {
    id: 'premium',
    name: 'Premium King Room',
    description: 'Sophisticated comfort meets contemporary design in our Premium King rooms. Floor-to-ceiling windows frame the West Hollywood skyline, while custom furnishings and premium linens ensure restful indulgence.',
    size: '450 sq ft',
    price: '$450',
    image: roomDeluxe,
    features: ['King bed with luxury linens', 'Rainfall shower', 'City or courtyard views', 'Writing desk', 'In-room safe'],
  },
  {
    id: 'deluxe',
    name: 'Deluxe Suite',
    description: 'An expansive retreat with separate living and sleeping areas. The Deluxe Suite offers panoramic views of Los Angeles, a spacious soaking tub, and thoughtfully curated art pieces.',
    size: '750 sq ft',
    price: '$750',
    image: roomSuite,
    features: ['Separate living area', 'King bed with premium linens', 'Soaking tub + walk-in shower', 'Dining area for 4', 'Panoramic city views'],
  },
  {
    id: 'penthouse',
    name: 'Signature Penthouse',
    description: 'The pinnacle of ethereal indulgence. Our Signature Penthouse features wraparound terraces, a private dining room, and unobstructed views from Downtown LA to the Pacific Ocean.',
    size: '2,200 sq ft',
    price: '$2,500',
    image: roomPenthouse,
    features: ['2 bedrooms with king beds', 'Private terrace', 'Full kitchen', 'Grand piano available', 'Personal concierge', '360° views'],
  },
];

const Rooms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={roomSuite}
            alt="Luxury Suite"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 container max-w-7xl mx-auto px-6 pb-16">
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Accommodations</p>
          <h1 className="font-serif text-display-lg text-foreground">Rooms & Suites</h1>
        </div>
      </section>

      {/* Rooms List */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-6">
          {rooms.map((room, index) => (
            <div 
              key={room.id}
              id={room.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 ${
                index !== rooms.length - 1 ? 'border-b border-primary/10' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img 
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="w-16 h-px bg-primary mb-6" />
                <h2 className="font-serif text-heading-lg text-foreground mb-4">{room.name}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{room.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {room.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-end justify-between mb-8">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Room Size</p>
                    <p className="text-foreground">{room.size}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">From</p>
                    <p className="text-2xl font-serif text-primary">{room.price}<span className="text-sm text-muted-foreground">/night</span></p>
                  </div>
                </div>

                <Button variant="luxury">Check Availability</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 section-charcoal">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">In Every Room</p>
            <h2 className="font-serif text-display text-foreground">Amenities</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {amenities.map((amenity) => (
              <div key={amenity.name} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <amenity.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-foreground/80">{amenity.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-heading-lg text-foreground mb-4">Ready to Experience The Valorian?</h2>
          <p className="text-muted-foreground mb-8">Each room tells a story. Which will be yours?</p>
          <Button variant="hero">Book Your Stay</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
