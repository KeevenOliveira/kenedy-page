import Link from 'next/link'
import { Button } from '@chakra-ui/react';
import { FooterContainer, ContainerButtons } from "./styles";
import { useRouter } from 'next/router';
import { ActiveLinkStyle } from '../ActiveLinkStyle';
export default function Footer() {
    const { asPath } = useRouter();
    return (
        <FooterContainer>
            <ContainerButtons>
                <ActiveLinkStyle active={asPath === '/'} title='Home' href='/' />
                <ActiveLinkStyle active={asPath === '/contact'} title='Contato' href='/contact' />
                <ActiveLinkStyle active={asPath === '/posts'} title='Posts' href='/posts' />
                <ActiveLinkStyle active={asPath === '/about'} title='Sobre' href='/about' />
            </ContainerButtons>
        </FooterContainer>
    );
}