import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

// <--- IMPORTANT --->
import { useAnimate } from "../../../hooks/useAnimate";

// <--- STYLES --->
import { IntroductionContent } from "../../../styles/about";
import { Paragraph } from "../../../styles/typography";
import { Button } from "../../../styles/button.style";

const Introduction = () => {
    const [t] = useTranslation("about");
    const { ref, inView } = useInView();
    const { animation } = useAnimate(inView);
    return (
        <IntroductionContent ref={ref} animate={animation}>
            <Paragraph regular center>
                {t("introduction.description")}
            </Paragraph>
            <Button smallPadding animated buttonMargin="3rem 0rem 0rem">
                {t("introduction.resume-button")}
            </Button>
        </IntroductionContent>
    );
};

export default Introduction;
