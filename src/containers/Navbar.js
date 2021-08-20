import React from 'react';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter';
import '../styles/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="title-filters">
      <h3>MealsApp!</h3>
      <Link to="/">Home</Link>
      <Filter />
    </div>
  </nav>
);
export default Navbar;
