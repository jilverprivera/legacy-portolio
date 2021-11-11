import styled from "styled-components"

export const HeroWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
`;

export const LastProjectsContainer = styled.div`
    position: absolute;
    bottom: 30px;
    left: 0px;
`;

export const LastProjectsHeroWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: #444;
`;

export const ProjectViewHero = styled.div`
    max-width: 300px;
    margin-right: 20px;
    border-radius: 5px;
`;
