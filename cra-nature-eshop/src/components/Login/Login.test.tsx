import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Login from './Login';
import App from '../../App';

describe('Login Test', () => {
  it('should render without crashing', async () => {
    await act(async () => {
      render(
        <RecoilRoot>
          <Login />
        </RecoilRoot>
      );
    });
  });

  it('should render login form if there is no user obj in localStoreage', async () => {
    await act(async () => {
      localStorage.clear();
      render(
        <RecoilRoot>
          <App />
        </RecoilRoot>
      );
    });
    const usernameInput = screen.getByTestId('usernameTest');
    const passwordInput = screen.getByTestId('passwordTest');
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('LocalStorage should be null if wrong info is entered', async () => {
    localStorage.clear();
    await act(async () => {
      render(
        <RecoilRoot>
          <Login />
        </RecoilRoot>
      );
    });

    const username = 'WEWWAW';
    const password = 'ErRR';
    const usernameInput = screen.getByTestId('usernameTest');
    const passwordInput = screen.getByTestId('passwordTest');
    await act(async () => {
      fireEvent.input(usernameInput, {
        target: {
          value: username,
        },
      });
      fireEvent.input(passwordInput, {
        target: {
          value: password,
        },
      });
      fireEvent.submit(screen.getByTestId('btnTest'));
    });

    const fetchedUser = await JSON.parse(localStorage.getItem('User')!);
    expect(fetchedUser).toBeNull();
  });

  it('user object should exist in localStorage after correct inputs', async () => {
    localStorage.clear();
    await act(async () => {
      render(
        <RecoilRoot>
          <Login />
        </RecoilRoot>
      );
    });

    const username = 'user';
    const password = 'user';
    const usernameInput = screen.getByTestId('usernameTest');
    const passwordInput = screen.getByTestId('passwordTest');
    await act(async () => {
      fireEvent.input(usernameInput, {
        target: {
          value: username,
        },
      });
      fireEvent.input(passwordInput, {
        target: {
          value: password,
        },
      });
      fireEvent.submit(screen.getByTestId('btnTest'));
    });

    const fetchedUser = await JSON.parse(localStorage.getItem('User')!);
    expect(fetchedUser).toHaveProperty('userName' && 'password');
  });

  it('should display error msg on wrong input', async () => {
    localStorage.clear();
    await act(async () => {
      render(
        <RecoilRoot>
          <Login />
        </RecoilRoot>
      );
    });

    const username = 'WEWWAW';
    const password = 'ErRR';
    const usernameInput = screen.getByTestId('usernameTest');
    const passwordInput = screen.getByTestId('passwordTest');
    await act(async () => {
      fireEvent.input(usernameInput, {
        target: {
          value: username,
        },
      });
      fireEvent.input(passwordInput, {
        target: {
          value: password,
        },
      });
      fireEvent.submit(screen.getByTestId('btnTest'));
    });

    expect(await screen.findAllByRole('alert')).toHaveLength(2);
  });
});
