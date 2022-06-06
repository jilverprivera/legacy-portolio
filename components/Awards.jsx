import styled from "styled-components";

import AWARDS from "../data/awards.json";

import { SIZES } from "../constants";
import { Card, CardTitle, Content } from "../styles/about";
import { variants } from "../helpers/variants";

const Awards = () => {
  return (
    <>
      <Content variants={variants} initial="hidden" animate="show" exit="exit">
        <Year>2020</Year>
        <div>
          {AWARDS.filter((el) => el.date === "2020").map((item, index) => (
            <Card
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <CardTitle>{item.award}</CardTitle>
              <Location>{item.location}</Location>
            </Card>
          ))}
        </div>
      </Content>
      <Content variants={variants} initial="hidden" animate="show" exit="exit">
        <Year>2019</Year>
        <div>
          {AWARDS.filter((el) => el.date === "2019").map((item, index) => (
            <Card
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <CardTitle>{item.award}</CardTitle>
              <Location>{item.location}</Location>
            </Card>
          ))}
        </div>
      </Content>
    </>
  );
};

export default Awards;

const Year = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: ${SIZES.medium};
  font-weight: 500;
  padding-left: 2.5rem;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0rem;
    transform: translateY(-50%);
    width: 2rem;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 0.2rem;
  }
`;

const Location = styled.span`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.small};
  font-weight: 400;
`;
