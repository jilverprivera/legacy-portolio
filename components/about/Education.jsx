import React from "react";
import { ComponentTitle } from "../global/ComponentTitle";
import { educationData } from "./data/education";
import {
  CertificateBtn,
  EducationAcademy,
  EducationCard,
  EducationDate,
  EducationTitle,
  GridWrapper,
  InformationWrapper,
  Location,
} from "./styles";

const Education = () => {
  return (
    <GridWrapper id="education">
      <ComponentTitle title="Education" />
      <InformationWrapper>
        {educationData.map((education) => (
          <EducationCard key={education.id}>
            <div>
              <EducationTitle>{education.title}</EducationTitle>
              <EducationAcademy>{education.academy}</EducationAcademy>
              <EducationDate>{education.date}</EducationDate>
              <Location>{education.location}</Location>
            </div>
            {/* <CertificateBtn>View certificate</CertificateBtn> */}
          </EducationCard>
        ))}
      </InformationWrapper>
    </GridWrapper>
  );
};

export default Education;
