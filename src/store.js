import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import filterReducer from './reducers/filterCategory';
import mealsListReducer from './reducers/filterMeals';
import detailsListReducer from './reducers/details';

const rootReducer = combineReducers({
  filterCategory: filterReducer,
  mealsList: mealsListReducer,
  detailsList: detailsListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);
export default store;
