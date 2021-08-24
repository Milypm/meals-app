import types from '../actions/types';

const filterReducer = (state = { category: 'All' }, action) => {
  switch (action.type) {
    case types.CATEGORY_FILTER:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
export default filterReducer;
