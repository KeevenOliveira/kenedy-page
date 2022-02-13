/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import Header from '../../components/Header';
import { Title, Text, Dot } from '../../styles';
import { Flex, Container, Content, Photograph, PhotographContainer, Main, Circle } from './_styles/_index'

export default function About() {
    return (
        <Container>
            <Main>
                <Content>
                    <Title>Kennedy Adelson Lopes</Title>
                    <Text>
                        Olá, meu nome é Kenedy Adelson Lopes. Eu sou corretor credenciado pela Direcional Engenharia.
                    </Text>
                    <Text color='#AAA'>
                        "Trabalho em prol das grandes conquistas e realizações. A priori devemos não apenas agir, mas também sonhar; não apenas planejar, como também acreditar."
                    </Text>
                    <Flex>
                        <Dot />
                        <Text marginLeft='0.5rem'>CRECI - 15898</Text>
                    </Flex>

                </Content>
                <PhotographContainer>
                    <Photograph src='https://lh3.googleusercontent.com/pw/AM-JKLXSdprUY2uvU2_hNHuuBzunv1mP-Oq0LH0NzTINSuQH-nTvKCcOFu9zFWxvzKxIADgGx5jeQSg4gfkToJA5oqe6dkLZXBPWYn02rlc6_lT5cl9qfSTe1_Qc2O20QTZUbj9go76l2v_1ZBzU9sXMNmaS3w=s978-no?authuser=0' alt='eu' />
                    <Circle width="250" height="250" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="200" cy="200" r="200" fill="#86D9DC" />
                    </Circle>
                </PhotographContainer>
            </Main>
        </Container>
    )
}