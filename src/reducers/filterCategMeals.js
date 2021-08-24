import { CATEGORY_MEALS_REQUEST, CATEGORY_MEALS_SUCCESS, CATEGORY_MEALS_FAIL } from '../actions/types';

const categMealsListReducer = (state = { meals: [] }, action) => {
  switch (action.type) {
    case CATEGORY_MEALS_REQUEST:
      return { loading: true, meals: [] };
    case CATEGORY_MEALS_SUCCESS:
      return { loading: false, meals: action.payload };
    case CATEGORY_MEALS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export default categMealsListReducer;
