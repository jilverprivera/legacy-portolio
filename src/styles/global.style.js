import styled from "styled-components";

export const Container = styled.section`
    max-width: 130rem;
    min-height: 100vh;
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WrapperFlex = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
`;

export const WrapperGrid = styled.div`
    width: 100%;
    // min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    align-content: center;
`;
