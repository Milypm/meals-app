import types from '../actions/types';

const initialState = {
  category: 'All',
  meals: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CATEGORY_FILTER:
      return {
        ...state,
        category: action.payload,
      };
    case types.GET_BY_CATEGORY:
      return {
        ...state,
        meals: action.payload,
      };
    default:
      return state;
  }
};
export default filterReducer;
