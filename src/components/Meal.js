import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Meal = (props) => {
  const {
    name, img, id, onClickHandler,
  } = props;
  return (
    <Link to={`/recipe-details/${id}`} className="mealObj" onClick={() => onClickHandler(id)}>
      <h3 className="meal-title">{name}</h3>
      <img src={img} alt={name} />
    </Link>
  );
};
Meal.defaultProps = {
  name: '',
  img: '',
  id: '',
  onClickHandler: () => {},
};
Meal.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.string,
  onClickHandler: PropTypes.func,
};
export default Meal;
