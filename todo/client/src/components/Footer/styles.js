import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: #000;
    padding: 1rem 0;
`

export const Text = styled.p`
    font-weight: bold;
    color: #fff;
`

export const Link = styled.a`
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 300ms ease-in-out;
    
    &:hover {
        color: #d80258;
    }
`