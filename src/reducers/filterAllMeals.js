import { ALL_MEALS_REQUEST, ALL_MEALS_SUCCESS, ALL_MEALS_FAIL } from '../actions/types';

const allMealsListReducer = (state = { meals: [] }, action) => {
  switch (action.type) {
    case ALL_MEALS_REQUEST:
      return { loading: true, meals: [] };
    case ALL_MEALS_SUCCESS:
      return { loading: false, meals: action.payload };
    case ALL_MEALS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export default allMealsListReducer;
