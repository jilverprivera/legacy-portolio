import { useTranslation } from "react-i18next";
import ProjectCard from "./projectCard";
import { ProjectContainer, ProjectContent } from "./styles";

const Projects = () => {
  const [t] = useTranslation("portfolio");
  return (
    <ProjectContainer>
      <ProjectContent>
        {t("portfolio.data", { returnObjects: true }).map((item, index) => (
          <ProjectCard key={item.id} index={index} {...item} />
        ))}
      </ProjectContent>
    </ProjectContainer>
  );
};

export default Projects;
