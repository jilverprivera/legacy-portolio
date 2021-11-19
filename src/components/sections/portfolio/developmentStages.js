import React, { useState } from "react";
import {
    RiCompasses2Line,
    RiPencilRuler2Line,
    RiComputerLine,
} from "react-icons/ri";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Paragraph } from "../../../styles/typography";
import {
    StageCardContent,
    StageCardTitle,
    StageIcon,
    StageIndex,
    StagesCard,
    StagesContent,
} from "../../../styles/portfolio.style";

import { useAnimation } from "framer-motion";

const developmentData = [
    {
        id: 1,
        icon: <RiCompasses2Line />,
        title: "Analysis",
        desc: "Every project need a planning, no one wants unexpected changes during development.",
    },
    {
        id: 2,
        icon: <RiPencilRuler2Line />,
        title: "Prototyping & Design",
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
        desc: "I make sure to offer you reliability and security to the end.",
    },
];

export const DevelopmentStages = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleChangeCard = (i) => {
        i === selectedCard ? setSelectedCard(null) : setSelectedCard(i);
    };
    return (
        <StagesContent>
            {developmentData.map((data, index) => (
                <StagesCard
                    key={data.id}
                    cardAlign={index}
                    onClick={() => handleChangeCard(index)}
                >
                    <StageCardTitle>
                        <StageIndex>0{index + 1}</StageIndex>
                        <Paragraph large>{data.title}</Paragraph>
                    </StageCardTitle>
                    <StageCardContent
                        contentHeight={index === selectedCard ? "100%" : "0rem"}
                    >
                        {selectedCard === index && (
                            <>
                                <StageIcon>{data.icon}</StageIcon>
                                <Paragraph
                                    medium
                                    textAlign="center"
                                    lineHeight="2.5rem"
                                >
                                    {data.desc}
                                </Paragraph>
                            </>
                        )}
                    </StageCardContent>
                </StagesCard>
            ))}
        </StagesContent>
    );
};
