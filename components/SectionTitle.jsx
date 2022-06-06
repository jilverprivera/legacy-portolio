import Link from "next/link";
import styled from "styled-components";

import { SIZES } from "../constants";

export const SectionTitle = ({ title, message, description, url }) => {
  return (
    <SectionContainer>
      <div>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </div>
      <MessageWrapper>
        <Message>{message}</Message>
        <Link href={url} passHref>
          <Page>
            jilverpacheco.vercel.app
            <URL>{url}</URL>
          </Page>
        </Link>
      </MessageWrapper>
    </SectionContainer>
  );
};

const SectionContainer = styled.nav`
  width: 100%;
  max-width: 130rem;
  margin: 0rem auto;
  padding: 7.5rem 0rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h2`
  font-size: ${SIZES.large};
  position: relative;
  padding-left: 4.5rem;
  color: ${({ theme }) => theme.black};
  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 4rem;
    height: 0.75rem;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.primary};
  }
`;
const Text = styled.p`
  font-size: ${SIZES.regular};
  color: ${({ theme }) => theme.black};
`;

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Message = styled.p`
  font-size: ${SIZES.small};
  color: ${({ theme }) => theme.gray};
  text-transform: uppercase;
`;

const Page = styled.a`
  font-size: ${SIZES.small};
  color: ${({ theme }) => theme.black};
  text-decoration: none;
`;
const URL = styled.span`
  font-size: ${SIZES.small};
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
`;
