import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({ duration : 1500,
               offset: 100,
               delay : 100})
  }, []);
  
  return (
   
    <div>
    <Head>

<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-YMXN1F5HMZ"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YMXN1F5HMZ', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
    </Head>
  <ThemeProvider enableSystem={true} attribute='class'>
  <Component {...pageProps} />
  </ThemeProvider>
  </div>
  
  )
}
