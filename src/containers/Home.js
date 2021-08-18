import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMeals, getMealByCateg } from '../API/api';
import Navbar from './Navbar';
import Loading from '../components/Loading';
import Meal from '../components/Meal';
import { passDetails } from '../actions/index';
import '../styles/home.css';

const Home = (props) => {
  const { category } = props;
  console.log('category', category);
  const [meals, setMeals] = useState([]);
  const abc = 'abcdefghijklmnoprstvwy'.split('');
  const mealsArr = [];
  const openMealDetails = (mealObj) => {
    props.passDetails(mealObj);
  };
  useEffect(() => {
    abc.forEach((el) => {
      fetchMeals(el).then((data) => {
        data.map((ob) => (
          mealsArr.push(ob)
        ));
      });
    });
    setMeals(mealsArr.sort());
  }, []);
  useEffect(() => {
    getMealByCateg(category).then((data) => {
      data.map((ob) => (
        mealsArr.push(ob)
      ));
    });
    setMeals(mealsArr.sort());
  }, [category]);
  console.log('render', meals);
  return (
    <div className="home">
      <Navbar />
      <section className="meals-list">
        <div className="meals-div">
          {
            meals.length === 0
              ? <Loading />
              : meals.map((obj) => (
                <Meal
                  key={obj.idMeal}
                  name={obj.strMeal}
                  img={obj.strMealThumb}
                  recipe={obj.strInstructions}
                  country={obj.strArea}
                  type={obj.strCategory}
                  youtube={obj.strYoutube}
                  openMealDetails={openMealDetails}
                />
              ))
          }
        </div>
      </section>
    </div>
  );
};
Home.propTypes = {
  category: PropTypes.string.isRequired,
  passDetails: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  category: state.category,
});
const mapDispatchToProps = (dispatch) => ({
  passDetails: (obj) => {
    dispatch(passDetails(obj));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
