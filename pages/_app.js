import Head from "next/head";
import Script from "next/script";
import "../styles/main.scss";

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        {/* Only metadata, no external stylesheets or scripts */}
      </Head>

      {/* External scripts using next/script */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <Script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
        integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <Component {...pageProps} />
    </>
  );
};
