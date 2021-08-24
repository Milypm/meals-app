import types from './types';
import { fetchMeals, getMealByCateg, getMealDetails } from '../API/api';

export const setCategory = (value) => ({ type: types.CATEGORY_FILTER, payload: value });

export const getAllMeals = () => async (dispatch) => {
  console.log('action dispatch');
  try {
    const mealsArr = [];
    dispatch({ type: types.MEALS_REQUEST });
    const abc = 'abcdefghijklmnoprstvwy'.split('');
    abc.forEach((el) => {
      fetchMeals(el).then((data) => {
        data.map((ob) => (
          mealsArr.push(ob)
        ));
      });
    });
    mealsArr.sort();
    console.log('mealsArr', mealsArr);
    dispatch({
      type: types.MEALS_SUCCESS,
      payload: mealsArr,
    });
  } catch (error) {
    console.log('error', error);
    dispatch({
      type: types.MEALS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getByCategory = (value) => async (dispatch) => {
  try {
    dispatch({ type: types.MEALS_REQUEST });
    const arr = getMealByCateg(value);
    arr.sort();
    dispatch({
      type: types.MEALS_SUCCESS,
      payload: arr,
    });
  } catch (error) {
    dispatch({
      type: types.MEALS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const passDetails = (key) => {
  const arr = getMealDetails(key).then((data) => data.sort());
  return {
    type: types.DETAILS,
    payload: arr,
  };
};
