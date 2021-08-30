import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMeals, getByCategory, updateDetailsStatus } from '../actions/index';
import Navbar from './Navbar';
import { Loading, Error } from './LoadingError';
import Home from './Home';
import '../styles/home.css';

const Start = () => {
  const dispatch = useDispatch();
  const filterCategory = useSelector((state) => state.filterCategory);
  const mealsList = filterCategory === 'All' ? useSelector((state) => state.allMealsList)
    : useSelector((state) => state.categMealsList);
  const { loading, error } = mealsList;
  useEffect(() => {
    if (filterCategory.category === 'All') {
      dispatch(getAllMeals());
      dispatch(updateDetailsStatus(false));
    } else {
      dispatch(getByCategory(filterCategory.category));
    }
  }, [filterCategory.category]);
  const loadingOrError = () => (
    loading && error === undefined ? <Loading /> : <Error />
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
