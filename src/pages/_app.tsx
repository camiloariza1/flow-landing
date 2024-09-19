import '@/styles/globals.css'
import React from 'react';

type AppProps = {
  Component: React.ComponentType
  pageProps: any
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}