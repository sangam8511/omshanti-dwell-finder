import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-property.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-background"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full mb-6">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-sm font-medium text-gold">Trusted Since 1997</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Dream Property,{" "}
              <span className="text-gold">Our Commitment</span>
            </h1>

            <p className="text-lg text-background/80 mb-8 max-w-xl leading-relaxed">
              For over 27 years, Om Shanti Properties has been Ranchi's most trusted real estate partner. 
              We transform your property dreams into reality with expertise, integrity, and personalized service.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="gold" size="lg" asChild>
                <Link to="/services" className="flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-background/20">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <span className="text-sm text-background/80">4.6/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gold" />
                <span className="text-sm text-background/80">Verified Properties</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold" />
                <span className="text-sm text-background/80">27+ Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-background/10 backdrop-blur-md rounded-2xl p-8 border border-background/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl font-display font-bold text-gold mb-2">27+</div>
                  <div className="text-sm text-background/70">Years of Excellence</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-display font-bold text-gold mb-2">1000+</div>
                  <div className="text-sm text-background/70">Happy Clients</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-display font-bold text-gold mb-2">500+</div>
                  <div className="text-sm text-background/70">Properties Sold</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-display font-bold text-gold mb-2">4.6★</div>
                  <div className="text-sm text-background/70">Customer Rating</div>
                </div>
              </div>
              
              {/* Logo Badge */}
              <div className="mt-6 pt-6 border-t border-background/20 flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-2xl">ॐ</span>
                </div>
                <div>
                  <div className="font-display font-bold text-background">Om Shanti</div>
                  <div className="text-xs text-background/60">Properties</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
