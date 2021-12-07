import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Title } from "../../styles/typography";
import FeaturedCard from "./FeaturedCard";

import { FeaturedContainer, FeaturedContent } from "./styles";

const Featured = () => {
  const [position, setPosition] = useState(null);

  const [t] = useTranslation("portfolio");
  return (
    <FeaturedContainer>
      <Title left content={t("featured.before-title")}>
        {t("featured.title")}
      </Title>
      <FeaturedContent>
        {t("featured.data", { returnObjects: true }).map((item, index) => (
          <FeaturedCard
            key={item.id}
            index={index}
            position={position}
            setPosition={setPosition}
            {...item}
          />
        ))}
      </FeaturedContent>
    </FeaturedContainer>
  );
};

export default Featured;
