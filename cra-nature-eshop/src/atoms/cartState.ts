import { atom } from 'recoil';
import { cart } from '../models/Cart';

export const cartState = atom({
  key: 'cartState',
  default: cart,
  dangerouslyAllowMutability: true,
});
