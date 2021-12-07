import { useTranslation } from "react-i18next";

// <--- IMPORTANT --->

// <--- STYLES --->
import { Wrapper, SkillGrid } from "./styles";
import { Title } from "../../styles/typography";
import { useState } from "react";
import NavButtons from "./navButton";
import Technologies from "./technologies";

const Skills = () => {
  const [selected, setSelected] = useState(1);
  const [t] = useTranslation("about");

  return (
    <Wrapper>
      <Title>{t("skills.title")}</Title>
      <SkillGrid>
        <NavButtons selected={selected} setSelected={setSelected} />
        <Technologies selected={selected} />
      </SkillGrid>
    </Wrapper>
  );
};

export default Skills;
