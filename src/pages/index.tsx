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
        <title>ASSERTIVIDADE GARANTIDA | Rocket Wins Vip</title>
        <meta
          name="description"
          content="Rocket Wins Vip | O robô que te faz investir da forma mais assertiva e eficiente do mercado."
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
