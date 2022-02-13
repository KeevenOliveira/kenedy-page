import type { AppProps } from 'next/app';
import Header from '../components/Header';
import { Global } from '../styles/global';
import { ChakraProvider } from '@chakra-ui/react';
// import SSRProvider from 'react-bootstrap/SSRProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import { LinkWhatsApp } from '../styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Global>
        <Header />
        <Component {...pageProps} />
        <LinkWhatsApp href="https://api.whatsapp.com/send?phone=5581982687667&text=Ol%C3%A1%2C%20tudo%20bem%20Kennedy%3F%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20apartamento%20da%20direcional%20engenharia." style={{
          width: '50px',
          height: '50px',
          position: 'fixed',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          backgroundColor: '#00E676',
          right: '20px',
          bottom: '40px',
          boxShadow: '1px 1px 2px #888',
        }}>
          <FaWhatsapp size={30} />
        </LinkWhatsApp>
        <Footer />
      </Global>
    </ChakraProvider>
  )
}

export default MyApp
