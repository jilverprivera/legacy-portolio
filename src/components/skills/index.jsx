import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Title } from "../../styles/typography";
import { SkillContainer, SkillGrid, Wrapper } from "./styles";
import NavButtons from "./navButton"
import Technologies from "./technologies"
import Location from "../location";

const Skills = () => {
  const [selected, setSelected] = useState(1);
  const [t] = useTranslation("about");
  return (
    <SkillContainer>
      <Wrapper>
        <Location location={t("skills.section-title")} />
        <Title>{t("skills.title")}</Title>
        <SkillGrid>
          <NavButtons selected={selected} setSelected={setSelected} />
          <Technologies selected={selected} />
        </SkillGrid>
      </Wrapper>
    </SkillContainer>
  );
};

export default Skills;
