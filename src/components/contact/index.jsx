import { Container, ContentGrid } from "../../styles/global.style";
import { Paragraph, Title } from "../../styles/typography";
import { InformationContent } from "../../styles/contact";
import { Form } from "./form";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const [t] = useTranslation("contact");
    return (
        <Container id="contact">
            <ContentGrid width100>
                <InformationContent>
                    <Title>{t("contact.title")}</Title>
                    <Paragraph regular>
                        {t("contact.message")}
                    </Paragraph>
                </InformationContent>
                <Form/>
            </ContentGrid>
        </Container>
    );
};

export default Contact;
