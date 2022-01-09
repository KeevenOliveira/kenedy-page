import styled from 'styled-components';
import { Button as ButtonChakra } from '@chakra-ui/react';

export const Button = styled(ButtonChakra)`
    background-color:#86D9DC;
    
    @media(max-width: 550px) {
        display: none;
    }
    &:hover{
        background-color:#457B9D;
    }
`; 