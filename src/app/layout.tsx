import type { Metadata } from 'next';
import './globals.css';
import NavHeader from './components/NavHeader';

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
      <body className="h-screen w-screen max-h-full max-w-full flex">
        <NextUIProvider>
          <NavHeader />
          <div className="w-full h-[calc(100vh-72px)] flex items-start justify-center  max-w-7xl mx-auto bg-primary">
            {children}
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
