import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import roomSuite from '@/assets/room-suite.jpg';
import rooftopBar from '@/assets/rooftop-bar.jpg';
import diningRestaurant from '@/assets/dining-restaurant.jpg';

const offers = [
  {
    name: 'Romance Package',
    description: 'Create unforgettable moments with champagne on arrival, couples spa treatment, and a private rooftop dinner under the stars.',
    price: 'From $1,200',
    includes: ['Deluxe Suite accommodation', 'Champagne & roses on arrival', 'Couples massage', 'Private rooftop dinner'],
    image: roomSuite,
  },
  {
    name: 'Extended Stay',
    description: 'Make The Valorian your home. Stay five nights or more and enjoy exclusive benefits and elevated services.',
    price: '20% Off',
    includes: ['Minimum 5-night stay', 'Complimentary room upgrade', 'Daily breakfast included', 'Late checkout'],
    image: rooftopBar,
  },
  {
    name: 'Rooftop Experience',
    description: 'Elevate your evening with a curated cocktail experience at our legendary rooftop bar, paired with bespoke small plates.',
    price: 'From $350',
    includes: ['Premium suite accommodation', 'Reserved rooftop seating', 'Tasting menu for two', 'Signature cocktails'],
    image: diningRestaurant,
  },
];

const Offers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container max-w-7xl mx-auto px-6">
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Exclusive</p>
          <h1 className="font-serif text-display-lg text-foreground">Special Offers</h1>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="pb-24">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <div key={offer.name} className="group luxury-card overflow-hidden rounded-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={offer.image}
                    alt={offer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 glass-card">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-serif text-xl text-foreground">{offer.name}</h3>
                    <span className="text-primary font-semibold">{offer.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">{offer.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider text-primary mb-3">Package Includes</p>
                    <ul className="space-y-2">
                      {offer.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full">Book Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Note */}
      <section className="py-16 section-charcoal">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            Offers subject to availability. Terms and conditions apply. 
            Contact our reservations team for complete details.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offers;
