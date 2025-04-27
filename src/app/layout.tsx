import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Assuming Toaster is needed

export const metadata: Metadata = {
  title: 'Siventys - AI Powered Solutions',
  description: 'Innovative AI Agents and Custom Solutions by Siventys',
  // Add more metadata like open graph tags, icons etc.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Apply dark theme by default and the custom font variable
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
