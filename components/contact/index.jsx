import { Container } from "../../styles";
import { Paragraph, Title } from "../../styles/typography";
import { FormContent } from "../../styles/contact";
import { Form } from "./form";
import { useTranslation } from "react-i18next";
import { GridContainer } from "./styles";
import dynamic from "next/dynamic";
import LoaderMap from "./loaderMap";
import Location from "../location";

const Contact = () => {
  const Map = dynamic(() => import("./map"), {
    loading: () => <LoaderMap />,
    ssr: false,
  });
  const [t] = useTranslation("contact");
  return (
    <Container id="contact">
      <FormContent>
        <Location location={t("title")} />
        <Paragraph regular>{t("message")}</Paragraph>
        <Form />
      </FormContent>
      <GridContainer>
        <Map />
      </GridContainer>

      {/* <Map /> */}
    </Container>
  );
};

export default Contact;
