import styled from "styled-components";

export const BannerContent = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectContainer = styled.section`
  width: 100%;
  max-width: 130rem;
  margin: 8rem auto 0rem;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProjectContent = styled.div`
  width: 100%;
  display: grid;

  row-gap: 3rem;
  column-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  border: 0.1rem solid #000;
`;

export const Card = styled.div`
  border: 0.1rem solid #000;
  width: 100%;
  min-height:30rem;
`;

