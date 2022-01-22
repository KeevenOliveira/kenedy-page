import styled from 'styled-components';

export const FooterContainer = styled.footer`
    margin-top: 2rem;
    background-color: #457B9D;
    color: #FFFFFF;
`;
export const ContainerButtons = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    div{
        display: flex;
        justify-content: space-around;
        width: 50%;
        margin-top: 2rem;
    }
    @media(max-width: 550px) {
        div{
            flex-direction: column;
            button{
                & + button{
                    margin-top: 1rem;
                }
            }
        }
    }
`;

export const Copyright = styled.div`
    text-align: center;
    margin-top: 1rem;
`;
export const Created = styled.div`
    text-align: center;
    padding-bottom: 2rem;

    a {
        text-decoration: underline
    }
`;

export const ContainerSocialMedia = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        a{
            & + a{
            margin-left: 0.5rem;
            }
        }
    }
`;

export const Logo = styled.div`
     width: 40px; 
    /* border: 2px solid red; */
    margin-top: -5px;
    margin-left: 1em;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`;

export const SocialMediaButton = styled.div`
    width: 50px;
    height: 50px;
    border: 2px solid #FFF;
    border-radius: 50%;
    transition: border 0.2s;
    &:hover{
        border: 2px solid #0B285B;
        svg{
            color: #0B285B
        }
    }
    svg{
        &:hover{
        }
    }
`;

export const TextMediaSocial = styled.div`
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
`;