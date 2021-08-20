import { combineReducers } from 'redux';
import filterReducer from './filter';
import detailsReducer from './details';

const rootReducer = combineReducers({
  filter: filterReducer,
  details: detailsReducer,
});
export default rootReducer;
