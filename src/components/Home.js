// import React from 'react';
// import ProductList from './components/ProductList';
import Header from './Header';
import React, { useContext } from 'react';
import '../css/product.css';
import Cards from './Cards';
import Find from './Find';
import Tabss from './Tabss';
import Slide from './Slide';

// import { BrowserRouter as Router, Route, Link, BrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router, Route, Redirect, Switch, Routes } from 'react-router-dom';
// import RouterCustom from './Router';
// import { ROUTERS } from './components/Router';

// const Cardss = () => <div>Cardss</div>;

const Home = () => {
  return (
    <div className='page'>
      <Header/>
      <Find/>
      <Tabss/>
      <Slide/>
      {/* <Cards/> */}
    </div>
  );
  
};

export default Home;


