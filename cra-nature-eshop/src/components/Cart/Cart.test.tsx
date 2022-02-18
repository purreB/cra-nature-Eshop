import { render, screen, fireEvent, act } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import Cart from './Cart';

describe('Cart component test', () => {
  it('should render without crashing', async () => {
    await act(async () => {
      render(
        <RecoilRoot>
          <Cart />
        </RecoilRoot>
      );
    });
  });

  it('should render correct amout of cart items', async () => {
    localStorage.clear();
    const fakeData = [
      {
        id: 2,
        name: 'thermos',
        price: 110,
        inStore: 19,
        inCart: 1,
      },
      {
        id: 1,
        name: 'tent',
        price: 500,
        inStore: 3,
        inCart: 2,
      },
    ];
    localStorage.setItem('Cart', JSON.stringify(fakeData));
    await act(async () => {
      render(
        <RecoilRoot>
          <Cart />
        </RecoilRoot>
      );
    });
    let ul = screen.getByTestId('cartUL');
    expect(ul.children).toHaveLength(2);
  });

  it('should lower amount of said item in cart by 1 if user have more than one of said item', async () => {
    localStorage.clear();
    const fakeCartData = [
      {
        id: 2,
        name: 'thermos',
        price: 110,
        inStore: 19,
        inCart: 1,
      },
      {
        id: 1,
        name: 'tent',
        price: 500,
        inStore: 2,
        inCart: 3,
      },
    ];

    const fakeStoreData = [
      { id: 1, name: 'tent', price: 500, inStore: 2, inCart: 3 },
      { id: 2, name: 'thermos', price: 110, inStore: 19, inCart: 1 },
      { id: 3, name: 'flashlight', price: 200, inStore: 10, inCart: 0 },
      { id: 4, name: 'matches', price: 20, inStore: 100, inCart: 0 },
      { id: 5, name: 'rope', price: 300, inStore: 15, inCart: 0 },
    ];
    localStorage.setItem('Store', JSON.stringify(fakeStoreData));
    localStorage.setItem('Cart', JSON.stringify(fakeCartData));
    await act(async () => {
      render(
        <RecoilRoot>
          <Cart />
        </RecoilRoot>
      );
    });
    let btn = screen.getByTestId('productBtn1');
    await act(async () => {
      fireEvent.click(btn);
    });
    let cartList = screen.getByTestId('cartUL');
    let inStoreValue = screen.getByText(/2 in cart/i);
    expect(cartList.children).toHaveLength(2);
    expect(inStoreValue).toBeInTheDocument();
  });

  it('should remove one cart item when pressing button and only one of pressed item is in cart', async () => {
    localStorage.clear();
    const fakeCartData = [
      {
        id: 2,
        name: 'thermos',
        price: 110,
        inStore: 19,
        inCart: 1,
      },
      {
        id: 1,
        name: 'tent',
        price: 500,
        inStore: 3,
        inCart: 2,
      },
    ];

    const fakeStoreData = [
      { id: 1, name: 'tent', price: 500, inStore: 3, inCart: 2 },
      { id: 2, name: 'thermos', price: 110, inStore: 19, inCart: 1 },
      { id: 3, name: 'flashlight', price: 200, inStore: 10, inCart: 0 },
      { id: 4, name: 'matches', price: 20, inStore: 100, inCart: 0 },
      { id: 5, name: 'rope', price: 300, inStore: 15, inCart: 0 },
    ];
    localStorage.setItem('Store', JSON.stringify(fakeStoreData));
    localStorage.setItem('Cart', JSON.stringify(fakeCartData));
    await act(async () => {
      render(
        <RecoilRoot>
          <Cart />
        </RecoilRoot>
      );
    });
    let btn = screen.getByTestId('productBtn2');
    await act(async () => {
      fireEvent.click(btn);
    });
    let cartList = screen.getByTestId('cartUL');
    expect(cartList.children).toHaveLength(1);
  });

  it('should render correct amount of sum', async () => {
    localStorage.clear();
    const fakeData = [
      {
        id: 2,
        name: 'thermos',
        price: 110,
        inStore: 19,
        inCart: 1,
      },
      {
        id: 1,
        name: 'tent',
        price: 500,
        inStore: 3,
        inCart: 2,
      },
    ];
    localStorage.setItem('Cart', JSON.stringify(fakeData));
    await act(async () => {
      render(
        <RecoilRoot>
          <Cart />
        </RecoilRoot>
      );
    });
    const totalSum = screen.getByText(/Total Sum: 1110/i);
    expect(totalSum).toBeInTheDocument();
  });
});
