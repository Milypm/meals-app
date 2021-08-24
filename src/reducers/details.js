import types from '../actions/types';

const detailsListReducer = (state = { details: [] }, action) => {
  switch (action.type) {
    case types.MEALS_REQUEST:
      return { loading: true, details: [] };
    case types.MEALS_SUCCESS:
      return { loading: false, details: action.payload };
    case types.MEALS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export default detailsListReducer;
