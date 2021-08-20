import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCategory, getByCategory } from '../actions/index';
import '../styles/navbar.css';

const Filter = (props) => {
  const { category } = props;
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
  const onChange = (e) => {
    props.getByCategory(e.target.value);
    props.setCategory(e.target.value);
  };
  return (
    <form className="filter-form">
      <label className="label-filter">Category:</label>
      <select className="select-filter" id="category" name="category" onChange={(e) => onChange(e)} value={category}>
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
  setCategory: PropTypes.func.isRequired,
  getByCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  category: state.category,
});
const mapDispatchToProps = (dispatch) => ({
  setCategory: (value) => {
    dispatch(setCategory(value));
  },
  getByCategory: (value) => {
    dispatch(getByCategory(value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
