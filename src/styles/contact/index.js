import styled from "styled-components";
import { SIZES } from "../../constants";

export const InformationContent = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const FormContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const FormWrapper = styled.form`
position: relative;
    width: 80%;
    padding: 2rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.white_auxiliar}};
//     box-shadow: -0.3rem -0.3rem 1.2rem rgba(255, 255, 255, 1),
//         0.3rem 0.3rem 1.2rem rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    @media (max-width: 768px) {
        margin: 0rem auto;
        width: 100%;
    }
`;

export const Input = styled.input`
    width: 90%;
    height: 5rem;
    padding: 1rem;
    margin: 0.5rem 2rem;
    border: none;
    border-radius: 0.5rem;
    font-size: ${SIZES.small};
    background-color: ${(props) => props.theme.white};
    border: 0.2rem solid transparent;
    transition: 0.4s;

    &:focus {
        border: 0.2rem solid ${({ theme }) => theme.gray};
    }
    ::placeholder {
        color: ${(props) => props.theme.black};
        opacity: 0.75;
    }
    @media (max-width: 768px) {
        margin: 0.5rem auto;
        width: 95%;
    }
`;

export const TextArea = styled.textarea`
    width: 90%;
    height: 20rem;
    padding: 1rem;
    margin: 0.5rem 2rem 1rem;
    border: none;
    border-radius: 0.5rem;
    letter-spacing: 0.1rem;
    font-size: ${SIZES.small};
    border: 0.2rem solid transparent;
    background-color: ${(props) => props.theme.white};

    transition: border 0.4s;

    :focus {
        border: 0.2rem solid ${({ theme }) => theme.gray};
    }
    ::placeholder {
        color: ${(props) => props.theme.black};
        opacity: 0.75;
    }
    @media (max-width: 768px) {
        margin: 0.5rem auto;
        width: 95%;
    }
`;
