import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ReactNode } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { MotionProvider } from '@/components/providers/motion-provider';
import { ThemeProvider } from '@/components/providers/theme-provider'; // Import the new client ThemeProvider

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <MotionProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </MotionProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
