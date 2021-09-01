import { CATEGORY_FILTER } from '../actions/types';

const filterReducer = (state = { category: 'All' }, action) => {
  switch (action.type) {
    case CATEGORY_FILTER:
      return { category: action.payload };
    default:
      return state;
  }
};
export default filterReducer;
