import { screen } from '@testing-library/react';
import Start from '../Start';
import { renderHelperOne } from '../../setupTests';

describe('Start component', () => {
  beforeEach(() => {
    renderHelperOne(<Start />);
  });
  test('renders Navbar', () => {
    const appLogo = screen.getByText(/MealsApp/i);
    expect(appLogo).toBeInTheDocument();
  });
  test('renders filter', () => {
    const categoryLabel = screen.getByText(/category/i);
    expect(categoryLabel).toBeInTheDocument();
  });
  test('does not render Loading component', () => {
    const loadingText = screen.queryByText('Loading');
    expect(loadingText).toBeFalsy();
  });
});
