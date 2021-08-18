import types from './types';

export const initialState = {
  category: 'All',
  details: {
    name: '',
    img: '',
    country: '',
    type: '',
    recipe: '',
    youtube: '',
  },
};
export const getByCategory = (value) => ({ type: types.CATEGORY_FILTER, payload: value });
export const passDetails = (detailsObj) => ({ type: types.DETAILS, payload: detailsObj });
