'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import LocaleSwitcher from '@/components/locale-switcher';
import { ThemeSwitcher } from '@/components/theme-switcher'; // Import ThemeSwitcher
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from '@/navigation';


export default function Header() {
  const t = useTranslations('Navigation');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

   const navItems = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/about' },
    { label: t('aiAgents'), href: '/ai-agents' },
    { label: t('customSolutions'), href: '/custom-solutions' },
    { label: t('contact'), href: '/contact' },
  ];

   const closeMobileMenu = () => setIsMobileMenuOpen(false);

   const isActive = (href: string) => {
     // Handle root path specifically for different locales
     if (href === '/') {
       return pathname === href;
     }
     return pathname.startsWith(href);
   };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container-max flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 border-red-500 border"> {/* Added temporary red border */}
          <Image
            src="/siventys-logo.svg"
            alt="Siventys Logo"
            width={140}
            height={35}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-sans font-medium"> {/* Added font-sans */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
               className={`transition-colors hover:text-accent ${isActive(item.href) ? 'text-accent font-semibold' : 'text-foreground/80'}`}
            >
              {item.label}
            </Link>
          ))}
          <LocaleSwitcher />
          <ThemeSwitcher /> {/* Added ThemeSwitcher */}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
           <LocaleSwitcher />
           <ThemeSwitcher /> {/* Added ThemeSwitcher */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="font-sans"> {/* Added font-sans */}
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6">
              <nav className="flex flex-col gap-6 mt-8 font-sans"> {/* Added font-sans */}
                {navItems.map((item) => (
                   <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-medium transition-colors hover:text-accent ${isActive(item.href) ? 'text-accent font-semibold' : 'text-foreground'}`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
