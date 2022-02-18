import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ProductList from './ProductList';
import userEvent from '@testing-library/user-event';

describe('ProductList Test', () => {
  it('Should render without crashing', () => {
    render(
      <RecoilRoot>
        <ProductList />
      </RecoilRoot>
    );
  });

  it('Should render 5 list items', () => {
    render(
      <RecoilRoot>
        <ProductList />
      </RecoilRoot>
    );
    let ul = screen.getByTestId('ulTest');
    expect(ul.children).toHaveLength(5);
  });

  it('In store should subtract by 1 when pressing add to cart button', () => {
    render(
      <RecoilRoot>
        <ProductList />
      </RecoilRoot>
    );
    let btn = screen.getByTestId('product1');
    userEvent.click(btn);
    // if it does not subtract, inStoreValue will not be in the document
    let inStoreValue = screen.getByText(/4 in store/i);
    expect(inStoreValue).toBeInTheDocument();
  });
});
