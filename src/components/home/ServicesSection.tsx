import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Key, FileText, Users, TrendingUp, Scale, ArrowRight, CheckCircle } from "lucide-react";
import { LucideIcon } from "lucide-react";
import residentialImage from "@/assets/residential-building.jpg";
import commercialImage from "@/assets/commercial-property.jpg";
import landImage from "@/assets/land-conversion.jpg";
import consultationImage from "@/assets/consultation.jpg";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    icon: Home,
    title: "Property Buying & Selling",
    description: "Expert assistance in residential and commercial property transactions with complete market analysis.",
    features: ["Residential Properties", "Commercial Spaces", "Property Valuation"],
    image: residentialImage,
  },
  {
    icon: Key,
    title: "Rental Services",
    description: "Find your perfect rental home or reliable tenants with our comprehensive rental solutions.",
    features: ["Tenant Verification", "Rent Agreements", "Property Management"],
    image: commercialImage,
  },
  {
    icon: FileText,
    title: "Land Conversion (NA)",
    description: "Smooth agricultural to non-agricultural land conversion with complete documentation support.",
    features: ["Government Liaison", "Documentation", "Compliance Support"],
    image: landImage,
  },
  {
    icon: Users,
    title: "Real Estate Consultation",
    description: "Professional guidance for all your property decisions with market insights and expert advice.",
    features: ["Market Analysis", "Investment Planning", "Risk Assessment"],
    image: consultationImage,
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-badge">Our Services</span>
          <h2 className="section-title">
            Complete Real Estate Solutions{" "}
            <span className="text-primary">Under One Roof</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From buying your dream home to investment advisory, we offer comprehensive property solutions backed by 27+ years of experience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-1 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-gold transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-card rounded-xl p-6 flex items-start gap-4 card-hover">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-2">Investment Advisory</h4>
              <p className="text-sm text-muted-foreground">Strategic property investment planning for maximum returns with market timing insights.</p>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 flex items-start gap-4 card-hover">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Scale className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-2">Legal Documentation</h4>
              <p className="text-sm text-muted-foreground">Complete support with property paperwork, title verification, and legal formalities.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
