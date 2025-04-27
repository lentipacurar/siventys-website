import { useTranslations } from 'next-intl';
import AnimatedSection from '@/components/animated-section';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react'; // Example icon

export default function CustomSolutionsPage() {
  const t = useTranslations('CustomSolutions');

  const features = [
    "Tailored AI Strategy Consulting",
    "Custom Model Development & Integration",
    "End-to-End Project Implementation",
    "Ongoing Support & Maintenance",
  ];

  return (
    <AnimatedSection>
      <section className="bg-primary section-padding">
        <div className="container-max grid md:grid-cols-2 gap-12 items-center">
           <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg order-last md:order-first">
             <Image
              src="https://picsum.photos/800/600?random=2" // Placeholder image
              alt="Custom AI Solutions"
              layout="fill"
              objectFit="cover"
              className="opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
          </div>
          <div>
             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">{t('title')}</h1>
             <p className="text-lg text-primary-foreground mb-8 leading-relaxed">{t('text')}</p>
             <ul className="space-y-3">
              {features.map((feature, index) => (
                 <li key={index} className="flex items-center gap-3 text-primary-foreground">
                   <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                   <span>{feature}</span> {/* Consider localizing features if needed */}
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
