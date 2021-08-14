import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getByCategory } from '../actions/index';
import Filter from '../components/Filter';
import '../styles/navbar.css';

const Navbar = (props) => {
  const { category } = props;
  const handleCatChange = (e) => {
    props.getByCategory(e.target.value);
  };
  return (
    <nav className="navbar">
      <div className="title-filters">
        <h3>MealsApp!</h3>
        <Link to="/">Home</Link>
        <Filter
          handleCatChange={handleCatChange}
          currentValue={category}
        />
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  category: PropTypes.string.isRequired,
  getByCategory: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  category: state.category,
});
const mapDispatchToProps = (dispatch) => ({
  getByCategory: (filter) => {
    dispatch(getByCategory(filter));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
