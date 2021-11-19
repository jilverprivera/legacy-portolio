import React from "react";
import { GoDeviceMobile } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineEngineering } from "react-icons/md";
import {
    Card,
    CardDescription,
    CardIcon,
    CardTitle,
    IndexProject,
    ProjectSkill,
    ProjectSkillsContent,
} from "../../../styles/portfolio.style";

export const CardProject = ({ data, index }) => {
    const { id, title, description, category, technologies } = data;
    return (
        <Card whileHover={{ y: -5, transform: { scale: 1.2 } }}>
            <IndexProject>0{index + 1}</IndexProject>

            <CardIcon>
                {category === "Web" && <RiComputerLine />}
                {category === "Mobile" && <GoDeviceMobile />}
                {category === "Engineering" && <MdOutlineEngineering />}
            </CardIcon>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <ProjectSkillsContent margin="1rem 0rem">
                {technologies.map((tech) => (
                    <ProjectSkill key={tech.name}>{tech.name}</ProjectSkill>
                ))}
            </ProjectSkillsContent>
            {/* <Paragraph large>{description}</Paragraph>
             */}
        </Card>
    );
};
