import types from './types';
import { fetchMeals, getMealByCateg, getMealDetails } from '../API/api';

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
    return {
      type: types.CATEGORY_FILTER,
      payload: mealsArr.sort(),
    };
  }
  getMealByCateg(value).then((data) => {
    data.map((ob) => (
      mealsArr.push(ob)
    ));
  });
  return {
    type: types.CATEGORY_FILTER,
    payload: mealsArr.sort(),
  };
};

export const passDetails = (key) => ({
  type: types.DETAILS,
  payload: getMealDetails(key).then((data) => data),
});
