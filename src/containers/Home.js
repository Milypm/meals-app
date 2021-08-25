// import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { getByCategory } from '../actions/index';
import Meal from '../components/Meal';
import '../styles/home.css';

const Home = () => {
  // const dispatch = useDispatch();
  const filterCategory = useSelector((state) => state.filterCategory);
  const mealsList = filterCategory === 'All' ? useSelector((state) => state.allMealsList)
    : useSelector((state) => state.categMealsList);
  const { meals } = mealsList;
  // useEffect(() => {
  //   dispatch(getByCategory());
  // }, [filterCategory !== 'All']);
  console.log('meals Home', meals);
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
