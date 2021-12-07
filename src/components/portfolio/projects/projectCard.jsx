import PropTypes from "prop-types";

import { Card } from './styles'

const ProjectCard = ({id, category, name, description, year, github_url, technologies}) => {
    return (
        <Card>
<p>{name}</p>            
        </Card>
    )
}

export default ProjectCard

ProjectCard.propTypes = {
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    github_url: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,

  };
