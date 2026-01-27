import { motion } from "framer-motion";
import { Shield, Clock, Award, Heart, Building, CheckCircle } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Difference {
  icon: LucideIcon;
  title: string;
  description: string;
}

const differences: Difference[] = [
  {
    icon: Clock,
    title: "27+ Years Experience",
    description: "Deep market knowledge and expertise built over decades of successful real estate transactions.",
  },
  {
    icon: Shield,
    title: "Verified Properties",
    description: "Every property is legally verified and authenticated for your complete peace of mind.",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "Personalized service tailored to your unique needs and property requirements.",
  },
  {
    icon: Award,
    title: "Trusted Reputation",
    description: "4.6★ rating from 63+ satisfied clients speaks for our commitment to excellence.",
  },
  {
    icon: Building,
    title: "End-to-End Support",
    description: "From site visits to documentation, we handle everything for a seamless experience.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Dealings",
    description: "No hidden charges, no surprises. Complete transparency in all our transactions.",
  },
];

const DifferenceSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge">Why Choose Us</span>
          <h2 className="section-title">
            The Om Shanti <span className="text-primary">Difference</span>
          </h2>
          <p className="section-subtitle mx-auto">
            What sets us apart from other real estate consultants. Our commitment to excellence and client satisfaction is unmatched.
          </p>
        </motion.div>

        {/* Differences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
