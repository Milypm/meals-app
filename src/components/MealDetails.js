// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../containers/Navbar';

const MealDetails = (props) => {
  const { details } = props;
  console.log('details', details);
  const {
    name,
    img,
    country,
    type,
    recipe,
    youtube,
  } = details;
  return (
    <div className="mealDetails">
      <Navbar />
      <section className="mealDetails-section">
        <h3 className="mealDetails-title">{name}</h3>
        <p className="mealDetails-country">{country}</p>
        <p className="mealDetails-type">{type}</p>
        <img src={img} alt={name} />
        <p className="mealDetails-recipe">{recipe}</p>
        <p className="mealDetails-youtube">{youtube}</p>
      </section>
    </div>
  );
};
MealDetails.propTypes = {
  // key: PropTypes.string.isRequired,
  details: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    country: PropTypes.string,
    type: PropTypes.string,
    recipe: PropTypes.string,
    youtube: PropTypes.string,
  }).isRequired,
};
const mapStateToProps = (state) => ({
  details: state.details,
});
export default connect(mapStateToProps, null)(MealDetails);
