import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import Logo from "../../public/icon.svg";

import { SIZES } from "../../constants";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  const { pathname } = useRouter();
  return (
    <Container id="contact">
      {pathname !== `/contact` && (
        <Wrapper>
          <Title>Let&apos;s</Title>
          <Title>Connect✌</Title>
          <Message>
            Feel free to send me a message on my social networks.
          </Message>
          <div>
            <NewtworkLink
              href="https://www.linkedin.com/in/jilverprivera/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </NewtworkLink>
            <NewtworkLink
              href="https://www.instagram.com/jilverprivera/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram />
            </NewtworkLink>
            <NewtworkLink
              href="https://twitter.com/Jilverprivera"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter />
            </NewtworkLink>
          </div>
          <Link href={`/contact`} passHref>
            <EmailBtn>Send email</EmailBtn>
          </Link>
        </Wrapper>
      )}
      <FooterContent>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <div>
          <FooterDesc>
            2020 - {new Date().getFullYear()} | Jilver Pacheco
          </FooterDesc>
          <FooterDesc>No rights reserved. 🤘</FooterDesc>
        </div>
      </FooterContent>
    </Container>
  );
};

export default Footer;

const Container = styled(motion.section)`
  width: 100%;
  background-color: ${({ theme }) => theme.white_1};
`;
const Wrapper = styled(motion.footer)`
  position: relative;
  width: 90%;
  max-width: 130rem;
  margin: 0rem auto;
  padding-top: 10rem;
  min-height: calc(100vh - 20rem);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
`;
const FooterContent = styled(motion.footer)`
  width: 90%;
  max-width: 130rem;
  margin: 0rem auto;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  font-weight: 400;
  font-size: ${SIZES.extraLarge};
  line-height: 6rem;
  color: ${({ theme }) => theme.black};
`;
const Message = styled.p`
  margin: 5rem 0rem;
  font-size: ${SIZES.medium};
  font-weight: 400;
`;
const NewtworkLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  font-size: 2.8rem;
  margin: 0rem 1rem;
  &:first-child {
    margin-left: 0rem;
  }
`;
const EmailBtn = styled.a`
  text-decoration: none;
  font-size: ${SIZES.medium};
  font-weight: 400;
  color: ${({ theme }) => theme.white};
  position: absolute;
  top: 50%;
  right: 0rem;
  transform: translateY(-50%);
  width: 20rem;
  height: 20rem;
  border-radius: 10rem;
  background-color: ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out;
  :hover {
    transform: translateY(-50%) rotate(-24.5deg);
    color: ${({ theme }) => theme.primary};
    font-size: ${SIZES.semiLarge};
  }
`;

const LogoContainer = styled.div`
  width: 6rem;
  height: 6rem;
  margin-right: 1rem;

  display: flex;
  //   border: 1px solid #000;
  align-items: center;
  justify-content: center;
`;

const FooterDesc = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.small};
`;
