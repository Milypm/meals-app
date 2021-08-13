import PropTypes from 'prop-types';

const Meal = ({ mealObj }) => {
  const { strMeal, strArea, strMealThumb } = mealObj;
  return (
    <div className="mealObj">
      <h3 className="meal-title">{strMeal}</h3>
      <img src={strMealThumb} alt={strMeal} />
      <p className="meal-place">{strArea}</p>
    </div>
  );
};
Meal.propTypes = {
  mealObj: PropTypes.shape({
    strMeal: PropTypes.string,
    strArea: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
};
export default Meal;
