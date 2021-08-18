import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Meal = ({
  name, img, country, type, recipe, youtube, openMealDetails,
}) => {
  const detailsObj = {
    name,
    img,
    country,
    type,
    recipe,
    youtube,
  };
  return (
    <Link to="/recipe-details" className="mealObj" onClick={() => openMealDetails(detailsObj)}>
      <h3 className="meal-title">{name}</h3>
      <img src={img} alt={name} />
    </Link>
  );
};
Meal.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  recipe: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
  openMealDetails: PropTypes.func.isRequired,
};
export default Meal;
