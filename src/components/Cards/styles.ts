import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: center;


    @media(max-width: 1150px) {
        flex-direction: column;
    }
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.5em;
`;