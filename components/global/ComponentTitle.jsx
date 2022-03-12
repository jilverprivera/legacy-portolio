import PropTypes from "prop-types";
import styled from "styled-components";

import { SIZES } from "../../constants";

export const ComponentTitle = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

ComponentTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  width: 100%;
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.gray};
  font-size: ${SIZES.semiLarge};
  padding-left: 5rem;
  font-weight: 500;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 4rem;
    height: 1rem;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.primary};
  }
`;
