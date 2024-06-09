import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavHeader from './components/NavHeader';

const inter = Inter({ subsets: ['latin'] });

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';

export const metadata: Metadata = {
  title: 'James Hankins',
  description: 'The Protfolio of James Hankins, software engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <NavHeader />
          <div className="h-screen flex items-center justify-center">
            {children}
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
