import PropTypes from 'prop-types';
import '../styles/navbar.css';

const Filter = (props) => {
  const { handleCatChange, currentValue } = props;
  categoryFilter = [
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
      <label className="label-filter">Category</label>
      <select className="select-filter" id="category" name="category" onChange={(e) => handleCatChange(e)} value={currentValue}>
        {
          categoryFilter.map((cat) => (
            <option key={cat} className="option-filter" value={cat.toLowerCase()}>
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
  currentValue: PropTypes.string.isRequired,
};
export default Filter;
