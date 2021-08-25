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
} from './types';
import { fetchMeals, getMealByCateg, getMealDetails } from '../API/api';

export const setCategory = (value) => ({ type: CATEGORY_FILTER, payload: value });

export const getAllMeals = () => async (dispatch) => {
  try {
    const mealsArr = [];
    dispatch({ type: ALL_MEALS_REQUEST });
    // const res = await fetchMeals('m');
    const abc = 'abcdefghijklmnoprstvwy'.split('');
    abc.map((el) => (
      fetchMeals(el).then((data) => {
        data.map((ob) => (
          mealsArr.push(ob)
        ));
      })
    ));
    mealsArr.sort();
    dispatch({ type: ALL_MEALS_SUCCESS, payload: mealsArr });
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
    console.log('dispatch', value);
    dispatch({ type: CATEGORY_MEALS_REQUEST });
    const arr = await getMealByCateg(value);
    // console.log(arr);
    arr.sort();
    dispatch({
      type: CATEGORY_MEALS_SUCCESS,
      payload: arr,
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

export const passDetails = (key) => async (dispatch) => {
  try {
    dispatch({ type: DETAILS_REQUEST });
    const arr = getMealDetails(key).then((data) => data.sort());
    dispatch({ type: DETAILS_SUCCESS, payload: arr });
  } catch (error) {
    dispatch({
      type: DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
