import React from "react";
import { SIZES } from "../../../constants";
import { ExperienceData } from "../../../data";
import {
    ExperienceCard,
    ProfessionalWrapper,
} from "./about.style";
import { Paragraph } from "../../../styles/typography";
import { CardExperience } from "./cardExperience";

export const Experience = () => {
    return (
        <ProfessionalWrapper
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 20 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
        >
            {ExperienceData.map((data) => (
                <CardExperience key={data.id} data={data}/>
            ))}
        </ProfessionalWrapper>
    );
};
