import "../styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Head>
        <title>waifus for programmers</title>
        <link
          rel="icon"
          href="https://cdn3.emoji.gg/emojis/5608-zerotwo-flushed.png"
        />
        <meta
          property="og:image"
          content="https://i.imgur.com/K1XgIe1.png"
        ></meta>
        <meta property="og:title" content="waifus for programmers"></meta>
        <meta
          property="og:description"
          content="🍘 a frontend for anime-girls-holding-programming-books repo."
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#fb7185" />
        <meta name="twitter:title" content="waifus for programmers" />
        <meta
          name="twitter:description"
          content="🍘 a frontend for anime-girls-holding-programming-books repo."
        />
        <meta name="twitter:image" content="https://i.imgur.com/K1XgIe1.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
