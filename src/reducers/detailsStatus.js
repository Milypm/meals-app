import { DETAILS_STATUS } from '../actions/types';

const detailsStatusReducer = (state = { detailsStatus: false }, action) => {
  switch (action.type) {
    case DETAILS_STATUS:
      return { detailsStatus: action.payload };
    default:
      return state;
  }
};
export default detailsStatusReducer;
