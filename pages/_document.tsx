// Import Modules
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="all" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="keywords" content="Akhil Nair, Portfolio, Resume, AkhilxNair" />
          <meta name="author" content="Akhil Nair" />
          <meta name="description" content="Personal Portfolio page of Akhil Nair" />
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="mobile-web-app-capable" content="yes" />
          {/* // TODO: SEO */}
        </Head>
        <body>
          <Main />
          {/* // TODO: Analytics */}
        </body>
        <NextScript />
      </Html>
    );
  }
}
