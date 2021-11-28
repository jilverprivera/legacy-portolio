import { useTranslation } from "react-i18next";

// <--- COMPONENTS --->
import Introduction from "./introduction";
import Skills from "./skills";
import Education from "./education";
import Experience from "./experience";

// <--- STYLES --->
import { Container, ContentGrid } from "../../styles/global.style";
import { Title } from "../../styles/typography";

const About = () => {
    const [t] = useTranslation("about");
    return (
        <Container id="about" paddingtop>
            <Title center content={t("introduction.before-title")}>
                {t("introduction.title")}
            </Title>
            <Introduction />
            <Skills />
            
            <ContentGrid width100>
                <Education />
                <Experience />
            </ContentGrid>
        </Container>
    );
};

export default About;
