import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";

import { SIZES } from "../../constants";

const url = "jilverpacheco.com";

const SectionTitle = ({ title, message, path }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        <Message>{message}</Message>
        <Link href={path} passHref>
          <UrlLink>
            {url}
            <Path>{path}</Path>
          </UrlLink>
        </Link>
      </Content>
    </Wrapper>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  path: PropTypes.string.isRequired,
};

export const Wrapper = styled.div`
  width: 100%;
  max-width: 130rem;
  margin: 0rem auto 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export const Title = styled.h2`
  position: relative;
  font-weight: 400;
  font-size: ${SIZES.extraLarge};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.black};
  ::after {
    content: "";
    position: absolute;
    bottom: 2.25rem;
    right: -2rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.primary};
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Message = styled.span`
  font-size: ${SIZES.small};
  text-transform: uppercase;
  color: ${({ theme }) => theme.gray};
  margin-bottom: 1rem;
`;
const UrlLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.medium};
`;
const Path = styled.span`
  color: ${({ theme }) => theme.primary};
`;
