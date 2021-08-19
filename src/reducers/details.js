import { initialState } from '../actions';
import types from '../actions/types';

const detailsReducer = (state = initialState.details, action) => {
  switch (action.type) {
    case types.DETAILS:
      const {
        name, img, country, type, recipe, youtube,
      } = action.payload;
      return update();
    default:
      return state;
  }
};
export default detailsReducer;
