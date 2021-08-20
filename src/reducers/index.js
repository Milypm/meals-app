import { combineReducers } from 'redux';
import filterReducer from './filterCategory';
import mealsReducer from './filterMeals';
import detailsReducer from './details';

const rootReducer = combineReducers({
  category: filterReducer,
  meals: mealsReducer,
  details: detailsReducer,
});
export default rootReducer;
