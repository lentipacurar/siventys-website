import { useTranslations } from 'next-intl';
import AnimatedSection from '@/components/animated-section';
import ContactForm from '@/components/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react'; // Example icons

export default function ContactPage() {
  const t = useTranslations('Contact');

  return (
    <AnimatedSection>
      <section className="bg-secondary section-padding">
        <div className="container-max">
           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">{t('title')}</h1>
           <div className="grid md:grid-cols-2 gap-12">
             {/* Contact Info */}
             <div className="space-y-6">
               <h2 className="text-2xl font-semibold">Get in Touch</h2>
               <p className="text-muted-foreground">{t('text')}</p>
               <div className="space-y-4">
                 <div className="flex items-start gap-4">
                   <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                   <div>
                     <h3 className="font-semibold">Email</h3>
                     <a href="mailto:contact@siventys.com" className="text-foreground hover:text-accent transition-colors">
                       contact@siventys.com {/* Replace with actual email */}
                     </a>
                   </div>
                 </div>
                  <div className="flex items-start gap-4">
                   <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                   <div>
                     <h3 className="font-semibold">Phone</h3>
                     <a href="tel:+40123456789" className="text-foreground hover:text-accent transition-colors">
                       +40 123 456 789 {/* Replace with actual phone */}
                     </a>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                   <div>
                     <h3 className="font-semibold">Address</h3>
                     <p className="text-foreground">
                       123 Innovation Street, Bucharest, Romania {/* Replace with actual address */}
                     </p>
                   </div>
                 </div>
               </div>
             </div>

              {/* Contact Form */}
             <div>
                <Card className="bg-card shadow-lg">
                 <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle> {/* Consider localizing */}
                  </CardHeader>
                 <CardContent>
                   <ContactForm />
                 </CardContent>
               </Card>
             </div>
           </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
