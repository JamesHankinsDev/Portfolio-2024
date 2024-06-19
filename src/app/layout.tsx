'use client';

// import type { Metadata } from 'next';
import './globals.css';
import NavHeader from './components/NavHeader';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Metadata from './Metadata';

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
    <html lang="en">
      <Metadata title={metadata.title} description={metadata.description} />
      <body className="h-screen w-screen max-h-full max-w-full flex">
        <NextUIProvider>
          <Router>
            <NavHeader />
            <div className="w-full h-[calc(100vh-72px)] flex items-start justify-center  max-w-7xl mx-auto bg-primary">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/AboutMe" element={<AboutMe />} />
              </Routes>
            </div>
          </Router>
        </NextUIProvider>
      </body>
    </html>
  );
}
