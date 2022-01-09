/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
import Cards from '../components/Cards';
import CarouselMain from '../components/Carousel';
import Head from 'next/head'
// import Image from 'next/image'
import { Container } from '../styles';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <CarouselMain />
        <Cards />
        <Footer />
      </Container>
    </>
  )
}

export default Home
