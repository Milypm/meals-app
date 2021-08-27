import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMeals, getByCategory, updateDetailsStatus } from '../actions/index';
import Navbar from './Navbar';
import Loading from '../components/Loading';
import Home from './Home';
import '../styles/home.css';

const Start = () => {
  const dispatch = useDispatch();
  const filterCategory = useSelector((state) => state.filterCategory);
  const mealsList = filterCategory === 'All' ? useSelector((state) => state.allMealsList)
    : useSelector((state) => state.categMealsList);
  const { loading, error } = mealsList;
  useEffect(() => {
    if (filterCategory === 'All' || filterCategory.category === 'All') {
      dispatch(getAllMeals());
      dispatch(updateDetailsStatus(false));
    } else if (filterCategory.category !== undefined) {
      dispatch(getByCategory(filterCategory.category));
    }
  }, [filterCategory.category]);
  const loadingOrError = () => (
    loading ? <Loading /> : <h3>{error}</h3>
  );
  return (
    <div className="home">
      <Navbar />
      {
        !loading && error === undefined
          ? <Home />
          : loadingOrError()
      }
    </div>
  );
};
export default Start;
