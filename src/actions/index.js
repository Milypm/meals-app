import types from './types';

export const initialState = {
  category: 'All',
};

export const getByCategory = (value) => ({ type: types.CATEGORY_FILTER, payload: value });
