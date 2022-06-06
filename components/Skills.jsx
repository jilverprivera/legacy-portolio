import styled from "styled-components";

import { SIZES } from "../constants";

const Skills = () => {
  return (
    <div>
      <Row>
        <Poligon>
          <Span>Robotics</Span>
        </Poligon>
      </Row>
      <Row top>
        <Poligon>
          <Span>Web Development</Span>
        </Poligon>
        <Poligon>
          <Span>Mobile Development</Span>
        </Poligon>
      </Row>

      <Row>
        <Poligon>
          <Span>GIT</Span>
        </Poligon>
        <Poligon>
          <Span>CI/CD</Span>
        </Poligon>
        <Poligon>
          <Span>Testing</Span>
        </Poligon>
      </Row>

      <Row>
        <Poligon>
          <Span>Team Worker</Span>
        </Poligon>
        <Poligon>
          <Span>Emphatic</Span>
        </Poligon>
        <Poligon>
          <Span>Open Mindedness</Span>
        </Poligon>
        <Poligon>
          <Span>Collaborative</Span>
        </Poligon>
      </Row>
    </div>
  );
};

export default Skills;

const Row = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Poligon = styled.div`
  position: relative;
  width: 10rem;
  height: 11rem;
  margin: 0rem 1.5rem;
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.black};
`;

const Span = styled.span`
  position: relative;
  width: 9.375rem;
  height: 10.375rem;
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
  //   border: 0.2rem solid #000;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  font-size: ${SIZES.small};
  text-align: center;
`;
