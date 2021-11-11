import React from "react";
import { SIZES } from "../../../constants";
import { ExperienceData } from "../../../data";
import { ExperienceCard, ProfessionalWrapper } from "../../../styles/about.style";
import { Paragraph } from "../../../styles/typography";

export const Experience = () => {
    return (
        <ProfessionalWrapper
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 20 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
        >
            <ExperienceCard>
                {ExperienceData.map((data) => (
                    <div key={data.id}>
                        <Paragraph large fontWeight="600">
                            {data.position} - {data.company} ({data.start_date}-
                            {data.end_date})
                        </Paragraph>
                        <Paragraph large fontSize={SIZES.body5}></Paragraph>
                        {data.task.map((task, index) => (
                            <Paragraph large key={task.id}>
                                {index + 1}. {task.description}
                            </Paragraph>
                        ))}
                    </div>
                ))}
            </ExperienceCard>
        </ProfessionalWrapper>
    );
};
