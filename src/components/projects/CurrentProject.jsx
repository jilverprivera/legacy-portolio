import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

import { AppContext } from "../../context/AppContext";

import {
  CurrentContainer,
  CurrentImageContainer,
  CurrentInformationContainer,
  ExternalLink,
  ExternalLinksContainer,
  TechnologiesWrapper,
  Technology,
} from "./styles";
import {
  CurrentCategory,
  CurrentName,
  Paragraph,
} from "../../styles/typography";

const CurrentProject = () => {
  const { project } = useContext(AppContext);
  const { currentProject } = project;
  const [t] = useTranslation("portfolio");
  const transition = { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.9] };
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {t("portfolio.data", { returnObjects: true })
          .filter((item) => item.id === currentProject)
          .map((item, index) => (
            <CurrentContainer
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ ...transition }}
            >
              <CurrentImageContainer>
                <Image
                  alt={item.slug}
                  layout="fill"
                  src={require(`../../../assets/portfolio/${item.slug}.webp`)}
                />
              </CurrentImageContainer>
              <CurrentInformationContainer>
                <CurrentCategory>{item.category}</CurrentCategory>
                <CurrentName>{item.name}</CurrentName>
                <Paragraph regular>{item.description}</Paragraph>
                <TechnologiesWrapper>
                  {item.technologies.map((technology) => (
                    <Technology key={technology.name}>
                      {technology.name}
                    </Technology>
                  ))}
                </TechnologiesWrapper>
                <ExternalLinksContainer>
                  {item.github_url && (
                    <ExternalLink
                      href={item.github_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineGithub />
                    </ExternalLink>
                  )}
                  {item.url && (
                    <ExternalLink
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineLink />
                    </ExternalLink>
                  )}
                </ExternalLinksContainer>
              </CurrentInformationContainer>
            </CurrentContainer>
          ))}
      </AnimatePresence>
    </>
  );
};

export default CurrentProject;
