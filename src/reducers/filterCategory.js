import types from '../actions/types';
import { initialState } from '../actions/index';

const filterReducer = (state = initialState, action) => {
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
