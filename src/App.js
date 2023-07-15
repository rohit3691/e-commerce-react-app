import React from 'react';
import './App.css';
import Header from './component/Header/Index';
import Home from './modules/Home/Index';
import Footer from './component/Footer/Index';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product/Index';
import Products from './modules/Products/Index';
import CategoriesProducts from './modules/CategoriesProducts/Index';
import Cart from './modules/Cart/Index';
import About from './component/About/Index';
import Contact from './component/Contact/Index';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="products" element={<Products />} />
        <Route path='/categories/:name' element={<CategoriesProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path="*" element={<div
          className=' h-[40vh] flex justify-center items-center text-5xl '
        >404</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
