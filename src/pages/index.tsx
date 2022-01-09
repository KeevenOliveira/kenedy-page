/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
import CarouselMain from '../components/Carousel';
// import Head from 'next/head'
// import Image from 'next/image'
import { Container } from '../styles';

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <CarouselMain/>
      </Container>
    </>
  )
}

export default Home
