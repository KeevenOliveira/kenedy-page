/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
import Cards from '../components/Cards';
import CarouselMain from '../components/Carousel';
import Head from 'next/head'
// import Image from 'next/image'
import { Container, FloatingWhatsApp } from '../styles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FaWhatsapp } from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <CarouselMain />
        <Cards />
      </Container>
      <a href="https://api.whatsapp.com/send?phone=5581982687667&text=Ol%C3%A1%2C%20tudo%20bem%20Kennedy%3F%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20apartamento%20da%20direcional%20engenharia." style={{
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
        boxShadow: '1px 1px 2px #888'
      }}>
        <FaWhatsapp size={30} />
      </a>
    </>
  )
}

export default Home
