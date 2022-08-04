import Footer from 'components/Footer';
import Head from 'next/head';
import Banner from 'sections/Banner';
import Benefits from 'sections/Benefits';
import Faq from 'sections/Faq';
import Sell from 'sections/Sell';
import Testimonies from 'sections/Testimonies';

const Home = () => {
  return (
    <>
      <Head>
        <title>Rocket Wins</title>
        <meta name="description" content="Generated by create next app" />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <Banner />
      <Benefits />
      <Testimonies />
      <Faq />
      <Sell />
      <Footer />
    </>
  );
};

export default Home;
