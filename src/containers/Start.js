import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMeals } from '../actions/index';
import Navbar from './Navbar';
import Loading from '../components/Loading';
import Home from './Home';
import '../styles/home.css';

const Start = () => {
  const dispatch = useDispatch();
  const mealsList = useSelector((state) => state.allMealsList);
  const { loading, meals, error } = mealsList;
  // console.log('loading', loading, meals);
  useEffect(() => {
    dispatch(getAllMeals());
  }, []);
  const loadingOrError = () => (
    loading ? <Loading /> : <h3>{error}</h3>
  );
  return (
    <div className="home">
      <Navbar />
      {
        meals.length > 0
          ? <Home />
          : loadingOrError()
      }
    </div>
  );
};
export default Start;
