import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Breno Façanha - Desenvolvedor Full Stack" />
        <meta property="og:description" content="Desenvolvedor Full Stack especializado em criar soluções web modernas e eficientes. Transforme suas ideias em realidade com tecnologia de ponta." />
        <meta property="og:image" content="/compatilhamento.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" /> 
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
