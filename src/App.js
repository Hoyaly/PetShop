// import React from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';
import React, { useContext } from 'react';
import './css/product.css';
import Cards from './components/Cards';
import Find from './components/Find';
import Tabss from './components/Tabss';
import Slide from './components/Slide';
import { BrowserRouter as Router, Route, Redirect, Switch, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Contact from './components/Contact';

const Dashboard = () => <div>Trang Dashboard</div>;
const App = () => {
  return (
    <div className='app'>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/danhsach' element={<Cards/>}></Route>
      <Route path='/lienhe' element={<Contact/>}></Route>
      {/* <Route path='/lienhe' element={<Contact/>}></Route> */}
    </Routes>
    </div>
    
  );
  
};

export default App;


