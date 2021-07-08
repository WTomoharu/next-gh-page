import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

import '../styles/globals.css';

const Nav = () => {
  const links: { text: string, path: string }[] = [
    { text: "Index", path: "/" },
    { text: "About", path: "/about" },
  ]

  return (
    <nav>
      <ul>
        {links.map((link, i) => (
          <li key={i} style={{ display: "inline" }}>
            {0 < i ? " | " : ""}
            <Link href={link.path}>
              <a className="underline">{link.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Next-GH-Pages</title>
      </Head>

      <div className="p-2">
        <Nav />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App