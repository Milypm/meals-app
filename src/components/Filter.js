// import PropTypes from 'prop-types';
import '../styles/navbar.css';

const Filter = () => (
  <form className="filter-form">
    <label className="label-filter">Generation</label>
    <select className="select-filter" id="generation" name="generation" onChange={(e) => handleGenChange(e)} value={filterGenValue}>
      {
        generations.map((filterGen) => (
          <option key={filterGen} className="option-filter" value={filterGen.toLowerCase()}>
            {filterGen}
          </option>
        ))
      }
    </select>
  </form>
);
// Filters.propTypes = {
//   handleGenChange: PropTypes.func.isRequired,
//   handleTypeChange: PropTypes.func.isRequired,
//   filterGenValue: PropTypes.string.isRequired,
//   filterTypeValue: PropTypes.string.isRequired,
//   typeFilterByGen: PropTypes.arrayOf(PropTypes.any).isRequired,
// };
export default Filter;
