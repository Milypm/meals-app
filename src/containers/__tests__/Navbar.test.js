import {
  cleanup, fireEvent, screen, waitFor,
} from '@testing-library/react';
import Navbar from '../Navbar';
import { renderHelperOne, renderHelperTwo } from '../../setupTests';

describe('Navbar component', () => {
  afterEach(cleanup);
  test('selects a category from Filter', async () => {
    renderHelperOne(<Navbar />);
    const getSelectItem = () => async (selectLabel, itemText) => {
      fireEvent.change(screen.getByText(selectLabel));
      await waitFor(() => screen.queryByText(itemText));
      fireEvent.change(screen.queryByText(itemText));
    };
    const selectItem = getSelectItem();
    await selectItem('Category:', 'Dessert');
  });
  test('category Filter is not displayed (cause detailsStatus is set to true)', () => {
    renderHelperTwo(<Navbar />);
    const categFilter = screen.queryByText('Category:');
    expect(categFilter).toBeNull();
  });
});
