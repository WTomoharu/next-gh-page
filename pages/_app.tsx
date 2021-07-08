import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

import '../styles/globals.css';

const Nav = () => (
  <nav>
    <Link href="/">Index</Link>
    {' | '}
    <Link href="/about">About</Link>
  </nav>
)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <Head>
      <title>Next-GH-Pages</title>
    </Head>

    <>
      <Nav />
      <Component {...pageProps} />
    </>
  </>
  )
}

export default App