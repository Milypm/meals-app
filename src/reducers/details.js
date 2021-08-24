import { DETAILS_REQUEST, DETAILS_SUCCESS, DETAILS_FAIL } from '../actions/types';

const detailsListReducer = (state = { details: [] }, action) => {
  switch (action.type) {
    case DETAILS_REQUEST:
      return { loading: true, details: [] };
    case DETAILS_SUCCESS:
      return { loading: false, details: action.payload };
    case DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export default detailsListReducer;
