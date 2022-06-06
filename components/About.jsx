import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import Skills from "./Skills";

import { SIZES } from "../constants";
import Awards from "./Awards";
import Education from "./Education";
import Experience from "./Experience";

import { BsArrowUpRight } from "react-icons/bs";

const About = () => {
  const [selected, setSelected] = useState("skills");

  return (
    <Wrapper>
      <TitleWrapper>
        <SectionTitle>About Me</SectionTitle>
      </TitleWrapper>
      <TextContent>
        <Title>
          Hey!, I&apos;m Jilver Pacheco and I develop things for the Internet.
        </Title>
        <Text>
          I started in this wonderful world in 2020 when I built my first
          desktop app to store the documents of different academic courses of
          <strong> Electronic Engineering</strong>. Now, as a
          <strong> Software Developer </strong>my main focus is to build
          <strong> UI/UX</strong>-centric and accessible digital applications.
        </Text>
        <ArrowContainer>
          <ArrowText>If you want to know more about me, see there.</ArrowText>
          <Arrow>
            <BsArrowUpRight />
          </Arrow>
        </ArrowContainer>
      </TextContent>
      <Content>
        <ButtonWrapper>
          <Button onClick={() => setSelected("awards")}>AWARDS</Button>
          <Button onClick={() => setSelected("education")}>EDUCATION</Button>
          <Button onClick={() => setSelected("experience")}>EXPERIENCE</Button>
          <Button onClick={() => setSelected("skills")}>SKILLS</Button>
        </ButtonWrapper>
        <AnimatePresence exitBeforeEnter>
          {selected === "skills" && <Skills />}
          {selected === "education" && <Education />}
          {selected === "experience" && <Experience />}
          {selected === "awards" && <Awards />}
        </AnimatePresence>
      </Content>
    </Wrapper>
  );
};

export default About;

const Arrow = styled.span`
  width: 8rem;

  height: 8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  font-size: ${SIZES.large};
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ArrowText = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.regular};
  font-weight: 400;
  margin-right: 1rem;
`;

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-width: 130rem;
  margin: 0rem auto;
  padding-top: 7.5rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.black};
  transform: rotate(-90deg);
  text-align: center;
  text-transform: uppercase;
  font-size: ${SIZES.medium};
  font-weight: 700;
`;

const TextContent = styled.div`
  grid-column: span 2;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.semiLarge};
  font-weight: 600;
  margin-bottom: 3rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.regular};
  font-weight: 400;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  grid-column: span 3;
  // border: 1px solid #000;
  margin-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  // border: 1px solid #000;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 7.5rem;
  row-gap: 2rem;
  margin-bottom: 6rem;
`;

const Button = styled.button`
  border: none;
  background: none;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    bottom: 0rem;
    left: 0rem;
    width: 0rem;
    background-color: #000;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    font-weight: 600;
    ::before {
      content: "";
      position: absolute;
      bottom: 0rem;
      left: 0rem;
      width: 100%;
      height: 0.2rem;
      background-color: #000;
      border-radius: 0.1rem;
    }
  }
`;
