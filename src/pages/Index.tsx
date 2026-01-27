import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import DifferenceSection from "@/components/home/DifferenceSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <DifferenceSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
