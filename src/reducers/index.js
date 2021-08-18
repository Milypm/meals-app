import { combineReducers } from 'redux';
import filterReducer from './filter';
import detailsReducer from './details';

const reducersCombine = combineReducers({
  filter: filterReducer,
  details: detailsReducer,
});
export default reducersCombine;
