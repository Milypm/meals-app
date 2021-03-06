import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import filterReducer from './reducers/filterCategory';
import allMealsListReducer from './reducers/filterAllMeals';
import categMealsListReducer from './reducers/filterCategMeals';
import detailsListReducer from './reducers/details';
import detailsStatusReducer from './reducers/detailsStatus';

const rootReducer = combineReducers({
  filterCategory: filterReducer,
  allMealsList: allMealsListReducer,
  categMealsList: categMealsListReducer,
  detailsList: detailsListReducer,
  detailsStatus: detailsStatusReducer,
});

const initialState = {};

const middleware = [thunk];

const createTestStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  return store;
};
export default createTestStore;
