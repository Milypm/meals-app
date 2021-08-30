import { useSelector } from 'react-redux';
import Meal from './Meal';
import '../styles/home.css';

const Home = () => {
  const filterCategory = useSelector((state) => state.filterCategory);
  const mealsList = (filterCategory.category === 'All')
    ? useSelector((state) => state.allMealsList)
    : useSelector((state) => state.categMealsList);
  const { meals } = mealsList;
  return (
    <section className="meals-list">
      <div className="meals-div">
        {
          meals.map((obj) => (
            <Meal
              key={obj.idMeal}
              id={obj.idMeal}
              name={obj.strMeal}
              img={obj.strMealThumb}
            />
          ))
        }
      </div>
    </section>
  );
};
export default Home;
