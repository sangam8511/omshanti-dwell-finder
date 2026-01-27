import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Target,
  Eye,
  Award,
  Users,
  Shield,
  Heart,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const timeline = [
  {
    year: "1997",
    title: "Founded",
    description: "Om Shanti Properties established in Ranchi",
  },
  {
    year: "2005",
    title: "Expansion",
    description: "Expanded services to include land conversion",
  },
  {
    year: "2015",
    title: "Milestone",
    description: "Crossed 500 successful property transactions",
  },
  {
    year: "2020",
    title: "Innovation",
    description: "Introduced digital property consultation services",
  },
  {
    year: "2024",
    title: "Excellence",
    description: "Achieved 4.6★ rating with 1000+ happy clients",
  },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with complete transparency and honesty in every transaction",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "27+ years of deep market knowledge and industry experience",
  },
  {
    icon: Heart,
    title: "Client Focus",
    description:
      "Your satisfaction is our success - personalized service always",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Adopting modern solutions for traditional real estate needs",
  },
];

const About = () => {
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
              About <span className="text-accent">Om Shanti Properties</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Building trust and transforming dreams since 1997. Your reliable
              partner for all real estate needs in Ranchi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-badge">Our Story</span>
              <h2 className="section-title mb-6">
                27 Years of <span className="text-primary">Excellence</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Established in 1997, Om Shanti Properties has been Ranchi's
                  trusted name in real estate for over 27 years. Located in the
                  heart of Harmu Housing Colony, we specialize in providing
                  comprehensive property solutions that transform dreams into
                  reality.
                </p>
                <p>
                  With a 4.6-star rating based on 63+ satisfied customers, we
                  pride ourselves on our commitment to transparency, integrity,
                  and exceptional service. Our deep understanding of the Ranchi
                  real estate market, combined with our client-first approach,
                  has made us the preferred choice for property buyers, sellers,
                  and investors across Jharkhand.
                </p>
                <p>
                  From humble beginnings to becoming one of the most trusted
                  real estate consultants in the region, our journey has been
                  marked by a relentless pursuit of excellence and customer
                  satisfaction.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <div className="text-4xl font-display font-bold mb-2">27+</div>
                <div className="text-sm text-primary-foreground/80">
                  Years of Experience
                </div>
              </div>
              <div className="bg-secondary rounded-2xl p-6">
                <div className="text-4xl font-display font-bold text-primary mb-2">
                  1000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div className="bg-secondary rounded-2xl p-6">
                <div className="text-4xl font-display font-bold text-primary mb-2">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Properties Sold
                </div>
              </div>
              <div className="bg-accent rounded-2xl p-6 text-accent-foreground">
                <div className="text-4xl font-display font-bold mb-2">4.6★</div>
                <div className="text-sm opacity-80">Customer Rating</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide transparent, reliable, and professional real estate
                services that help our clients make informed property decisions
                and achieve their real estate goals. We strive to be the bridge
                between property dreams and reality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Ranchi's most trusted and innovative real estate
                consultancy, setting industry standards in customer service and
                ethical practices. We aim to revolutionize the real estate
                experience in Jharkhand.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-badge">Our Values</span>
            <h2 className="section-title">
              What We <span className="text-primary">Stand For</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-badge">Our Journey</span>
            <h2 className="section-title">
              Milestones Along <span className="text-primary">The Way</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year Badge */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center z-10">
                    <span className="text-primary-foreground font-display font-bold text-sm">
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                  >
                    <div className="bg-card rounded-xl p-6 shadow-sm">
                      <h3 className="font-display font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-badge">Why Us</span>
            <h2 className="section-title">
              Why Choose{" "}
              <span className="text-primary">Om Shanti Properties</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Local Market Expertise",
              "Comprehensive Service Portfolio",
              "Legal & Documentation Support",
              "Post-Sale Customer Care",
              "Ethical Business Practices",
              "Competitive Pricing",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary"
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              className="bg-accent hover:bg-accent/90 text-white"
              size="lg"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
