import { useTranslations } from 'next-intl';
import AnimatedSection from '@/components/animated-section';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, BrainCircuit, DatabaseZap } from 'lucide-react'; // Example icons

export default function AiAgentsPage() {
  const t = useTranslations('AiAgents');

   const agents = [
    { icon: Bot, title: "Automation Agent", description: "Handles repetitive tasks efficiently." },
    { icon: BrainCircuit, title: "Analytics Agent", description: "Provides deep data insights." },
    { icon: DatabaseZap, title: "Optimization Agent", description: "Improves operational workflows." },
  ];


  return (
    <AnimatedSection>
      <section className="bg-background section-padding">
        <div className="container-max text-center">
           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t('title')}</h1>
           <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">{t('text')}</p>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {agents.map((agent, index) => (
               <AnimatedSection key={index} delay={index * 0.1}>
                 <Card className="bg-card h-full flex flex-col">
                  <CardHeader className="items-center">
                    <agent.icon className="w-12 h-12 text-accent mb-4" />
                    <CardTitle>{agent.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <CardDescription>{agent.description}</CardDescription>
                   </CardContent>
                 </Card>
               </AnimatedSection>
             ))}
           </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
