import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

// <--- IMPORTANT --->
import { useAnimate } from "../../hooks/useAnimate";

// <--- COMPONENTS --->
import ExperienceCard from "./experienceCard";

// <--- STYLES --->
import { Title } from "../../styles/typography";
import { Content } from "./styles";

const Experience = () => {
  const [t] = useTranslation("about");

  const { ref, inView } = useInView();
  const { animation } = useAnimate(inView);

  return (
    <Content ref={ref} animate={animation}>
      <Title>{t("education-experience.experience.title")}</Title>
      {t("education-experience.experience.data", { returnObjects: true }).map(
        (item) => (
          <ExperienceCard key={item.id} {...item} />
        )
      )}
    </Content>
  );
};

export default Experience;