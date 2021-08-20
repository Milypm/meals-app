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
  }, []);
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
  meals: PropTypes.string.isRequired,
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
