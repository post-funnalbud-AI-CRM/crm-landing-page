interface ComponentProps {
  dict: any;
  locale: string;
}

export function QuotesSection({ dict, locale }: ComponentProps) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Quotes Section (Placeholder)
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          This section will be updated with i18n support soon.
        </p>
      </div>
    </section>
  );
}

export function FeaturesSection({ dict, locale }: ComponentProps) {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {dict.features.title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {dict.features.description}
        </p>
      </div>
    </section>
  );
}

export function TestimonialsSection({ dict, locale }: ComponentProps) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {dict.testimonials.title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {dict.testimonials.description}
        </p>
      </div>
    </section>
  );
}

export function PricingSection({ dict, locale }: ComponentProps) {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {dict.pricing.title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {dict.pricing.description}
        </p>
      </div>
    </section>
  );
}

export function FooterSection({ dict, locale }: ComponentProps) {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 mb-4">{dict.footer.description}</p>
          <p className="text-sm text-gray-500">
            © 2025 CRM AI. {dict.footer.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
