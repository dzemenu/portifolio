// Import Modules
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="keywords" content="Akhil Nair, Portfolio, Resume, AkhilxNair" />
          <meta name="author" content="Akhil Nair" />
          <meta name="description" content="Personal Portfolio page of Akhil Nair" />
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
