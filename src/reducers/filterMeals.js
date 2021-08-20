import types from '../actions/types';
import { initialState } from '../actions/index';

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BY_CATEGORY:
      // console.log(action.payload);
      return {
        ...state,
        meals: action.payload,
      };
    default:
      return state;
  }
};
export default mealsReducer;
