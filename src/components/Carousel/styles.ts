import styled from 'styled-components';
import { Button as ButtonChakra } from '@chakra-ui/react';

export const Button = styled(ButtonChakra)`
    background-color:#86D9DC;

    &:hover{
        background-color:#457B9D;
    }
    @media screen and (max-width: 500){
        width: 10px;
    }
`; 