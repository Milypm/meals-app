import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { passDetails } from '../actions/index';

const Meal = (props) => {
  const {
    key, name, img, passDetails,
  } = props;
  return (
    <Link to="/recipe-details" className="mealObj" onClick={passDetails(key)}>
      <h3 className="meal-title">{name}</h3>
      <img src={img} alt={name} />
    </Link>
  );
};
Meal.propTypes = {
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  passDetails: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  passDetails: (key) => {
    dispatch(passDetails(key));
  },
});
export default connect(null, mapDispatchToProps)(Meal);
