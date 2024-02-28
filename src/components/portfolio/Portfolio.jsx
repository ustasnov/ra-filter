import PropTypes from 'prop-types';
import { useState } from 'react';
import './Portfolio.css';
import Toolbar from "../toolbar/Toolbar";
import ProjectList from "../projectlist/ProjectList";

function Portfolio({ projects }) {
  const [state, setDataView] = useState(["All", projects]);
  let filteredList = null;

  const onSelectFilter = (filter) => {
    if (state[0] != filter) {
      if (filter == "All") {
        filteredList = projects;
      } else {
        filteredList = projects.filter((el) => {
          return el.category == filter;
        });
      }
      
      setDataView([filter, filteredList]);
    }
  }

  return (
    <div className='portfolio'>
        <Toolbar 
          filters={["All", "Websites", "Flayers", "Business Cards"]} 
          selected={state[0]}
          onSelectFilter={onSelectFilter}>
        </Toolbar>
        <ProjectList projects={state[1]}></ProjectList>
    </div>
  );
}

Portfolio.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      category: PropTypes.string,
    })
  )
}

export default Portfolio