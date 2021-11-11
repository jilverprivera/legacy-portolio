import styled from "styled-components";

export const Container = styled.section`
    padding: ${(props) => props.padding};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 76.8rem) {
        padding: 6rem 0rem;
    }
`;

export const WrapperFlex = styled.div`
    width: 90%;
    position: relative;
    max-width: 130rem;
    min-height: 100vh;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`;

export const WrapperGrid = styled.div`
    width: 90%;
    max-width: 130rem;
    min-height: 100vh;
    padding: 6rem 0rem;
    margin: auto;
    position: relative;
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(${(props) => props.columnWidth}, 1fr)
    );

    row-gap: ${(props) => props.rowGap};
    column-gap: ${(props) => props.colGap};
    align-content: center;
    @media (max-width: 76.8rem) {
        display: block;
    }
//     border: 1px solid #000;
`;
