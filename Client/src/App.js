import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Products from './components/Products';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => {

  return (
    <div className='box'>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={SignUp} />
          <Route path="/products" component={Products} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
