import App from './App';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

describe('App testing', () => {
  it('should render without crashing', () => {
    render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
  });
});
