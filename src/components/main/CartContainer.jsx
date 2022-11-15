import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

import Footer from "./Footer";

const CartContainer = () => {

  const { products } = useSelector((state) => state.items);

  return (
    <>
      <h1 className="py-4  text-center text-3xl font-bold uppercase">
        shoppy store
      </h1>
      <div className="container mx-auto grid grid-cols-1 place-items-center gap-x-10 gap-y-10 py-10 lg:grid-cols-2">
        {products.map((item) => (
          <CartItems item={item} key={item.id} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default CartContainer;
