import styled from "styled-components";
import { SIZES } from "../../constants";

// --- INFORMATION ---
export const Title = styled.h3`
  font-size: ${SIZES.regular};
  font-weight: 500;
  letter-spacing: 0.25rem;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.gray};
  // margin-bottom: 3rem;
`;
export const PersonalDescription = styled.p`
  width: 100rem;
  text-align: center;
  font-weight: 400;
  line-height: 4rem;
  font-size: ${SIZES.large};
  color: ${({ theme }) => theme.black};
  margin: 3rem 0rem;
`;

// --- GLOBAL ---

export const GridWrapper = styled.section`
  width: 90%;
  max-width: 120rem;
  padding: 10rem 0rem;
  margin: 0rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  border-bottom: 0.1rem solid ${({ theme }) => theme.gray};
  &:last-child {
    border-bottom: none;
  }
`;

export const InformationWrapper = styled.div`
  grid-column: span 2;
  // border: 1px solid ${({ theme }) => theme.black};
`;

export const Card = styled.div`
  margin: 2rem 0rem;
  padding-bottom: 2rem;
  position: relative;
  &:first-child {
    margin-top: 0rem;
  }
  &:last-child {
    margin-bottom: 0rem;
  }
`;
export const ExperienceRole = styled.p`
  font-size: ${SIZES.medium};
  color: ${({ theme }) => theme.black};
  margin-bottom: 0.5rem;
`;
export const CompanyLink = styled.a`
  text-decoration: none;
  margin-left: 0.75rem;
  color: ${({ theme }) => theme.primary};
  position: relative;
  padding-bottom: 0.3rem;
  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 0.2rem;
    background-color: transparent;
    transition: 0.5s;
  }
  &:hover {
    ::before {
      content: "";
      width: 100%;
      background-color: ${({ theme }) => theme.primary};
    }
  }
`;

export const ExperienceDate = styled.p`
  font-size: ${SIZES.small};
  color: ${({ theme }) => theme.black};
  margin-bottom: 1rem;
`;

export const ExperienceActivities = styled.p`
  font-size: ${SIZES.regular};
  color: ${({ theme }) => theme.black};
  line-height: 2.5rem;
  padding-left: 1rem;
  position: relative;
  ::before {
    content: "›";
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
  }
`;

export const EducationTitle = styled.p`
  font-size: ${SIZES.medium};
  color: ${({ theme }) => theme.black};
  margin-bottom: 0.5rem;
`;

export const EducationAcademy = styled.p`
  font-size: ${SIZES.regular};
  color: ${({ theme }) => theme.black};
`;

export const EducationDate = styled.p`
  font-size: ${SIZES.small};
  color: ${({ theme }) => theme.black};
  margin: 0.5rem 0rem;
`;

export const Location = styled.p`
  font-size: ${SIZES.small};
  color: ${({ theme }) => theme.black};
  // margin-bottom: 0.5rem;
`;

export const EducationCard = styled.div`
  margin: 2rem 0rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &:first-child {
    margin-top: 0rem;
  }
  &:last-child {
    margin-bottom: 0rem;
    border-bottom: none;
  }
`;

export const CertificateBtn = styled.button`
  padding: 1.5rem 2rem;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  outline: none;
  color: ${({ theme }) => theme.white};
  margin-right: 7.5rem;
`;
