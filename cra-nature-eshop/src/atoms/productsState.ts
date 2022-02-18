import { atom } from 'recoil';
import { productList } from '../models/Products';

//* Check if localStorage exists
export const productState = atom({
  key: 'productState',
  default: productList,
  dangerouslyAllowMutability: true,
});
