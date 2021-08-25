import { useSelector } from 'react-redux';
import Meal from '../components/Meal';
import '../styles/home.css';

const Home = () => {
  const filterCategory = useSelector((state) => state.filterCategory);
  const mealsList = filterCategory === 'All' && filterCategory.category === undefined ? useSelector((state) => state.allMealsList)
    : useSelector((state) => state.categMealsList);
  const { meals } = mealsList;
  console.log('meals Home', filterCategory.category, meals);
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
