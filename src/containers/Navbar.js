import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter';
import { setCategory } from '../actions/index';
import '../styles/navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const filterCategory = useSelector((state) => state.filterCategory);
  const detailsStatus = useSelector((state) => state.detailsStatus.detailsStatus);
  const onChangeHandler = useCallback((e) => {
    dispatch(setCategory(e.target.value));
  });
  return (
    <nav className="navbar">
      <div className="title-filters">
        <h3>MealsApp!</h3>
        <div className="home-categ-div">
          <Link to="/" className="home-link" onClick={() => dispatch(setCategory('All'))}>Home</Link>
          {
            !detailsStatus
              ? <Filter onChangeHandler={onChangeHandler} currentCateg={filterCategory.category} />
              : <p />
          }
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
