export interface Product {
  id: number;
  name: string;
  price: number;
  inStore: number;
  inCart: number;
}

export let productList = [
  { id: 1, name: 'tent', price: 500, inStore: 5, inCart: 0 },
  { id: 2, name: 'thermos', price: 110, inStore: 20, inCart: 0 },
  { id: 3, name: 'flashlight', price: 200, inStore: 10, inCart: 0 },
  { id: 4, name: 'matches', price: 20, inStore: 100, inCart: 0 },
  { id: 5, name: 'rope', price: 300, inStore: 15, inCart: 0 },
];
