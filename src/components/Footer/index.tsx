import {
    FooterContainer,
    ContainerButtons,
    Copyright,
    Created,
    ContainerSocialMedia,
    Logo,
    LogoContainer,
    SocialMediaButton,
    TextMediaSocial
} from "./styles";
import { useRouter } from 'next/router';
import { ActiveLinkStyle } from '../ActiveLinkStyle';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
    const { asPath } = useRouter();
    const WhatsApp = 'https://api.whatsapp.com/send?phone=5581982687667&text=Ol%C3%A1%2C%20tudo%20bem%20Kennedy%3F%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20apartamento%20da%20direcional%20engenharia.';
    const Facebook = 'https://www.facebook.com/Kennedy-Lopes-106262511545400';
    const Instagram = 'https://www.instagram.com/lopesconsultor123/';
    return (
        <FooterContainer>
            <ContainerButtons>
                <div>
                    <ActiveLinkStyle active={asPath === '/'} title='Home' href='/' />
                    <ActiveLinkStyle active={asPath === '/contact'} title='Contato' href='/contact' />
                    <ActiveLinkStyle active={asPath === '/posts'} title='Posts' href='/posts' />
                    <ActiveLinkStyle active={asPath === '/about'} title='Sobre' href='/about' />
                </div>
            </ContainerButtons>
            {/* <Logo>
                <svg width="100%" height="100%" viewBox="0 0 247 412" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M123.66 239.328L94.8316 267.734V341H77.5347V136.25H94.8316V246.641L199.738 136.25H221.535L135.753 227.375L228.144 341H207.05L123.66 239.328Z" fill="white" />
                    <path d="M54.4692 287.305H142.238V300H39.3324V122.266H54.4692V287.305Z" fill="white" />
                    <path d="M212.605 282.328C209.35 312.276 198.608 335.193 180.378 351.078C162.279 366.964 138.126 374.906 107.917 374.906C86.8237 374.906 68.1388 369.633 51.8628                     359.086C35.7169 348.539 23.2169 333.63 14.3628 314.359C5.50861 294.958 1.01642 272.823 0.886215 247.953V211.039C0.886215 185.779 5.3133 163.383 14.1675 143.852C23.0216 124.32 35.7169 109.281 52.2534 98.7344C68.9201 88.0573 88.0607 82.7188 109.675 82.7188C140.144 82.7188 164.167 90.987 181.746 107.523C199.454 123.93 209.74 146.651 212.605 175.688H188.386C182.397 127.38 156.16 103.227 109.675 103.227C83.894 103.227 63.3211 112.862 47.9565 132.133C32.7222 151.404 25.105 178.031 25.105 212.016V246.781C25.105 279.594 32.5268 305.766 47.3706 325.297C62.3445 344.828 82.5268 354.594 107.917 354.594C133.048 354.594 151.993 348.604 164.753 336.625C177.514 324.516 185.391 306.417 188.386 282.328H212.605Z" fill="white" />
                </svg>
            </Logo> */}
            <div>
                <TextMediaSocial>
                    <p>
                        Medias Sociais
                    </p>
                </TextMediaSocial>
                <ContainerSocialMedia>
                    <div>
                        <a href={WhatsApp}>
                            <SocialMediaButton>
                                <FaWhatsapp size={30} />
                            </SocialMediaButton>
                        </a>
                        <a href={Facebook}>
                            <SocialMediaButton>
                                <FaFacebook size={30} />
                            </SocialMediaButton>
                        </a>
                        <a href={Instagram}>
                            <SocialMediaButton>
                                <FaInstagram size={30} />
                            </SocialMediaButton>
                        </a>
                    </div>
                </ContainerSocialMedia>
                <LogoContainer>
                    <Logo>
                        <svg width="100%" height="100%" viewBox="0 0 247 412" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M123.66 239.328L94.8316 267.734V341H77.5347V136.25H94.8316V246.641L199.738 136.25H221.535L135.753 227.375L228.144 341H207.05L123.66 239.328Z" fill="white" />
                            <path d="M54.4692 287.305H142.238V300H39.3324V122.266H54.4692V287.305Z" fill="white" />
                            <path d="M212.605 282.328C209.35 312.276 198.608 335.193 180.378 351.078C162.279 366.964 138.126 374.906 107.917 374.906C86.8237 374.906 68.1388 369.633 51.8628                     359.086C35.7169 348.539 23.2169 333.63 14.3628 314.359C5.50861 294.958 1.01642 272.823 0.886215 247.953V211.039C0.886215 185.779 5.3133 163.383 14.1675 143.852C23.0216 124.32 35.7169 109.281 52.2534 98.7344C68.9201 88.0573 88.0607 82.7188 109.675 82.7188C140.144 82.7188 164.167 90.987 181.746 107.523C199.454 123.93 209.74 146.651 212.605 175.688H188.386C182.397 127.38 156.16 103.227 109.675 103.227C83.894 103.227 63.3211 112.862 47.9565 132.133C32.7222 151.404 25.105 178.031 25.105 212.016V246.781C25.105 279.594 32.5268 305.766 47.3706 325.297C62.3445 344.828 82.5268 354.594 107.917 354.594C133.048 354.594 151.993 348.604 164.753 336.625C177.514 324.516 185.391 306.417 188.386 282.328H212.605Z" fill="white" />
                        </svg>
                    </Logo>
                </LogoContainer>
                <Copyright>Copyright {(new Date).getFullYear()}, Kennedy - Todos os direitos reservados</Copyright>
                <Created>Desenvolvido por <a href='https://business-card-git-main-progkeeven.vercel.app/'>Keeven.</a></Created>
            </div>
        </FooterContainer>
    );
}