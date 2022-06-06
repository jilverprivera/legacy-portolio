import styled from "styled-components";
import { SIZES } from "../constants";

export const HeadingText = styled.h1`
  font-size: ${SIZES.semiLarge};
  font-weight: 600;
  color: ${({ theme }) => theme.black};
`;
export const TypewriterText = styled.h2`
  font-size: ${SIZES.extraLarge};
  font-weight: 600;
  color: ${({ theme }) => theme.secondary};
  display: flex;
`;
export const Text = styled.p`
  font-size: ${SIZES.medium};
  font-weight: 400;
  color: ${({ theme }) => theme.black};
  line-height: 2.5rem;
  margin-bottom: 3rem;
  width: 60rem;
`;

export const CustomTitle = styled.h1`
  font-size: ${SIZES.ultraLarge};
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`;
export const SectionTitle = styled.h2`
  font-weight: 400;
  font-size: ${SIZES.extraLarge};
  line-height: 6rem;
  color: ${({ theme }) => theme.black};
`;

export const Message = styled.p`
  font-weight: 400;
  line-height: 2.5rem;
  margin: 2rem 0rem;
  font-size: ${SIZES.regular};
`;

export const FooterDescription = styled.span`
  color: ${({ theme }) => theme.gray};
  font-size: ${SIZES.small};
`;
