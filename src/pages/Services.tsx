import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Home,
  Key,
  FileText,
  Users,
  TrendingUp,
  Scale,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import residentialImg from "@/assets/residential-building.jpg";
import commercialImg from "@/assets/commercial-property.jpg";
import landConversionImg from "@/assets/land-conversion.jpg";
import consultationImg from "@/assets/consultation.jpg";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image: string;
  process?: string[];
}

const services: Service[] = [
  {
    icon: Home,
    title: "Property Buying & Selling",
    description:
      "Whether you're buying your first home or selling an investment property, we provide expert guidance throughout the entire process. Our extensive network and market knowledge ensure you get the best deals in Ranchi.",
    image: residentialImg,
    features: [
      "Residential property transactions (apartments, independent houses, villas)",
      "Commercial property buying/selling (shops, offices, showrooms)",
      "Property valuation and market analysis",
      "Negotiation support",
      "Site visits and property inspections",
      "Price trend analysis",
    ],
    process: [
      "Understanding your requirements",
      "Property search and shortlisting",
      "Site visits and evaluations",
      "Negotiation and deal closure",
      "Documentation assistance",
      "Post-sale support",
    ],
  },
  {
    icon: Key,
    title: "Rental Services",
    description:
      "Find your perfect rental property or reliable tenants with our comprehensive rental management services. We handle everything from property listing to tenant verification.",
    image: residentialImg,
    features: [
      "Residential rental listings",
      "Commercial space rentals",
      "Tenant verification and background checks",
      "Rent agreement preparation",
      "Property maintenance coordination",
      "Rent collection assistance",
      "Tenant-landlord mediation",
    ],
  },
  {
    icon: FileText,
    title: "Land Conversion (NA)",
    description:
      "Navigate the complex process of converting agricultural land to non-agricultural (NA) use with our expert assistance. We handle all legal formalities and government procedures.",
    image: landConversionImg,
    features: [
      "Land survey and verification",
      "Application preparation and submission",
      "Government liaison and follow-up",
      "Documentation and compliance",
      "Clearance certificate processing",
      "Post-conversion support",
    ],
  },
  {
    icon: Users,
    title: "Real Estate Consultation",
    description:
      "Get professional advice from our experienced real estate consultants. We help you make informed decisions about property investments, market trends, and future prospects.",
    image: consultationImg,
    features: [
      "Property investment planning",
      "Market trend analysis",
      "Location assessment",
      "Property value estimation",
      "Portfolio diversification advice",
      "Risk assessment",
      "Future development prospects",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Make smart property investments with our strategic advisory services. We analyze market conditions, identify high-potential properties, and guide you toward profitable real estate investments.",
    image: commercialImg,
    features: [
      "Investment property identification",
      "ROI analysis and projections",
      "Market timing strategies",
      "Portfolio building",
      "Rental yield optimization",
      "Long-term wealth creation through real estate",
      "Tax planning guidance",
    ],
  },
  {
    icon: Scale,
    title: "Legal Documentation",
    description:
      "Ensure smooth and legally compliant property transactions with our comprehensive documentation services. We handle all paperwork so you can have peace of mind.",
    image: commercialImg,
    features: [
      "Sale deed preparation",
      "Rental agreement drafting",
      "Property verification reports",
      "Title deed examination",
      "Mutation and registry assistance",
      "NOC and clearance certificates",
      "Power of attorney documents",
      "Property tax documentation",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
        </div>
        <div className="container-custom px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Comprehensive real estate solutions tailored to your needs. From
              property transactions to legal documentation, we've got you
              covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={`relative rounded-2xl overflow-hidden h-80 md:h-96 shadow-lg ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-semibold">{service.title}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">
                      What We Offer:
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. Let us help you navigate
              your real estate journey with expertise and care.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-white" size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
