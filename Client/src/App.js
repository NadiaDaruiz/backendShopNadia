import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Products from './components/Products';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => {



  return (
    <div className='box'>
      <h1>The Little Fruit Shop</h1>

      {/* <Products /> */}
      <Login />
      {/* <SignUp /> */}

    </div>
  );
}

export default App;
