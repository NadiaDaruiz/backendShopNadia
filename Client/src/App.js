import React from 'react';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignUp from './components/SignUp';
/*import Apples from './img/apples.jpeg';
import Bananas from './img/bananas.jpg';
import Plums from './img/plums.jpg';
import Blueberries from './img/blueberries.jpg';
import Strawberries from './img/strawberries.jpg';*/

const App = () => {
  return (
    <div className='box'>
      <h1>The Little Fruit Shop</h1>
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
