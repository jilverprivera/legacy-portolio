import React, { useContext } from "react";

import { AppContext } from "../../../context/AppContext";
import { EducationData } from "../../../data";

import { Paragraph } from "../../../styles/typography";
import "react-vertical-timeline-component/style.min.css";
import {
    EducationCard,
    EducationHeader,
    EducationIcon,
    ProfessionalWrapper,
} from "./about.style";

export const Education = () => {
    const {
        dark: { darkMode },
    } = useContext(AppContext);
    return (
        <ProfessionalWrapper
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 20 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
        >
            {EducationData.map((data) => (
                <EducationCard key={data.id}>
                    <EducationHeader>
                        <EducationIcon bgColor={data.bgColor}>
                            {data.icon}
                        </EducationIcon>
                        <Paragraph large>{data.title}</Paragraph>
                    </EducationHeader>
                    <Paragraph medium>{data.academy}</Paragraph>
                    <Paragraph medium>{data.location}</Paragraph>
                    <span
                        style={{
                            position: "absolute",
                            top: "2rem",
                            right: "2rem",
                        }}
                    >
                        {data.date}
                    </span>
                </EducationCard>
            ))}
        </ProfessionalWrapper>
    );
};

{
    /* <VerticalTimeline
                    key={data.id}
                    layout="1-column-left"
                    lineColor={darkMode ? "#fff" : "#ddd"}
                >
                    <VerticalTimelineElement
                        contentStyle={{
                            background: darkMode ? "#444" : "#ddd",
                            color: darkMode ? "#fff" : "#000",
                        }}
                        contentArrowStyle={{
                            borderRight: darkMode
                                ? "7px solid #444"
                                : "7px solid #ddd",
                        }}
                        date={data.date}
                        iconStyle={{
                            background: data.bgColor,
                            color: data.color,
                        }}
                        icon={data.icon}
                    >
                        <Paragraph large>{data.title}</Paragraph>
                        <Paragraph small>{data.academy}</Paragraph>
                        <Paragraph medium>{data.location}</Paragraph>
                    </VerticalTimelineElement>
                </VerticalTimeline> */
}
