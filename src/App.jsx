import { useState } from "react";
import CartContainer from "./components/main/CartContainer";
import Header from "./components/navbar/Header";

import { Routes, Route } from "react-router-dom";

import Checkout from "./components/main/Checkout";
import Cart from "./components/main/Cart";


function App() {
  return (
    <div className="">
      <Header />

      <Routes>
        <Route path="/" element={<CartContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
     
    </div>
  );
}

export default App;
