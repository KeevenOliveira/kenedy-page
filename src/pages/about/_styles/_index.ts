import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    align-items: center;
`;

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 4rem;
`;

export const Content = styled.main`
    width: 25%;
    @media screen and (max-width: 600px){
        width: 80%;
        margin-bottom: 2rem;
    }
`;

export const PhotographContainer = styled.div`

`;

export const Photograph = styled.img`
    border-radius: 50%;
    width: 22rem;
    margin-left: 4rem;
    @media screen and (max-width: 600px){
        width: 15rem;
        margin-bottom: 0rem;
    }
`;

export const Main = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 600px){
        flex-direction: column;
        justify-content: center;
    }
`;
export const Circle = styled.svg`
    z-index: -999;
    position: absolute;
    top: 280px;
    right: 300px;
    @media screen and (max-width: 780px){
        top: 350px;
        right: 50px;
    }
    @media screen and (max-width: 600px){
        top: 490px;
        right: 20px;
    }
`;