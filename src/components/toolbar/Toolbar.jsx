import PropTypes from 'prop-types';
import "./Toolbar.css";

function Toolbar({filters, selected, onSelectFilter}) {

  return (
    <div className="toolbar">
      {filters.map((filter) => 
        <button 
          key={filter.img} 
          className={"toolbar-item " + filter + ({selected} == filter ? " active" : "")} 
          onClick={() => {
            onSelectFilter(filter);
          }}>{filter}
        </button>  
      )}
    </div>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func}

export default Toolbar