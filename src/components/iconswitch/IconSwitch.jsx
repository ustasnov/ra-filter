import PropTypes from 'prop-types';
import "./IconSwitch.css";

function IconSwitch({ icon, onSwitch }) {
  
  return (
    <span className="material-icons" onClick={onSwitch}>{icon}</span>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func
}

export default IconSwitch