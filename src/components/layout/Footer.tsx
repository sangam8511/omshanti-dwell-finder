import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import omshantiLogo from "@/assets/omshantiLogo.svg";

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
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="relative overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg">
                  <img
                    src={omshantiLogo}
                    alt="Om Shanti Properties"
                    className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <p className="text-background/70 mb-6 text-sm leading-relaxed">
                Your trusted real estate partner since 1997. Building dreams,
                one property at a time in Ranchi and beyond.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-display font-bold text-accent">
                  27+
                </span>
                <span className="text-sm text-background/70">
                  Years of
                  <br />
                  Excellence
                </span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <span className="text-2xl font-display font-bold text-accent">
                  1000+
                </span>
                <span className="text-sm text-background/70">
                  Happy
                  <br />
                  Clients
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6 text-accent">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["Home", "About", "Services", "Blog", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <Link
                        to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                        className="text-background/70 hover:text-accent transition-colors text-sm"
                      >
                        {link}
                      </Link>
                    </li>
                  ),
                )}
                <li>
                  <Link
                    to="/contact"
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6 text-accent">
                Our Services
              </h4>
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
                      className="text-background/70 hover:text-accent transition-colors text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6 text-accent">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-background/70 text-sm">
                    H 25 (2nd Floor), Harmu Housing Colony, Beside Harmu Field,
                    Harmu Chowk, Ranchi - 834002
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@omshantiproperties.com"
                    className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                    info@omshantiproperties.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-background/70 text-sm">
                    Mon - Sat: 10:00 AM - 7:00 PM
                  </span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6 text-accent">
                Newsletter
              </h4>
              <p className="text-background/70 text-sm mb-4">
                Subscribe to get latest property updates and market insights.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
                <Button
                  className="bg-accent hover:bg-accent/90 text-white flex-shrink-0"
                  size="icon"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
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
            Designed with <span className="text-accent">❤</span> for trusted
            real estate service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
