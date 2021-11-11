import styled from "styled-components";
import { SIZES } from "../constants";

export const MessageContent = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
//     border: 1px solid #000;
    @media (max-width: 76.8rem) {
        width: 80%;
        margin: 0rem auto 2rem;
     //    margin-bottom: 2rem;
    }
`;

export const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const FormContent = styled.form`
    position: relative;
    width: 80%;
    padding: 2rem 0rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.background_auxiliar};
    box-shadow: -0.3rem -0.3rem 1.2rem rgba(255, 255, 255, 1),
        0.3rem 0.3rem 1.2rem rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    @media (max-width: 76.8rem) {
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
    letter-spacing: 0.1rem;
    font-size: ${SIZES.body4};
    text-transform: uppercase;
    background-color: ${(props) => props.theme.background};

    :focus {
        border: 0.2rem solid #353535;
    }
    ::placeholder {
        color: ${(props) => props.theme.text};
        opacity: 1;
    }
    @media (max-width: 76.8rem) {
        margin: 0.5rem auto;
        width: 95%;
    }
`;

export const TextArea = styled.textarea`
    width: 90%;
    height: 20rem;
    padding: 1rem;
    margin: 0.5rem 2rem;
    border: none;
    border-radius: 0.5rem;
    letter-spacing: 0.1rem;
    font-size: ${SIZES.body4};
    text-transform: uppercase;
    background-color: ${(props) => props.theme.background};

    :focus {
        border: 0.2rem solid #353535;
    }
    ::placeholder {
        color: ${(props) => props.theme.text};
        opacity: 1;
    }
    @media (max-width: 76.8rem) {
        margin: 0.5rem auto;
        width: 95%;
    }
`;

export const ButtonForm = styled.button`
    //   font-weight: bold;
    font-size: ${SIZES.body3};
    width: 50%;
    padding: 1.5rem 3rem;
    margin: 2rem auto 0rem;
    background-color: ${(props) => props.theme.secondary};
    border: none;
    outline: none;
    transition: 0.4s;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    border-radius: 1rem;

    &:hover {
        background-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.text};
        cursor: pointer;
    }
`;

export const LocationContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 4rem;
`;

export const LocationIcon = styled.span`
    font-size: ${SIZES.body1};
`;
