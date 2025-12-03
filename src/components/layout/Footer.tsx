import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { name: 'Rooms & Suites', href: '/rooms' },
  { name: 'Dining & Bars', href: '/dining' },
  { name: 'Rooftop Experience', href: '/experiences' },
  { name: 'Meetings & Events', href: '/events' },
  { name: 'Neighborhood Guide', href: '/experiences' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Special Offers', href: '/offers' },
];

export const Footer = () => {
  return (
    <footer className="relative">
      {/* Newsletter Section */}
      <section className="relative py-24 bg-gradient-burgundy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial-gold opacity-30" />
        <div className="container relative z-10 max-w-4xl mx-auto text-center px-6">
          <h3 className="font-serif text-heading-lg text-foreground mb-4">
            Join Our Circle
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Exclusive offers and experiences, delivered discreetly.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-background/20 backdrop-blur-xl border border-primary/30 rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <Button variant="luxury" size="sm" className="px-8 py-4 whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Main Footer */}
      <section className="py-20 bg-background-alt">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div>
              <Link to="/" className="inline-block font-serif text-2xl tracking-[0.15em] text-foreground mb-4">
                THE VALORIAN
              </Link>
              <p className="text-primary text-sm tracking-wide mb-6">
                Where elegance meets desire
              </p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-6">
                Explore
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      {link.name}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-6">
                Get In Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-foreground/80 text-sm">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>1234 Sunset Strip<br />West Hollywood, CA 90069</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80 text-sm">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+13105550100" className="hover:text-primary transition-colors">
                    +1 (310) 555-0100
                  </a>
                </li>
                <li className="flex items-center gap-3 text-foreground/80 text-sm">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="mailto:hello@thevalorianhotel.com" className="hover:text-primary transition-colors">
                    hello@thevalorianhotel.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="py-6 bg-background border-t border-primary/20">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© 2026 The Valorian. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
