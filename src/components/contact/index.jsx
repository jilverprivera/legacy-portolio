import { Container } from "../../styles/global.style";
import { Paragraph, Title } from "../../styles/typography";
import { FormContent, InformationContent } from "../../styles/contact";
import { Form } from "./form";
import { useTranslation } from "react-i18next";
import { GridContainer } from "./styles";
import dynamic from "next/dynamic";
import LoaderMap from "./loaderMap";

const Contact = () => {
  const Map = dynamic(() => import("./map"), {
    loading: () => <LoaderMap />,
    ssr: false,
  });
  const [t] = useTranslation("contact");
  return (
    <Container id="contact">
      <Title>{t("contact.title")}</Title>
      <InformationContent>
        {/* <Paragraph regular>{t("contact.message")}</Paragraph> */}
      </InformationContent>
      <GridContainer width100>
        <FormContent>
          <Form />
        </FormContent>
        <Map />
      </GridContainer>

      {/* <Map /> */}
    </Container>
  );
};

export default Contact;
