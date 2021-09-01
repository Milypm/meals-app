import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Meal from '../Meal';

describe('Meal component', () => {
  test('Meal component renders correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Meal
          key="53014"
          id="53014"
          name="Pizza Express Margherita"
          img="https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg"
        />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
