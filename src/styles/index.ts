import styled from 'styled-components';

export const Container = styled.main`

`;

export const Title = styled.h1`
    font-size: 2em;
    font-weight: 600;
    margin-bottom: 0.5em;
`;

export const FloatingWhatsApp = styled.a`
    width: 50px,
    height: 50px,
    position: fixed,
    border-radius: 20px,
    display: flex,
    justify-content: center,
    align-items: center,
    z-index: 1000,
    background-color: #00E676,
    right: 20px,
    bottom: 40px,
    box-shadow: 1px 1px 2px #888
`;