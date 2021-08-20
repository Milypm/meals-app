import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Loading from '../components/Loading';
import Meal from '../components/Meal';
import { getByCategory } from '../actions/index';
import '../styles/home.css';

const Home = (props) => {
  const { category, meals } = props;
  useEffect(() => {
    props.getByCategory(category);
  }, [category]);
  return (
    <div className="home">
      <Navbar />
      <section className="meals-list">
        <div className="meals-div">
          {
            Object.keys(meals).length === 0
              ? <Loading />
              : meals.meals.map((obj) => (
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
    </div>
  );
};
Home.propTypes = {
  category: PropTypes.string.isRequired,
  meals: PropTypes.objectOf(PropTypes.any).isRequired,
  getByCategory: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  category: state.category,
  meals: state.meals,
});
const mapDispatchToProps = (dispatch) => ({
  getByCategory: (value) => {
    dispatch(getByCategory(value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
