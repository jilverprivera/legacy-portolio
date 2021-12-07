import { useTranslation } from "react-i18next";
import { LoaderMapContent } from "./styles";

const LoaderMap = () => {
  const [t] = useTranslation("contact");
  return (
    <LoaderMapContent>
      <p>{t("map.loading")}</p>
    </LoaderMapContent>
  );
};

export default LoaderMap;
