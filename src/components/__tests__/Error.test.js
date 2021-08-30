import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Error } from '../LoadingError';

test('Error component renders correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Error />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
