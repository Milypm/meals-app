import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Loading } from '../LoadingError';

describe('Loading and Error components', () => {
  test('Loading component renders correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Loading />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
