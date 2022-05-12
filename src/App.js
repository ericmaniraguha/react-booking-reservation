import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import Header from './containers/Header';
import './App.css';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ProductListing />} />
        <Route path='/product/:proRoutesductId' element={<ProductDetail />} />

        <Route>404 Not Found!</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
