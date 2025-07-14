import { NavbarHero } from "@/components/ui/hero-with-video";
import { QuotesSection } from "@/components/ui/quotes-section";
import { BenefitsSlide } from "@/components/ui/benefits-slide";
import { FeaturesSection } from "@/components/ui/features-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { FooterSection } from "@/components/ui/footer-section";

const DemoOne = () => {
  return (
    <div className="min-h-screen">
      <NavbarHero
        brandName="CRM AI"
        heroTitle="AI-Powered CRM Revolution"
        heroSubtitle="Early Access Available"
        heroDescription="Transform your customer relationships with intelligent automation, predictive analytics, and seamless workflow management."
        emailPlaceholder="enter@email.com"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
        videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      />
      <QuotesSection />
      <BenefitsSlide />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FooterSection />
    </div>
  );
};

export { DemoOne }; 