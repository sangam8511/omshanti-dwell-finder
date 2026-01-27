import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-display font-bold text-xl">ॐ</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold text-gold">Om Shanti</span>
                  <span className="text-xs text-background/60 -mt-1">Properties</span>
                </div>
              </Link>
              <p className="text-background/70 mb-6 text-sm leading-relaxed">
                Your trusted real estate partner since 1997. Building dreams, one property at a time in Ranchi and beyond.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-display font-bold text-gold">27+</span>
                <span className="text-sm text-background/70">Years of<br />Excellence</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <span className="text-2xl font-display font-bold text-gold">1000+</span>
                <span className="text-sm text-background/70">Happy<br />Clients</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6 text-gold">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "About", "Services", "Blog", "Contact"].map((link) => (
                  <li key={link}>
                    <Link
                      to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      className="text-background/70 hover:text-gold transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="text-background/70 hover:text-gold transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6 text-gold">Our Services</h4>
              <ul className="space-y-3">
                {[
                  "Property Buying & Selling",
                  "Rental Services",
                  "Land Conversion (NA)",
                  "Real Estate Consultation",
                  "Investment Advisory",
                  "Legal Documentation",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-background/70 hover:text-gold transition-colors text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6 text-gold">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-background/70 text-sm">
                    H 25 (2nd Floor), Harmu Housing Colony, Beside Harmu Field, Harmu Chowk, Ranchi - 834002
                  </span>
                </li>
                <li>
                  <a href="tel:+919876543210" className="flex items-center gap-3 text-background/70 hover:text-gold transition-colors text-sm">
                    <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <a href="mailto:info@omshantiproperties.com" className="flex items-center gap-3 text-background/70 hover:text-gold transition-colors text-sm">
                    <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                    info@omshantiproperties.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-background/70 text-sm">
                    Mon - Sat: 10:00 AM - 7:00 PM
                  </span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6 text-gold">Newsletter</h4>
              <p className="text-background/70 text-sm mb-4">
                Subscribe to get latest property updates and market insights.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
                <Button variant="gold" size="icon" className="flex-shrink-0">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 py-6">
        <div className="container-custom px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm text-center md:text-left">
            © {currentYear} Om Shanti Properties. All rights reserved.
          </p>
          <p className="text-background/60 text-sm flex items-center gap-1">
            Designed with <span className="text-gold">❤</span> for trusted real estate service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
