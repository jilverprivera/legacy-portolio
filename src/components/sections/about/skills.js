import React from "react";
import { Paragraph } from "../../../styles/typography";
import { SkillData } from "../../../data";
import { SIZES } from "../../../constants";
import {
    SkillCard,
    SkillIcon,
    SkillsIconWrapper,
    ProfessionalWrapper,
} from "../../../styles/about.style";

export const Skills = () => {
    return (
        <ProfessionalWrapper
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 20 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
        >
            {SkillData.map((data) => (
                <SkillCard key={data.id}>
                    <Paragraph fontSize={SIZES.body3} textAlign="left" large>
                        <span>{data.icon}</span>
                        {data.name}
                    </Paragraph>
                    <SkillsIconWrapper>
                        {data.skills.map((skill) => (
                            <SkillIcon key={skill.id}>
                                <span>{skill.icon}</span>
                                <span className="skill__tag">{skill.tag}</span>
                            </SkillIcon>
                        ))}
                    </SkillsIconWrapper>
                </SkillCard>
            ))}
        </ProfessionalWrapper>
    );
};
