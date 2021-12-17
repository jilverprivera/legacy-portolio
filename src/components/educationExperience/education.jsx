import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

// <--- IMPORTANT --->
import { useAnimate } from "../../hooks/useAnimate";

// <--- COMPONENTS --->
import { TimeLine } from "./timeline";

// <--- STYLES --->
import { Title } from "../../styles/typography";
import { Content } from "./styles";

const Education = () => {
  const { ref, inView } = useInView();
  const { animation } = useAnimate(inView, 20);
  const [t] = useTranslation("about");
  return (
    <Content >
      <Title>{t("education.title")}</Title>
      <TimeLine />
    </Content>
  );
};

export default Education;
