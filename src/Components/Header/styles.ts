import styled from 'styled-components';
import { Button as ButtonChakra } from '@chakra-ui/react';

export const Container = styled.header`
    background-color:#457B9D;
    /* padding: 1em; */
    height: 9vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const Logo = styled.div`
    width: 40px; 
    /* border: 2px solid red; */
    margin-top: -5px;
    margin-left: 1em;
`;

export const ContainerButtons = styled.main`
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 2px solid red; */
`;

export const Button = styled(ButtonChakra)`
    color: #FFFF
`;