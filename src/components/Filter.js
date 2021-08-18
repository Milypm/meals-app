import PropTypes from 'prop-types';
import '../styles/navbar.css';

const Filter = (props) => {
  const { handleCatChange, currentCategory } = props;
  const categoryFilter = [
    'All',
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
  ];
  return (
    <form className="filter-form">
      <label className="label-filter">Category:</label>
      <select className="select-filter" id="category" name="category" onChange={(e) => handleCatChange(e)} value={currentCategory}>
        {
          categoryFilter.map((cat) => (
            <option key={cat} className="option-filter" value={cat}>
              {cat}
            </option>
          ))
        }
      </select>
    </form>
  );
};
Filter.propTypes = {
  handleCatChange: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
};
export default Filter;
