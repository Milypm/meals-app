import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMeals } from '../actions/index';
import Navbar from './Navbar';
import Loading from '../components/Loading';
import Meal from '../components/Meal';
import '../styles/home.css';

const Home = () => {
  const dispatch = useDispatch();
  // const filterCategory = useSelector((state) => state.filterCategory);
  const mealsList = useSelector((state) => state.mealsList);
  const { loading, error, meals } = mealsList;
  console.log('meals', meals);
  const display = () => {
    if (loading) {
      <Loading />;
    } else if (error) {
      <h3>{error}</h3>;
    } else {
      meals.map((obj) => {
        console.log(obj.strMeal);
        return (
          <Meal
            key={obj.idMeal}
            id={obj.idMeal}
            name={obj.strMeal}
            img={obj.strMealThumb}
          />
        );
      });
    }
  };
  useEffect(() => {
    dispatch(getAllMeals());
  }, []);
  // useEffect(() => {
  //   dispatch(getByCategory(filterCategory));
  // }, [dispatch, filterCategory]);
  return (
    <div className="home">
      <Navbar />
      <section className="meals-list">
        <div className="meals-div">
          {display()}
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
