import { useTranslation } from "react-i18next";

// <--- COMPONENTS --->
import Featured from "./featured";

// <--- STYLES --->
import { Container, ContentFlex } from "../../styles/global.style";
import { LinearText, Title } from "../../styles/typography";


const Portfolio = () => {
    const [t] = useTranslation("portfolio");
    return (
        <Container id="portfolio" paddingtop>
            <ContentFlex width100 alignCenter justifycenter column>
            <Title left content={t("featured.before-title")}>{t("featured.title")}</Title>
            <LinearText>Portfolio</LinearText>
                <Featured />
            </ContentFlex>
        </Container>
    );
};

export default Portfolio;
