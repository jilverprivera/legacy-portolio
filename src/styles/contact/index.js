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
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    margin: 0rem auto;
  }
`;

export const FormWrapper = styled.form`
  position: relative;
  width: 100%;
  padding: 2rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 1rem;
  @media (max-width: 768px) {
    margin: 0rem auto;
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 5rem;
  padding: 1rem;
  margin: 0.5rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: ${SIZES.small};
  background-color: ${({ theme }) => theme.white};
  border: 0.2rem solid transparent;
  transition: 0.4s;

  &:focus {
    border: 0.2rem solid ${({ theme }) => theme.gray};
  }
  ::placeholder {
    color: ${({ theme }) => theme.black};
    opacity: 0.75;
  }
  @media (max-width: 768px) {
    margin: 0.5rem auto;
    width: 95%;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 20rem;
  padding: 1rem;
  margin: 0.5rem 2rem 1rem;
  border: none;
  border-radius: 0.5rem;
  letter-spacing: 0.1rem;
  font-size: ${SIZES.small};
  border: 0.2rem solid transparent;
  background-color: ${({ theme }) => theme.white};

  transition: border 0.4s;

  :focus {
    border: 0.2rem solid ${({ theme }) => theme.gray};
  }
  ::placeholder {
    color: ${({ theme }) => theme.black};
    opacity: 0.75;
  }
  @media (max-width: 768px) {
    margin: 0.5rem auto;
    width: 95%;
  }
`;
