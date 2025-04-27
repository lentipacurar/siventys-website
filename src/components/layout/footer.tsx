'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-primary py-6 mt-auto" // Ensure footer sticks to bottom
    >
      <div className="container-max text-center text-sm text-primary-foreground/70 px-4">
        {t('copy', { year: currentYear })}
      </div>
    </motion.footer>
  );
}
