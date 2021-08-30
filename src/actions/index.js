import {
  CATEGORY_FILTER,
  ALL_MEALS_REQUEST,
  ALL_MEALS_SUCCESS,
  ALL_MEALS_FAIL,
  CATEGORY_MEALS_REQUEST,
  CATEGORY_MEALS_SUCCESS,
  CATEGORY_MEALS_FAIL,
  DETAILS_REQUEST,
  DETAILS_SUCCESS,
  DETAILS_FAIL,
  DETAILS_STATUS,
} from './types';
import { fetchMeals, getMealByCateg, getMealDetails } from '../API/api';

export const setCategory = (value) => ({ type: CATEGORY_FILTER, payload: value });

const SortArray = (x, y) => x.strMeal.localeCompare(y.strMeal);

export const getAllMeals = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_MEALS_REQUEST });
    const mealsArr = [];
    const abc = 'abcdefghijklmnoprstvwy'.split('');
    const promises = abc.map((el) => (
      fetchMeals(el).then((data) => {
        data.map((ob) => (
          mealsArr.push(ob)
        ));
      })
    ));
    await Promise.all(promises);
    const sortedMeals = mealsArr.sort(SortArray);
    console.log('sortedMeals', sortedMeals);
    dispatch({ type: ALL_MEALS_SUCCESS, payload: sortedMeals });
  } catch (error) {
    dispatch({
      type: ALL_MEALS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getByCategory = (value) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_MEALS_REQUEST });
    const arr = await getMealByCateg(value);
    const sortedMeals = arr.sort(SortArray);
    dispatch({
      type: CATEGORY_MEALS_SUCCESS,
      payload: sortedMeals,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_MEALS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const updateDetailsStatus = (val) => ({ type: DETAILS_STATUS, payload: val });

export const passDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: DETAILS_REQUEST });
    const mealDtls = await getMealDetails(id);
    dispatch({ type: DETAILS_SUCCESS, payload: mealDtls[0] });
  } catch (error) {
    dispatch({
      type: DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
