import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import roomSuite from '@/assets/room-suite.jpg';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomPenthouse from '@/assets/room-penthouse.jpg';

const rooms = [
  {
    name: 'Premium King',
    description: 'Sophisticated comfort with city views',
    price: 'From $450/night',
    image: roomDeluxe,
    href: '/rooms#premium'
  },
  {
    name: 'Deluxe Suite',
    description: 'Expansive luxury with separate living',
    price: 'From $750/night',
    image: roomSuite,
    href: '/rooms#deluxe'
  },
  {
    name: 'Signature Penthouse',
    description: 'The pinnacle of ethereal indulgence',
    price: 'From $2,500/night',
    image: roomPenthouse,
    href: '/rooms#penthouse'
  },
];

export const RoomsPreviewSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 section-charcoal overflow-hidden"
    >
      {/* Background Ambient Effect */}
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-10" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Accommodations</p>
          <h2 className="font-serif text-display text-foreground mb-4">
            Rooms & Suites
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each space a sanctuary. Each detail a whispered secret.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room, index) => (
            <Link
              key={room.name}
              to={room.href}
              className={`group luxury-card transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Glass Card Content */}
                  <div className="glass-card p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-serif text-xl text-foreground mb-1">{room.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{room.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary text-sm font-medium">{room.price}</span>
                      <span className="text-primary/60 text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                        Explore
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div 
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Link 
            to="/rooms"
            className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-[0.15em] font-medium link-underline group"
          >
            View All Rooms
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
