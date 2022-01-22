import type { AppProps } from 'next/app';
import Header from '../components/Header';
import { Global } from '../styles/global';
import { ChakraProvider } from '@chakra-ui/react';
// import SSRProvider from 'react-bootstrap/SSRProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Global>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Global>
    </ChakraProvider>
  )
}

export default MyApp
