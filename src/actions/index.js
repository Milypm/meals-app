import types from './types';
import { fetchMeals, getMealByCateg, getMealDetails } from '../API/api';

export const initialState = {
  category: 'All',
  meals: {},
  details: [],
};

export const setCategory = (value) => ({ type: types.CATEGORY_FILTER, payload: value });

export const getByCategory = (value) => {
  const mealsArr = [];
  if (value === 'All') {
    const abc = 'abcdefghijklmnoprstvwy'.split('');
    abc.forEach((el) => {
      fetchMeals(el).then((data) => {
        data.map((ob) => (
          mealsArr.push(ob)
        ));
      });
    });
    mealsArr.sort();
    return {
      type: types.GET_BY_CATEGORY,
      payload: mealsArr,
    };
  }
  const arr = getMealByCateg(value).then((data) => data.sort());
  return {
    type: types.GET_BY_CATEGORY,
    payload: arr,
  };
};

export const passDetails = (key) => {
  const arr = getMealDetails(key).then((data) => data.sort());
  return {
    type: types.DETAILS,
    payload: arr,
  };
};
