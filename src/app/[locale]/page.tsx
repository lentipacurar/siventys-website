import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ContactForm from '@/components/contact-form';
import AnimatedSection from '@/components/animated-section';
import { Link } from '@/navigation';

export default function Home() {
  const t = useTranslations();

  return (
    <div>
      {/* Hero Section */}
      <AnimatedSection>
        <section id="home" className="bg-gradient-to-br from-background to-primary text-foreground section-padding text-center">
          <div className="container-max">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('Hero.title')}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">{t('Hero.subtitle')}</p>
            <Link href="/custom-solutions" passHref>
              <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                {t('Hero.cta')}
              </Button>
            </Link>
          </div>
        </section>
      </AnimatedSection>

      {/* About Us Section */}
      <AnimatedSection>
        <section id="about" className="bg-secondary section-padding">
           <div className="container-max text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('About.title')}</h2>
            <p className="text-base md:text-lg text-secondary-foreground leading-relaxed">{t('About.text')}</p>
          </div>
        </section>
      </AnimatedSection>

       {/* AI Agents Section */}
      <AnimatedSection>
        <section id="ai-agents" className="bg-background section-padding">
           <div className="container-max text-center md:text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('AiAgents.title')}</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{t('AiAgents.text')}</p>
          </div>
        </section>
      </AnimatedSection>

       {/* Custom Solutions Section */}
       <AnimatedSection>
        <section id="custom-solutions" className="bg-primary section-padding">
           <div className="container-max text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('CustomSolutions.title')}</h2>
            <p className="text-base md:text-lg text-primary-foreground leading-relaxed">{t('CustomSolutions.text')}</p>
          </div>
        </section>
       </AnimatedSection>

      {/* Contact Us Section */}
      <AnimatedSection>
        <section id="contact" className="bg-secondary section-padding">
          <div className="container-max">
            <Card className="max-w-2xl mx-auto bg-card shadow-lg">
               <CardHeader className="text-center">
                 <CardTitle className="text-3xl md:text-4xl">{t('Contact.title')}</CardTitle>
                 <p className="text-muted-foreground pt-2">{t('Contact.text')}</p>
               </CardHeader>
              <CardContent>
                 <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
