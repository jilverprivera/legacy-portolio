import React, { useState } from "react";

import FeaturedCard from "./featuredCard";

import { useTranslation } from "react-i18next";
import { ContentFeatured } from "../../../styles/portfolio";

const Featured = () => {
    const [t] = useTranslation("portfolio");
    const [cardPosition, setCardPosition] = useState(null);
    return (
        <ContentFeatured width100>
            {t("featured.data", { returnObjects: true }).map((item, index) => (
                <FeaturedCard
                    key={item.id}
                    index={index}
                    cardPosition={cardPosition}
                    setCardPosition={setCardPosition}
                    {...item}
                />
            ))}
        </ContentFeatured>
    );
};

export default Featured;
