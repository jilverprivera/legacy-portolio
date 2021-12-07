import { useTranslation } from "react-i18next";
import { LittleTitle } from "../../styles/typography";

import ServicesCard from "./ServicesCard";

import {
  Message,
  MessageContainer,
  ServicesContainer,
  ServicesCardContainer,
} from "./styles";

const Services = () => {
  const [t] = useTranslation("home");
  return (
    <ServicesContainer>
      <LittleTitle>{t("services.title")}</LittleTitle>

      <MessageContainer>
        <Message>{t("services.message")}</Message>
      </MessageContainer>

      <ServicesCardContainer>
        {t("services.data", { returnObjects: true }).map((item) => (
          <ServicesCard key={item.id} {...item} />
        ))}
      </ServicesCardContainer>
    </ServicesContainer>
  );
};

export default Services;
