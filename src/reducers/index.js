import { combineReducers } from 'redux';
import filterReducer from './filter';

const reducersCombine = combineReducers({
  categoryFilter: filterReducer,
});
export default reducersCombine;
