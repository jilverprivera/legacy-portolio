import { useInView } from "react-intersection-observer";

// <--- IMPORTANT --->
import { useAnimate } from "../../../hooks/useAnimate";
import { SkillData } from "../../../data";

// <--- COMPONENTS --->
import CardSkill from "./skillCard";

// <--- STYLES --->
import { SkillGrid, BgSkill, SkillContent } from "../../../styles/about";
import { LinearText, Title } from "../../../styles/typography";

const Skills = () => {
    const { ref, inView } = useInView();
    const { animation } = useAnimate(inView, 0, 20);

    return (
        <BgSkill ref={ref} animate={animation}>
            <SkillContent>
                <Title>SKILLS</Title>
                <LinearText>Technologies</LinearText>
                <SkillGrid>
                    {SkillData.map((data, index) => (
                        <CardSkill key={data.id} index={index} {...data} />
                    ))}
                </SkillGrid>
            </SkillContent>
        </BgSkill>
    );
};

export default Skills;
