import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Loading from '../components/Loading';
import '../styles/home.css';

const Home = (props) => {
  const { category } = props;
  const [meals, setMeals] = useState([]);
  const getAllMeals = async () => {
    const fetched = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a', { mode: 'cors' });
    const [meals] = await fetched.json();
    setMeals(meals);
  };
  useEffect(() => {
    getAllMeals();
  }, []);
  return (
    <div className="home">
      <Navbar />
      <section className="meals-list">
        <h1>Home</h1>
        <div className="meals-div">
          {
            meals.length === 0
              ? <Loading />
              : meals.map((mealObj) => (
                <Meal key={mealObj.idMeal} mealObj={mealObj} />
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