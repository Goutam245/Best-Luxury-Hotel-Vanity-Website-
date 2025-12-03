import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const faqs = [
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Check-in is at 4:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request.'
  },
  {
    question: 'Is parking available?',
    answer: 'Valet parking is available for $65 per night. Self-parking options are also available nearby.'
  },
  {
    question: 'Are pets allowed?',
    answer: 'We welcome dogs under 25 lbs with a $150 pet fee per stay. Please notify us at booking.'
  },
  {
    question: 'Is the rooftop bar open to non-guests?',
    answer: 'The rooftop bar is available to both hotel guests and visitors. Reservations are recommended.'
  },
  {
    question: 'Do you offer airport transfers?',
    answer: 'Yes, we can arrange private car service to and from LAX. Please contact our concierge.'
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container max-w-7xl mx-auto px-6">
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Get In Touch</p>
          <h1 className="font-serif text-display-lg text-foreground">Contact Us</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <div className="w-16 h-px bg-primary mb-8" />
              <h2 className="font-serif text-heading text-foreground mb-8">Send a Message</h2>
              
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
                <input 
                  type="tel"
                  placeholder="Phone Number (optional)"
                  className="w-full px-6 py-4 bg-muted/30 border border-primary/20 rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <textarea 
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-6 py-4 bg-muted/30 border border-primary/20 rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <Button variant="luxury">Send Message</Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="w-16 h-px bg-primary mb-8" />
              <h2 className="font-serif text-heading text-foreground mb-8">Contact Details</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Address</p>
                    <p className="text-muted-foreground text-sm">
                      1234 Sunset Boulevard<br />
                      West Hollywood, CA 90069
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Phone</p>
                    <a href="tel:+13105550100" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      +1 (310) 555-0100
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Email</p>
                    <a href="mailto:hello@thevalorianhotel.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      hello@thevalorianhotel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Front Desk</p>
                    <p className="text-muted-foreground text-sm">24 hours, 7 days a week</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-xs uppercase tracking-wider text-primary mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">Instagram</a>
                  <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">Facebook</a>
                  <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 section-charcoal">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="aspect-[21/9] rounded-sm overflow-hidden border border-primary/20">
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
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Help</p>
            <h2 className="font-serif text-display text-foreground">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-foreground font-medium mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
