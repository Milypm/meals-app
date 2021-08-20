import types from '../actions/types';

const initialState = {
  details: '',
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};
export default detailsReducer;
