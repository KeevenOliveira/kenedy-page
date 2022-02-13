import styled from 'styled-components';

export const Container = styled.main`

`;

interface ITitle {
    size?: string;
    weight?: number;
}

export const Title = styled.h1<ITitle>`
    font-size: ${(props) => props.size ? props.size : '2em'};
    font-weight: ${(props) => props.weight ? props.weight : 600};
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
    box-shadow: 1px 1px 2px #888;
`;

interface IText {
    size?: string;
    color?: string;
    marginLeft?: string;
    marginRight?: string;
    margin?: string;
}

export const Text = styled.p<IText>`
    margin-top: 0.5rem;
    margin-bottom: 5rem;
    font-size: ${(props) => props.size ? props.size : '1.125em'}
    font-weight: lighter;
    color: ${(props)=> props.color? props.color: 'initial'};
    margin ${(props)=> props.margin ? props.margin : 'initial'};
    margin-left: ${(props)=> props.marginLeft ? props.marginLeft : 'initial'};
    margin-right: ${(props)=> props.marginRight ? props.marginRight: 'initial'};
`;

export const Dot = styled.div`
   width : 5px;
   height: 5px;
   background: #000;
   border-radius:50%;
   margin-left: 10px;
`;

export const LinkWhatsApp = styled.a`
    svg {
        transition: color 0.3s;
    }
    svg:hover{
        color: #FFF;
    }
`;