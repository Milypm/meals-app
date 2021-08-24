import types from '../actions/types';

const mealsListReducer = (state = { meals: [] }, action) => {
  switch (action.type) {
    case types.MEALS_REQUEST:
      console.log('reducer meals request');
      return { loading: true, meals: [] };
    case types.MEALS_SUCCESS:
      console.log('reducer meals success', action.payload);
      return { loading: false, meals: action.payload };
    case types.MEALS_FAIL:
      console.log('reducer meals fail');
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export default mealsListReducer;
