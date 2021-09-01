// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
global.fetch = require('jest-fetch-mock');

const initialStateOne = {
  filterCategory: { category: 'All' },
  allMealsList: {
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
      {
        idMeal: '52785',
        strMeal: 'Dal fry',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
      },
      {
        idMeal: '52895',
        strMeal: 'English Breakfast',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg',
      },
    ],
  },
  categMealsList: { meals: [] },
  detailsList: { details: [] },
  detailsStatus: { detailsStatus: false },
};

const mockStoreOne = configureStore([thunk]);
export const storeOne = mockStoreOne(initialStateOne);

export const renderHelperOne = (component, mockStore = storeOne) => render(
  <BrowserRouter>
    <Provider store={mockStore}>
      {component}
    </Provider>
  </BrowserRouter>,
);

const initialStateTwo = {
  filterCategory: { category: 'Breakfast' },
  allMealsList: {
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
      {
        idMeal: '52785',
        strMeal: 'Dal fry',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
      },
      {
        idMeal: '52895',
        strMeal: 'English Breakfast',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg',
      },
    ],
  },
  categMealsList: { meals: [] },
  detailsList: {
    loading: false,
    details: {
      idMeal:	'52777',
      strMeal:	'Mediterranean Pasta Salad',
      strDrinkAlternate:	null,
      strCategory:	'Seafood',
      strArea:	'Italian',
      strInstructions:	'Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving.',
      strMealThumb:	'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
      strTags:	'Pasta,Baking',
      strYoutube:	'https://www.youtube.com/watch?v=e52IL8zYmaE',
      strIngredient1:	'mozzarella balls',
      strIngredient2:	'baby plum tomatoes',
      strIngredient3:	'fresh basil',
      strIngredient4:	'farfalle',
      strIngredient5:	'extra virgin olive oil',
      strIngredient6:	'Green Olives',
      strIngredient7:	'tuna',
      strIngredient8:	'salt',
      strIngredient9:	'pepper',
      strIngredient10:	'',
      strIngredient11:	'',
      strIngredient12:	'',
      strIngredient13:	'',
      strIngredient14:	'',
      strIngredient15:	'',
      strIngredient16:	null,
      strIngredient17:	null,
      strIngredient18:	null,
      strIngredient19:	null,
      strIngredient20:	null,
      strMeasure1:	'200 g',
      strMeasure2:	'250 g',
      strMeasure3:	'1  bunch',
      strMeasure4:	'350 g',
      strMeasure5:	'3  tablespoons',
      strMeasure6:	'40 g',
      strMeasure7:	'200 g',
      strMeasure8:	'to taste',
      strMeasure9:	'to taste',
      strMeasure10:	'',
      strMeasure11:	'',
      strMeasure12:	'',
      strMeasure13:	'',
      strMeasure14:	'',
      strMeasure15:	'',
      strMeasure16:	null,
      strMeasure17:	null,
      strMeasure18:	null,
      strMeasure19:	null,
      strMeasure20:	null,
      strSource:	'https://thelemonsqueezy.com/recipe/mediterranean-pasta-salad/',
      strImageSource:	null,
      strCreativeCommonsConfirmed:	null,
      dateModified:	null,
    },
  },
  detailsStatus: { detailsStatus: true },
};

const mockStoreTwo = configureStore([thunk]);
export const storeTwo = mockStoreTwo(initialStateTwo);

export const renderHelperTwo = (component, mockStore = storeTwo) => render(
  <BrowserRouter>
    <Provider store={mockStore}>
      {component}
    </Provider>
  </BrowserRouter>,
);
