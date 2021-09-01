import expect from 'expect';
import allMealsListReducer from '../filterAllMeals';
import * as types from '../../actions/types';

const initialState = {
  filterCategory: { category: 'All' },
  allMealsList: { meals: [] },
  categMealsList: { meals: [] },
  detailsList: { details: [] },
  detailsStatus: { detailsStatus: false },
};

describe('allMealsListReducer', () => {
  test('should return the initial state', () => {
    expect(allMealsListReducer(initialState, {})).toEqual(
      {
        filterCategory: { category: 'All' },
        allMealsList: {
          meals: [],
        },
        categMealsList: { meals: [] },
        detailsList: { details: [] },
        detailsStatus: { detailsStatus: false },
      },
    );
  });
  test('should handle ALL_MEALS_REQUEST', () => {
    const requestAction = {
      type: types.ALL_MEALS_REQUEST,
    };
    expect(allMealsListReducer(initialState, requestAction)).toEqual(
      {
        loading: true,
        meals: [],
      },
    );
  });
  test('should handle ALL_MEALS_SUCCESS', () => {
    const successAction = {
      type: types.ALL_MEALS_SUCCESS,
      payload: [
        {
          idMeal: '52768',
          strMeal: 'Apple Frangipan Tart',
          strMealThumb: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
        },
        {
          idMeal: '52803',
          strMeal: 'Beef Wellington',
          strMealThumb: 'https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg',
        },
      ],
    };
    expect(allMealsListReducer(initialState, successAction)).toEqual(
      {
        loading: false,
        meals: [
          {
            idMeal: '52768',
            strMeal: 'Apple Frangipan Tart',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
          },
          {
            idMeal: '52803',
            strMeal: 'Beef Wellington',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg',
          },
        ],
      },
    );
  });
  test('should handle ALL_MEALS_FAIL', () => {
    const failAction = {
      type: types.ALL_MEALS_FAIL,
      error: 'Not Found',
    };
    expect(allMealsListReducer(initialState, failAction)).toEqual(
      {
        loading: false,
        error: undefined,
      },
    );
  });
});
