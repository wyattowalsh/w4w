import { ReactNode } from 'react';
import { ThemeProvider } from 'shadcn-ui';
import { motion } from 'framer-motion';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
