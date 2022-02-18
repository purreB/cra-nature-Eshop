interface User {
  name: string;
  role: string;
  password: string;
  adress: string;
}

interface Admin {
  name: string;
  role: string;
  password: string;
}

export const user: User = {
  name: 'user',
  role: 'user',
  password: 'user',
  adress: 'user adress',
};

export const admin: Admin = {
  name: 'admin',
  role: 'admin',
  password: 'admin',
};
