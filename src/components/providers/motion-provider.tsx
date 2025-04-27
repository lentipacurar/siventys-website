'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

interface MotionProviderProps {
  children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  // You can configure default motion settings here if needed
  return <MotionConfig>{children}</MotionConfig>;
}
