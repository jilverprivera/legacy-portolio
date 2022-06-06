import Typewriter from "typewriter-effect";
import styled from "styled-components";
import HorizontalScroll from "react-scroll-horizontal";

import { SIZES } from "../constants";

import { Wrapper } from "../styles/layout";

const Banner = () => {
  const child = { width: `30em`, height: `100%`, border: "1px solid #000;" };
  return (
    <Wrapper alignstart>
      <Title>I&apos;m Jilver Pacheco</Title>
      <Subtitle>
        <Typewriter
          options={{
            strings: [
              "Software Developer",
              "Electronic Engineer",
              "Robotic Enthusiast",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </Subtitle>
      <TextContainer>
        <Text>
          Welcome to my little space on the WWW, where I show my projects and
          talk about what I like.
        </Text>
      </TextContainer>
    </Wrapper>
  );
};

export default Banner;

const Title = styled.h1`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.semiLarge};
  font-weight: 600;
`;

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: ${SIZES.extraLarge};
`;

const TextContainer = styled.div`
  width: 50rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.regular};
`;

const Box = styled.div`
  width: 60rem;
  height: 70vh;
  border: 1px solid #000;
`;
