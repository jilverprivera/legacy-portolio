import { AnimatePresence } from "framer-motion";
import Image from "next/image";

import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import {
  BackgroundFeatured,
  Card,
  CardCategory,
  CardDescription,
  CardIndex,
  CardTitle,
  ExternalLink,
  ExternalLinksContainer,
  TechnologiesWrapper,
  Technology,
} from "./styles";

const FeaturedCard = ({
  index,
  name,
  slug,
  description,
  technologies,
  github_url,
  category,
  url,
  setPosition,
  position,
}) => {
  return (
    <Card
      onMouseEnter={() => setPosition(index)}
      onMouseLeave={() => setPosition(null)}
      whileHover={{ scale: 0.975 }}
      transition={{ duration: 0.25 }}
    >
      <Image
        alt={name}
        layout="responsive"
        src={require(`../../../assets/portfolio/${slug}.webp`)}
      />

      <AnimatePresence exitBeforeEnter>
        {position === index && (
          <BackgroundFeatured
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardIndex>0{index + 1}</CardIndex>
            <CardCategory>{category}</CardCategory>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <TechnologiesWrapper>
              {technologies.map((technology) => (
                <Technology key={technology.name}>{technology.name}</Technology>
              ))}
            </TechnologiesWrapper>
            <ExternalLinksContainer>
              {github_url && (
                <ExternalLink
                  href={github_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub />
                </ExternalLink>
              )}
              {url && (
                <ExternalLink href={url} target="_blank" rel="noreferrer">
                  <AiOutlineLink />
                </ExternalLink>
              )}
            </ExternalLinksContainer>
          </BackgroundFeatured>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default FeaturedCard;
