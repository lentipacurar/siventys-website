import { useTranslations } from 'next-intl';
import AnimatedSection from '@/components/animated-section';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <AnimatedSection>
      <section className="bg-secondary section-padding">
        <div className="container-max grid md:grid-cols-2 gap-12 items-center">
           <div>
             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-secondary-foreground">{t('title')}</h1>
             <p className="text-lg text-secondary-foreground leading-relaxed">{t('text')}</p>
           </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
             <Image
              src="https://picsum.photos/800/600?random=1" // Placeholder image
              alt="About Siventys Team"
              layout="fill"
              objectFit="cover"
              className="opacity-80"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
