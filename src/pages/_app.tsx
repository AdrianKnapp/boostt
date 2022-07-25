import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { chakraTheme } from 'styles/theme';
import 'styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
