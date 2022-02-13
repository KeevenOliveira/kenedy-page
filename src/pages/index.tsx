/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
import Cards from '../components/Cards';
import CarouselMain from '../components/Carousel';
import Head from 'next/head'
// import Image from 'next/image'
import { Container, FloatingWhatsApp } from '../styles';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import { FaWhatsapp } from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <CarouselMain />
        <Cards />
      </Container>
    </>
  )
}

export default Home
