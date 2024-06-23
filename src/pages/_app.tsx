import type { AppProps } from 'next/app';
import React from 'react';
import Layout from './layout';
import './globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
