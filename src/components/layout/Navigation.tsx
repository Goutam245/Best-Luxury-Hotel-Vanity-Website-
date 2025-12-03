import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Rooms', href: '/rooms' },
  { name: 'Dining', href: '/dining' },
  { name: 'Experiences', href: '/experiences' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={cn(
          'fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl',
          'transition-all duration-500 ease-out',
          isScrolled 
            ? 'bg-background/90 backdrop-blur-2xl border border-primary/20 shadow-luxury' 
            : 'bg-background/40 backdrop-blur-xl border border-primary/10',
          'rounded-full px-6 md:px-10 py-4'
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-serif text-lg md:text-xl tracking-[0.15em] text-foreground hover:text-primary transition-colors duration-300"
          >
            THE VALORIAN
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'relative text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300',
                  'hover:text-primary',
                  location.pathname === link.href ? 'text-primary' : 'text-foreground/80',
                  'link-underline'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Button variant="luxury" size="sm" className="px-6 py-2.5 text-xs">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-primary hover:text-accent transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[100] lg:hidden',
          'transition-all duration-500 ease-out',
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={cn(
            'relative h-full flex flex-col items-center justify-center',
            'transition-all duration-500 delay-100',
            isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          )}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 p-2 text-primary hover:text-accent transition-colors"
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Logo */}
          <Link 
            to="/" 
            className="font-serif text-2xl tracking-[0.2em] text-foreground mb-12"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            THE VALORIAN
          </Link>

          {/* Mobile Links */}
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-2xl font-serif tracking-[0.1em] transition-all duration-300',
                  'hover:text-primary hover:scale-105',
                  location.pathname === link.href ? 'text-primary' : 'text-foreground'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Book Now */}
          <Button variant="luxury" className="mt-12">
            Book Now
          </Button>

          {/* Social Links */}
          <div className="absolute bottom-12 flex gap-6">
            <a href="#" className="text-primary/60 hover:text-primary text-xs uppercase tracking-widest transition-colors">
              Instagram
            </a>
            <a href="#" className="text-primary/60 hover:text-primary text-xs uppercase tracking-widest transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
