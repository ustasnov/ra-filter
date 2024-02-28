import PropTypes from 'prop-types';
import "./ProjectList.css";

function ProjectList({ projects }) {

  return (
    <div className="projectlist">
      {projects.map((project, i) =>
        <img key={i} className="project" src={project.img} alt="project"></img>
      )}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      category: PropTypes.string,
    })
  )
}

export default ProjectList
