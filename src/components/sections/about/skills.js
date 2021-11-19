import React from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { SkillData } from "../../../data";
import {
    SkillCard,
    SkillIcon,
    ProfessionalWrapper,
    SkillWrapper,
    SkillTitleWrapper,
    SkillTitle,
    TitleIcon,
    SkillContent,
    SkillText,
} from "./about.style";

export const Skills = () => {
    return (
        <ProfessionalWrapper
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 20 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
        >
            <SkillWrapper>
                {SkillData.map((data, index) => (
                    <SkillCard
                        key={data.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                    >
                        <SkillTitleWrapper background={data.background}>
                            <SkillIcon>{data.icon}</SkillIcon>
                            <SkillTitle>{data.title}</SkillTitle>
                            <TitleIcon background={data.background}>
                                <RiArrowDropDownFill />
                            </TitleIcon>
                        </SkillTitleWrapper>
                        <SkillContent>
                            {data.skills.map((skill) => (
                                <SkillText key={skill.id}>
                                    {skill.name}
                                </SkillText>
                            ))}
                        </SkillContent>
                    </SkillCard>
                ))}
            </SkillWrapper>
        </ProfessionalWrapper>
    );
};
