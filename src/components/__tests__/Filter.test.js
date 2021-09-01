import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Filter from '../Filter';

describe('Filter component', () => {
  test('Filter component renders correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Filter currentCateg="All" />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
