import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMeals } from '../actions/index';
import Navbar from './Navbar';
import Loading from '../components/Loading';
import Meal from '../components/Meal';
import '../styles/home.css';

const Home = () => {
  const dispatch = useDispatch();
  const filterCategory = useSelector((state) => state.filterCategory);
  const mealsList = filterCategory === 'All' ? useSelector((state) => state.allMealsList)
    : useSelector((state) => state.categMealsList);
  const { loading, meals, error } = mealsList;
  console.log('loading', loading, meals);
  const loadingOrError = () => (
    loading ? <Loading /> : <h3>{error}</h3>
  );
  useEffect(() => {
    dispatch(getAllMeals());
  }, [dispatch]);
  // useEffect(() => {
  //   dispatch(getByCategory(filterCategory));
  // }, [filterCategory]);
  return (
    <div className="home">
      <Navbar />
      <section className="meals-list">
        <div className="meals-div">
          {
            meals.length > 0
              ? meals.map((obj) => (
                <Meal
                  key={obj.idMeal}
                  id={obj.idMeal}
                  name={obj.strMeal}
                  img={obj.strMealThumb}
                />
              ))
              : loadingOrError()
          }
        </div>
      </section>
    </div>
  );
};
Home.propTypes = {
  // category: PropTypes.string.isRequired,
  // meals: PropTypes.objectOf(PropTypes.any).isRequired,
  // getByCategory: PropTypes.func.isRequired,
};
// const mapStateToProps = (state) => ({
//   category: state.category,
//   meals: state.meals,
// });
// const mapDispatchToProps = (dispatch) => ({
//   getByCategory: (value) => {
//     dispatch(getByCategory(value));
//   },
// });
export default Home;
