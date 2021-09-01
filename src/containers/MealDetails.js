import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../actions/index';
import Navbar from './Navbar';
import { Loading, Error } from '../components/LoadingError';
import corgiChef from '../assets/images/corgi-chef.jpg';
import '../styles/mealDetails.css';

const MealDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCategory('All'));
  }, []);
  const detailsList = useSelector((state) => state.detailsList);
  const { loading, error } = detailsList;
  const loadingOrError = () => (
    loading ? <Loading /> : <Error error={error} />
  );
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
  } = detailsList.details;
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
  const notNull = ingredients.filter((i) => i !== null);
  const notEmpty = notNull.filter((i) => i !== '');
  let n = 0;
  return (
    <div className="mealDetails">
      <Navbar />
      {
        !loading && error === undefined
          ? (
            <section className="mealDetails-section">
              <img src={corgiChef} className="corgiChef" alt="Corgi with Chef Hat Smiling" />
              <h2 className="mealDetails-title">{strMeal}</h2>
              <div className="type-origin-div">
                <p className="mealDetails-type">{strCategory}</p>
                <p className="mealDetails-country">{strArea}</p>
              </div>
              <img src={strMealThumb} className="mealImg" alt={strMeal} />
              <div className="ings-recipe-div">
                <ul className="ings-ul">
                  <p>Ingredients:</p>
                  {
                    notEmpty[0] !== undefined
                      ? notEmpty.map((i) => {
                        const item = <li key={`ing-${n}`}>{i}</li>;
                        n += 1;
                        return item;
                      })
                      : <p />
                  }
                </ul>
                <div className="recipe-div">
                  <p>Instructions:</p>
                  <p className="mealDetails-recipe">{strInstructions}</p>
                </div>
              </div>
              <p className="video-text">
                See a video demonstration
                {' '}
                <a href={strYoutube} target="_blank" rel="noopener noreferrer">HERE!</a>
              </p>
            </section>
          )
          : loadingOrError()
      }
    </div>
  );
};
export default MealDetails;
