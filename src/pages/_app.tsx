import type { AppProps } from 'next/app';
import Header from '../components/Header';
import { Global } from '../styles/global';
import { ChakraProvider } from '@chakra-ui/react';
// import SSRProvider from 'react-bootstrap/SSRProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Global>
        <Component {...pageProps} />
      </Global>
    </ChakraProvider>
  )
}

export default MyApp
