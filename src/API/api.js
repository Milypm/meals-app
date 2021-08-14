import PropTypes from 'prop-types';

const fetchMeals = async (el) => {
  const fetched = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${el}`, { mode: 'cors' });
  const data = await fetched.json();
  return data.meals;
};
fetchMeals.propTypes = {
  el: PropTypes.string.isRequired,
};
export default fetchMeals;
