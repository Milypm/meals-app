export const fetchMeals = async (el) => {
  const fetched = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${el}`, { mode: 'cors' });
  const data = await fetched.json();
  return data.meals;
};
export const getMealByCateg = async (category) => {
  const fetched = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`, { mode: 'cors' });
  const data = await fetched.json();
  return data.meals;
};
export const getMealDetails = async (id) => {
  const fetched = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, { mode: 'cors' });
  const data = await fetched.json();
  return data.meals;
};
