import { screen } from '@testing-library/react';
import Home from '../Home';
import { renderHelperOne } from '../../setupTests';

describe('Home component', () => {
  beforeEach(() => {
    renderHelperOne(<Home />);
  });
  test('renders meals from state', () => {
    const mealOne = screen.getByText(/Apple Frangipan Tart/i);
    const mealTwo = screen.getByText(/Dal fry/i);
    expect(mealOne).toBeInTheDocument();
    expect(mealTwo).toBeInTheDocument();
  });
  test('does not render Loading component', () => {
    const loadingText = screen.queryByText('Loading');
    expect(loadingText).toBeFalsy();
  });
});
