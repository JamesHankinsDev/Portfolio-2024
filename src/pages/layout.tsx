'use client';

import NavHeader from '../components/NavHeader';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Metadata from './Metadata';
import Resume from './WorkHistory';
import ProjectWork from './ProjectWork';
import Footer from '../components/Footer';

const metadata = {
  title: 'James Hankins',
  description: 'The Portfolio of James Hankins, Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Metadata title={metadata.title} description={metadata.description} />
      <NavHeader />
      <div className="w-full h-[calc(100vh-74px-45px)] sm:h-[calc(100vh-74px-23px)] flex items-start justify-center  max-w-7xl mx-auto bg-primary">
        {children}
      </div>
      <Footer />
    </>
  );
}
