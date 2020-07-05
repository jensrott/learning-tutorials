import styled, { keyframes } from 'styled-components';

export const fade = keyframes`
    @keyframes fade {
        0% {
            opacity: 0;
            transform: translateY(40px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

export const Wrapper = styled.div`
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 8, 0.08) 0px 4px 8px 0px;
    padding: 1rem 1.5rem;
    animation: ${fade} 500ms ease-in-out;
`;

export const Text = styled.p`
    text-align: center;
    text-decoration: none;
`;

export const CheckBox = styled.input`
    text-align: center;
    color: red;
`;

export const DeleteIcon = styled.i`
    font-size: 1.5rem;
    cursor: pointer;
`