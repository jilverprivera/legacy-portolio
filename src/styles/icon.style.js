import styled, { css } from "styled-components";
import { SIZES } from "../constants";

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media (max-width: 768px) {
        width: ${(props) => props.responsiveSize};
    }
`;
export const Icon = styled.span`
    color: ${(props) => props.theme.text};
    margin: 1rem;
    &:hover {
        cursor: ${(props) => props.cursor};
    }
    ${({ small }) =>
        small &&
        css`
            font-size: ${SIZES.body4};
        `}
    ${({ medium }) =>
        medium &&
        css`
            font-size: ${SIZES.body3};
        `}
     ${({ large }) =>
        large &&
        css`
            font-size: ${SIZES.body2};
        `}
`;

// IconWrapper.defaultProps = {
//     theme: {
//         main: "palevioletred",
//     },
// };
// Icon.defaultProps = {
//     theme: {
//         main: "palevioletred",
//     },
// };
