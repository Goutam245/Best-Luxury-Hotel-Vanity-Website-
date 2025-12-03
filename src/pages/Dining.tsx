import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import rooftopBar from '@/assets/rooftop-bar.jpg';
import diningRestaurant from '@/assets/dining-restaurant.jpg';
import barInterior from '@/assets/bar-interior.jpg';

const signatureCocktails = [
  { name: 'The White Rabbit', description: 'Vodka, elderflower, white peach, champagne foam' },
  { name: 'Sunset Strip Sour', description: 'Bourbon, blood orange, honey, egg white' },
  { name: 'Midnight Orchid', description: 'Gin, violet liqueur, lemon, lavender bitters' },
  { name: 'Golden Hour', description: 'Tequila, passion fruit, gold flakes, lime' },
];

const Dining = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={rooftopBar}
            alt="Rooftop Bar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 container max-w-7xl mx-auto px-6 pb-16">
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Culinary</p>
          <h1 className="font-serif text-display-lg text-foreground">Dining & Nightlife</h1>
        </div>
      </section>

      {/* Restaurant Section */}
      <section id="restaurant" className="py-24">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="w-16 h-px bg-primary mb-6" />
              <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Restaurant</p>
              <h2 className="font-serif text-display text-foreground mb-6">Reverie</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                California cuisine reimagined through an ethereal lens. Executive Chef creates 
                seasonally-inspired dishes that blur the line between sustenance and art. 
                Each plate tells a story of local farms, coastal waters, and culinary poetry.
              </p>
              <div className="space-y-2 mb-8 text-sm text-foreground/80">
                <p><span className="text-primary">Breakfast:</span> 7:00 AM – 11:00 AM</p>
                <p><span className="text-primary">Dinner:</span> 6:00 PM – 11:00 PM</p>
                <p><span className="text-primary">Dress Code:</span> Smart Casual</p>
              </div>
              <div className="flex gap-4">
                <Button variant="luxury">Reserve a Table</Button>
                <Button variant="outline">View Menu</Button>
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img 
                src={diningRestaurant}
                alt="Reverie Restaurant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooftop Bar Section */}
      <section id="rooftop" className="py-24 section-charcoal">
        <div className="relative">
          <img 
            src={rooftopBar}
            alt="Rooftop Bar at Sunset"
            className="w-full h-[70vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-alt via-background-alt/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container max-w-7xl mx-auto px-6 pb-16">
              <div className="glass-card p-8 md:p-12 max-w-2xl">
                <div className="w-16 h-px bg-primary mb-6" />
                <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Rooftop</p>
                <h2 className="font-serif text-heading-lg text-foreground mb-4">Elevation</h2>
                <p className="text-foreground/80 mb-6">
                  Watch the sun melt into the Pacific from 15 stories above the Sunset Strip. 
                  Elevation offers handcrafted cocktails, rare spirits, and an atmosphere 
                  where every moment feels like the golden hour.
                </p>
                <div className="space-y-2 mb-6 text-sm text-foreground/80">
                  <p><span className="text-primary">Hours:</span> 5:00 PM – 2:00 AM</p>
                  <p><span className="text-primary">Dress Code:</span> Elevated Casual</p>
                </div>
                <Button variant="luxury">Reserve Your Spot</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cocktail Lounge */}
      <section id="lounge" className="py-24">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-sm lg:order-2">
              <img 
                src={barInterior}
                alt="The Lounge"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:order-1">
              <div className="w-16 h-px bg-primary mb-6" />
              <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Bar</p>
              <h2 className="font-serif text-display text-foreground mb-6">The Lounge</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Intimate cocktails in a setting of seductive sophistication. Velvet banquettes, 
                amber lighting, and whispered conversations create the perfect backdrop for 
                unforgettable evenings.
              </p>
              
              {/* Signature Cocktails */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Signature Cocktails</p>
                <ul className="space-y-4">
                  {signatureCocktails.map((cocktail) => (
                    <li key={cocktail.name} className="flex justify-between items-start border-b border-primary/10 pb-3">
                      <div>
                        <p className="text-foreground font-medium">{cocktail.name}</p>
                        <p className="text-muted-foreground text-sm">{cocktail.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 mb-8 text-sm text-foreground/80">
                <p><span className="text-primary">Hours:</span> 6:00 PM – 2:00 AM</p>
              </div>
              <Button variant="outline">Full Cocktail Menu</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dining;
