import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { AppContext } from "../../context/AppContext";
import Image from "next/image";

import { ProjectImageContainer, ProjectsContainer } from "./styles";

const Projects = () => {
  const { project } = useContext(AppContext);
  const { currentProject, setCurrentProject } = project;

  const [t] = useTranslation("portfolio");

  return (
    <ProjectsContainer>
      {t("portfolio.data", { returnObjects: true })
        .filter((item) => item.id !== currentProject)
        .map((item) => (
          <ProjectImageContainer
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={item.id}
            onClick={() => setCurrentProject(item.id)}
          >
            <Image
              alt={item.slug}
              layout="fill"
              src={require(`../../../assets/portfolio/${item.slug}.webp`)}
            />
          </ProjectImageContainer>
        ))}
    </ProjectsContainer>
  );
};

export default Projects;
