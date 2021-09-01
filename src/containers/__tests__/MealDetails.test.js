import { screen } from '@testing-library/react';
import MealDetails from '../MealDetails';
import { renderHelperTwo } from '../../setupTests';

describe('MealDetails component', () => {
  beforeEach(() => {
    renderHelperTwo(<MealDetails />);
  });
  test('renders the specific meal from state', () => {
    const mealName = screen.queryByText('Mediterranean Pasta Salad');
    const mealOrigin = screen.queryByText('Italian');
    expect(mealName).toBeInTheDocument();
    expect(mealOrigin).toBeInTheDocument();
  });
  test('does not render Loading component', () => {
    const loadingText = screen.queryByText('Loading');
    expect(loadingText).toBeFalsy();
  });
});
