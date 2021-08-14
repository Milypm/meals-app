import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchMeals from '../API/api';
import Navbar from './Navbar';
import Loading from '../components/Loading';
import Meal from '../components/Meal';
import '../styles/home.css';

const Home = (props) => {
  const { category } = props;
  const [meals, setMeals] = useState([]);
  const getAllMeals = () => {
    const mealsArr = [];
    const abc = 'abcdefghijklmnoprstvwy'.split('');
    abc.forEach((el) => {
      fetchMeals(el).then((data) => {
        mealsArr.push(data);
      });
    });
    setMeals(mealsArr);
  };
  const getMealByCateg = async () => {
    const fetched = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`, { mode: 'cors' });
    const data = await fetched.json();
    setMeals(data.meals);
  };
  useEffect(() => {
    getAllMeals();
  }, []);
  useEffect(() => {
    getMealByCateg();
  }, [category]);
  return (
    <div className="home">
      <Navbar />
      <section className="meals-list">
        <h1>Home</h1>
        <div className="meals-div">
          {
            meals.length === 0
              ? <Loading />
              : meals.map((mealArray) => (
                mealArray.forEach((el) => {
                  console.log(el);
                    <Meal key={el.idMeal} mealObj={el} />;
                })
              ))
          }
        </div>
      </section>
    </div>
  );
};
Home.propTypes = {
  category: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  category: state.category,
});
export default connect(mapStateToProps, null)(Home);
