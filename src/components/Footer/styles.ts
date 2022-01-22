import styled from 'styled-components';

export const FooterContainer = styled.footer`
    margin-top: 2rem;
    background-color: #457B9D;
    color: #FFFFFF;
`;
export const ContainerButtons = styled.main`
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 550px) {
        button.first-btn {
            margin-left: 1em;
        }
        button.third-btn {
            display: none;
        }
    }
`;