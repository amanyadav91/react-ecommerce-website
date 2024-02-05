import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import {Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductDetail from "./Components/ProductDetail";
import AddToCart from "./Components/AddToCart";
import Login from "./Components/Login";
// import About from "./Components/About";
// import { Auth0Provider } from '@auth0/auth0-react';
 import "./Components/ecommerce.css"
 

function App() {
  return (
    <>
     <Navbar/>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product" element={<Products/>}/>
      <Route path="/product/productdetail/:id" element={<ProductDetail/>}/>
      <Route path="/addtocart" element={<AddToCart/>}/>
      <Route path="/about/product" element={<Products/>}/>
      <Route path="/Login" element={<Login/>}/>
      
    <Route path="*" element={<Error/>}/>
   </Routes>
    </>
  );
}

export default App;
