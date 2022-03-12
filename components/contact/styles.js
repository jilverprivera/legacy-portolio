import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";
import { SIZES } from "../../constants";

// --- CONTACT BANNER ---
export const ContactDivider = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const LoaderMapContent = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NavigationLink = styled.a`
font-size: ${SIZES.extraLarge};
text-decoration: none;
color: ${({theme}) => theme.black};
font-weight: 700;
transition: all 0.4s;
&:hover{ 
  transform: scale(1.05);
  text-decoration: underline;
}
`
