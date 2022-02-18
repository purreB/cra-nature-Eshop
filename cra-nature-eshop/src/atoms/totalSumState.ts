import { atom } from 'recoil';

export const totalSumState = atom({
  key: 'totalSumState',
  default: 0,
  dangerouslyAllowMutability: true,
});
