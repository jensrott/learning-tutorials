import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;