import { useSelector } from 'react-redux';
import Navbar from '../containers/Navbar';
import '../styles/mealDetails.css';

const MealDetails = () => {
  const detailsList = useSelector((state) => state.detailsList.details);
  // console.log('detailsList', detailsList);
  const {
    strArea,
    strCategory,
    strMeal,
    strInstructions,
    strMealThumb,
    strYoutube,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
  } = detailsList[0];
  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
  ];
  ingredients.filter((i) => i !== null);
  ingredients.filter((i) => i !== '');
  return (
    <div className="mealDetails">
      <Navbar />
      <section className="mealDetails-section">
        <h2 className="mealDetails-title">{strMeal}</h2>
        <div className="type-origin-div">
          <p className="mealDetails-type">{strCategory}</p>
          <p className="mealDetails-country">{strArea}</p>
        </div>
        <img src={strMealThumb} alt={strMeal} />
        <div className="ings-recipe-div">
          {
            ingredients.map((i) => (
              <ul key={i}>
                <li>{i}</li>
              </ul>
            ))
          }
          <p className="mealDetails-recipe">{strInstructions}</p>
        </div>
        <p className="video-text">
          See a video demostration
          {' '}
          <a href={strYoutube} target="_blank" rel="noopener noreferrer">HERE!</a>
        </p>
      </section>
    </div>
  );
};
export default MealDetails;
