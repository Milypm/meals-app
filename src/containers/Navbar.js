import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter';
import { setCategory } from '../actions/index';
import '../styles/navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const detailsStatus = useSelector((state) => state.detailsStatus.detailsStatus);
  return (
    <nav className="navbar">
      <div className="title-filters">
        <h3>MealsApp!</h3>
        <div className="home-categ-div">
          <Link to="/" className="home-link" onClick={() => dispatch(setCategory('All'))}>Home</Link>
          {
            !detailsStatus
              ? <Filter />
              : <p />
          }
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
