import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { chakraTheme } from 'styles/theme';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'styles/global.scss';
import Header from 'components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
