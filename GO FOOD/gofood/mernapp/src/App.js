
import './App.css';
import Home from './screens/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Singup from './screens/Singup.js';
import About from './component/About.js';
import Contact from './screens/Contact.js';
import Menu from './screens/Menu.js';
import Offer from './datafolder/Offer.js';
import Cart from './datafolder/Cart.js';
import Order from './datafolder/Order.js';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/creatuser' element={<Singup />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/menu' element={<Menu />} />
          <Route exact path='/offer' element={<Offer />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/order' element={<Order />} />



        </Routes>
      </div>
    </Router>
  )
}

export default App;
