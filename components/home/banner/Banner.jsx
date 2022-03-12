import Typewriter from "typewriter-effect";
import { Container, Descriptions, LinkedBtn, Name } from "./styles";

const Banner = () => {
  return (
    <Container id="home">
      <Name>I&apos;m Jilver Pacheco</Name>
      <Descriptions>
        <Typewriter
          options={{
            strings: [
              "Software developer.",
              "Electronic engineer.",
              "Robotic enthusiast.",
            ],
            autoStart: true,
            loop: true,
            delay: 80,
            deleteSpeed: 40,
            pauseFor: 2500,
          }}
        />
      </Descriptions>

      <LinkedBtn
        to="portfolio"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      >
        Take a Look
      </LinkedBtn>
    </Container>
  );
};

export default Banner;
