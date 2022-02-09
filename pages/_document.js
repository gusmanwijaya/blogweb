/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class _document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,600;1,100;1,200;1,300;1,600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            rel="stylesheet"
          />
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </Head>
        <body className="font-poppins text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
