import React from "react";
import { ComponentTitle } from "../global/ComponentTitle";
import { experienceData } from "./data/experience";
import {
  CompanyLink,
  ExperienceActivities,
  Card,
  ExperienceDate,
  ExperienceRole,
  GridWrapper,
  InformationWrapper,
} from "./styles";

const Experience = () => {
  return (
    <GridWrapper id="work-experience">
      <ComponentTitle title="Work Experience" />
      <InformationWrapper>
        {experienceData.map((experience) => (
          <Card key={experience.id}>
            <ExperienceRole>
              {experience.role} |
              <CompanyLink href={experience.url}>
                @{experience.company}
              </CompanyLink>
            </ExperienceRole>
            <ExperienceDate>{experience.date}</ExperienceDate>
            {experience.activities.map((activity, index) => (
              <ExperienceActivities key={index}>
                {activity}
              </ExperienceActivities>
            ))}
          </Card>
        ))}
      </InformationWrapper>
    </GridWrapper>
  );
};

export default Experience;
