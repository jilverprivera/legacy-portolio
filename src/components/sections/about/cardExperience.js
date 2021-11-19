import React from "react";
import { SIZES } from "../../../constants";
import {
    ExperienceCard,
    ExperienceDate,
    ExperienceIcon,
    ExperienceInformation,
} from "./about.style";
import { Paragraph } from "../../../styles/typography";

export const CardExperience = ({ data }) => {
    return (
        <ExperienceCard key={data.id}>
            <Paragraph large fontWeight="600">
                {data.position}, ({data.company})
            </Paragraph>
            <Paragraph large fontSize={SIZES.body5}></Paragraph>
            {data.task.map((task, index) => (
                <Paragraph large key={task.id}>
                    {index + 1}. {task.description}
                </Paragraph>
            ))}
            <ExperienceDate>
                {data.start_date}&nbsp;-&nbsp;{data.end_date}
            </ExperienceDate>
        </ExperienceCard>
    );
};
