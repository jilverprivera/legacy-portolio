import React from "react";
import {
    RiCompasses2Line,
    RiPencilRuler2Line,
    RiComputerLine,
} from "react-icons/ri";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Paragraph } from "../../../styles/typography";
import {
    StageIcon,
    StageNumber,
    StagesCard,
    StagesContent,
} from "../../../styles/portfolio.style";

const developmentData = [
    {
        id: 1,
        icon: <RiCompasses2Line />,
        title: "Planning",
        desc: "Every project need a planning, no one wants unexpected changes during development.",
    },
    {
        id: 2,
        icon: <RiPencilRuler2Line />,
        title: "Design",
        desc: "A good design generates interest from users, let's make the most of it.",
    },
    {
        id: 3,
        icon: <RiComputerLine />,
        title: "Development",
        desc: "An unrealized idea and design stays there, let's throw a few lines of code at it. ",
    },
    {
        id: 4,
        icon: <IoCloudUploadOutline />,
        title: "Deployment",
        desc: "Every project need a planning, no body wants unexpected changes during development",
    },
];

export const DevelopmentStages = () => {
    return (
        <StagesContent>
            {developmentData.map((data, index) => (
                <StagesCard key={data.id}>
                    <div className="header">
                        <StageNumber>0{index + 1}</StageNumber>
                        <Paragraph large upperCase>
                            {data.title}
                        </Paragraph>
                    </div>
                    <div className="description_wrapper">
                        <StageIcon>{data.icon}</StageIcon>
                        <Paragraph medium textAlign="center" lineHeight="2.5rem">
                            {data.desc}
                        </Paragraph>
                    </div>
                </StagesCard>
            ))}
        </StagesContent>
    );
};
