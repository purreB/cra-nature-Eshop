import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Login from './components/Login/Login';
import ProductList from './components/ProductList/ProductList';
import './App.css';
import { userState } from './atoms/userState';
import Cart from './components/Cart/Cart';

function App() {
  const userFound = useRecoilValue(userState);
  const [localUserFound, setlocalUserFound] = useState(Boolean);
  useEffect(() => {
    if (localStorage.getItem('User')) {
      setlocalUserFound(true);
    } else {
      setlocalUserFound(false);
    }
  }, [userFound]);

  return (
    <div className="App">
      {localUserFound ? (
        <>
          <ProductList />
          <Cart />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
