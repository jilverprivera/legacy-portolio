import CurrentProject from "./CurrentProject";
import Projects from "./Projects";

import { Container, Wrapper } from "../../styles";
import Location from "../location";

const Portfolio = () => {
  return (
    <Container id="portfolio">
      <Wrapper>
          <Location location="03 / Works"/>
        <CurrentProject />
        <Projects />
      </Wrapper>
    </Container>
  );
};

export default Portfolio;
