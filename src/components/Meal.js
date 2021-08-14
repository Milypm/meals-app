import PropTypes from 'prop-types';

const Meal = (mealObj) => {
  console.log('mealObj', mealObj);
  const { strMeal, strMealThumb } = mealObj;
  return (
    <div className="mealObj">
      <h3 className="meal-title">{strMeal}</h3>
      <img src={strMealThumb} alt={strMeal} />
    </div>
  );
};
Meal.propTypes = {
  mealObj: PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
};
export default Meal;
