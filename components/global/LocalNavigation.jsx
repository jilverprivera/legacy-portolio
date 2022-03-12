import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const LocalNavigation = ({ arr }) => {
  return (
    <DotsWrapper>
      {arr.map((data) => (
        <DotLink
          key={data.route}
          to={data.route}
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          activeClass="active-section"
        ></DotLink>
      ))}
    </DotsWrapper>
  );
};

export default LocalNavigation;

const DotsWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  jusity-content: center;
  flex-direction: column;
`;

const DotLink = styled(Link)`
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  margin: 0.5rem 0rem;
  border: 0.2rem solid ${({ theme }) => theme.black};
  &:hover {
    cursor: pointer;
  }
  .active-section {
    background-color: ${({ theme }) => theme.black};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
  }
`;
