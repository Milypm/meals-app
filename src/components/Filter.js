import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../actions/index';
import '../styles/navbar.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filterCategory = useSelector((state) => state.filterCategory);
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
      <select className="select-filter" id="category" name="category" onChange={(e) => dispatch(setCategory(e.target.value))} value={filterCategory}>
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
// Filter.propTypes = {
//   setCategory: PropTypes.func.isRequired,
//   getByCategory: PropTypes.func.isRequired,
//   category: PropTypes.string.isRequired,
// };
// const mapStateToProps = (state) => ({
//   category: state.category,
// });
// const mapDispatchToProps = (dispatch) => ({
//   setCategory: (value) => {
//     dispatch(setCategory(value));
//   },
//   getByCategory: (value) => {
//     dispatch(getByCategory(value));
//   },
// });
export default Filter;
