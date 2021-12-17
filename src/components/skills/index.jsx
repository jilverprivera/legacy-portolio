import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";

import { SkillData } from "../../data";

import Location from "../location";

import { Container } from "../../styles";
import {
  Icon,
  SkillGrid,
  TechnologiesContent,
  TechnologiesGroup,
  TechnologiesWrapper,
  TechnologyBtn,
  Wrapper,
} from "./styles";

const Skills = () => {
  const [t] = useTranslation("about");
  const [selected, setSelected] = useState(1);

  return (
    <Container id="skills">
      <Wrapper>
        <Location location={t("skills.section-title")} />
        <SkillGrid>
          <TechnologiesGroup>
            {SkillData.map((data) => (
              <TechnologyBtn
                key={data.id}
                onClick={() => setSelected(data.id)}
                selected={selected === data.id}
              >
                {data.title}
              </TechnologyBtn>
            ))}
          </TechnologiesGroup>
          <TechnologiesWrapper>
            <AnimatePresence exitBeforeEnter>
              {SkillData.filter((el) => el.id === selected).map((data) => (
                <TechnologiesContent
                  key={data.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {data.skills.map((skill, index) => (
                    <Icon
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      {skill.icon}
                    </Icon>
                  ))}
                </TechnologiesContent>
              ))}
            </AnimatePresence>
          </TechnologiesWrapper>{" "}
        </SkillGrid>
      </Wrapper>
    </Container>
  );
};

export default Skills;
