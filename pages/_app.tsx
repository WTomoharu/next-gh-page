import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <Link href="/">Index</Link>
    {' | '}
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