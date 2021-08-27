import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { passDetails, updateDetailsStatus } from '../actions/index';

const Meal = (props) => {
  const dispatch = useDispatch();
  const { name, img, id } = props;
  const dispatches = () => {
    dispatch(passDetails(id));
    dispatch(updateDetailsStatus(true));
  };
  return (
    <Link to="/recipe-details" className="mealObj" onClick={() => dispatches()}>
      <h3 className="meal-title">{name}</h3>
      <img src={img} alt={name} />
    </Link>
  );
};
Meal.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Meal;
