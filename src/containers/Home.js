import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { passDetails, updateDetailsStatus } from '../actions/index';
import Meal from '../components/Meal';
import '../styles/home.css';

const Home = () => {
  const dispatch = useDispatch();
  const filterCategory = useSelector((state) => state.filterCategory);
  const mealsList = (filterCategory.category === 'All')
    ? useSelector((state) => state.allMealsList)
    : useSelector((state) => state.categMealsList);
  const { meals } = mealsList;
  const dispatches = useCallback((id) => {
    dispatch(passDetails(id));
    dispatch(updateDetailsStatus(true));
  }, []);
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
              onClickHandler={dispatches}
            />
          ))
        }
      </div>
    </section>
  );
};
export default Home;
