import { NavbarHero } from "@/components/ui/hero-with-video";
import { QuotesSection } from "@/components/ui/quotes-section";
import { BenefitsSlide } from "@/components/ui/benefits-slide";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { FooterSection } from "@/components/ui/footer-section";
import { Locale } from '@/middleware';

interface DemoOneProps {
  dict: any;
  locale: Locale;
}

const DemoOne = ({ dict, locale }: DemoOneProps) => {
  return (
    <div className="min-h-screen">
      <NavbarHero
        brandName={dict.nav.brand}
        heroTitle={dict.hero.title}
        heroSubtitle={dict.hero.subtitle}
        heroDescription={dict.hero.description}
        emailPlaceholder={dict.hero.emailPlaceholder}
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
        videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        dict={dict}
        locale={locale}
      />
      <QuotesSection dict={dict} locale={locale} />
      <BenefitsSlide dict={dict} locale={locale} />
      <FeaturesSection dict={dict} locale={locale} />
      <TestimonialsSection dict={dict} locale={locale} />
      <PricingSection dict={dict} />
      <FooterSection dict={dict} />
    </div>
  );
};

export { DemoOne }; 