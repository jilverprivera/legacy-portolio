import { networks } from "../../helpers/networks";

import {
  FooterContainer,
  FooterContent,
  FooterIcon,
  FooterNetworkContent,
  FooterWrapper,
  NetworkWrapper,
} from "../../styles/layout";

import {
  FooterDescription,
  Message,
  SectionTitle,
} from "../../styles/typography";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SectionTitle>Let&apos;s connect!</SectionTitle>
        <Message>Feel free to send me a message on my social networks</Message>
        <NetworkWrapper>
          {networks.map((_, index) => (
            <FooterNetworkContent key={index} href={_.url} target="_blank">
              <FooterIcon bgColor={_.bgColor} iconColor={_.color}>
                {_.icon}
              </FooterIcon>
            </FooterNetworkContent>
          ))}
        </NetworkWrapper>
      </FooterWrapper>
      <FooterContent>
        <FooterDescription>
          Jilver Pacheco Rivera • @jilverprivera • All rights reserved 2020
          -&nbsp;
          {new Date().getFullYear()}
        </FooterDescription>
        <FooterDescription>From Colombia ❤ to the world</FooterDescription>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
