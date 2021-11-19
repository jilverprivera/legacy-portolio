import React from "react";
import {
    ProfessionalWrapper,
    TimeLineCard,
    TimeLineContent,
    TimeLineDate,
    TimeLineIcon,
    TimeLineTitle,
} from "./about.style";
import { EducationData } from "../../../data";
import { Paragraph} from "../../../styles/typography"

export const TimeLine = () => {
    return (
        <ProfessionalWrapper
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 20 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
        >
            {EducationData.map((data, index) => (
                <TimeLineContent
                    key={data.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 1, x: index % 2 === 0 ? -20 : 20 }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                >
                    <TimeLineCard
                        alignItems={index % 2 === 0 ? "flex-start" : "flex-end"}
                    >
                        <TimeLineTitle>{data.title}</TimeLineTitle>
                        <Paragraph small margin="0.5rem 0rem 0rem">{data.academy}</Paragraph>
                        <Paragraph small margin="0.5rem 0rem 0rem">{data.location}</Paragraph>
                        <Paragraph small margin="0.5rem 0rem 0rem">{data.date}</Paragraph>
                    </TimeLineCard>
                    <TimeLineIcon
                        leftChild={index % 2 === 0 ? "-4.5rem" : "4.5rem"}
                        background={data.bgColor}
                    >
                        {data.icon}
                    </TimeLineIcon>
                </TimeLineContent>
            ))}
        </ProfessionalWrapper>
    );
};
