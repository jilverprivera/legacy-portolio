import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-scroll";

import { SIZES } from "../../constants";

export const DrawerContent = styled(motion.div)`
    position: absolute;
    background-color: ${({ theme }) => theme.white}};
    top: 6rem;
    left: 0rem;
    width: 100%;
    height: calc(100vh - 6.5rem);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const LinkDrawer = styled(Link)`
    text-decoration: none;
    margin: 1rem 0rem;
    font-size: ${SIZES.semiRegular};
    color: ${({ theme }) => theme.black};
    &:hover {
        cursor: pointer;
    }
`;
