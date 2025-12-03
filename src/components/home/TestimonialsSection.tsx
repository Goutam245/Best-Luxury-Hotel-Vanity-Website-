import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "A dreamlike escape from reality. The Valorian transcends the ordinary.",
    author: "Alexandra M.",
    location: "New York, NY"
  },
  {
    quote: "Every detail whispers luxury. This is what West Hollywood was meant to be.",
    author: "James T.",
    location: "London, UK"
  },
  {
    quote: "The rooftop at sunset changed how I see Los Angeles. Pure magic.",
    author: "Sofia R.",
    location: "Milan, Italy"
  },
  {
    quote: "Ethereal, seductive, unforgettable. I've found my sanctuary.",
    author: "Marcus L.",
    location: "Paris, France"
  },
  {
    quote: "The perfect collision of old Hollywood glamour and modern sophistication.",
    author: "Emma K.",
    location: "Sydney, Australia"
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-burgundy">
      {/* Ambient Effect */}
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-20" />
      
      {/* Marquee Container */}
      <div className="relative">
        {/* First Row */}
        <div className="flex animate-marquee">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={index}
              className="flex-shrink-0 px-8 md:px-12 py-4"
            >
              <div className="flex flex-col items-center text-center max-w-md">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="font-serif text-xl md:text-2xl text-foreground/90 italic mb-4">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <p className="text-sm text-primary">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
