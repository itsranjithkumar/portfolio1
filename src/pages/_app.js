import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head'; // Add this line
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({ subsets: ['latin'], variable: "-font-montserrat" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}