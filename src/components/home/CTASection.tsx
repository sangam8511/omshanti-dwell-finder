import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjwvZz48L3N2Zz4=')]" />
      </div>

      <div className="relative container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              Ready to Make Your Property{" "}
              <span className="text-gold">Dreams a Reality?</span>
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-lg">
              Whether you're buying, selling, or investing, our expert team is ready to guide you every step of the way. Get your free consultation today!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="tel:+919876543210" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Schedule a Call
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-4 rounded-xl bg-background/5 backdrop-blur-sm border border-background/10">
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="text-background/60 text-sm mb-1">Call Us</div>
                <a href="tel:+919876543210" className="text-background font-medium hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-background/5 backdrop-blur-sm border border-background/10">
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="text-background/60 text-sm mb-1">Email Us</div>
                <a href="mailto:info@omshantiproperties.com" className="text-background font-medium hover:text-gold transition-colors">
                  info@omshantiproperties.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-background/5 backdrop-blur-sm border border-background/10">
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="text-background/60 text-sm mb-1">Office Hours</div>
                <div className="text-background font-medium">
                  Mon - Sat: 10:00 AM - 7:00 PM
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-background/5 backdrop-blur-sm border border-background/10">
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="text-background/60 text-sm mb-1">Visit Us</div>
                <div className="text-background font-medium text-sm">
                  H 25, Harmu Housing Colony, Ranchi - 834002
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
