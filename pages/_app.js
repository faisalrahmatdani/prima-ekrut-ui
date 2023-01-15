// import "antd/dist/antd.css";
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rekrutmen Prima Tour And Travel</title>
        {/* Turn off the google translate plugins */}
        {/* <meta name="google" content="notranslate" />
        <meta name="color-scheme" content="only light"></meta>
        <link rel="shortcut icon" href="/logo.png" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
