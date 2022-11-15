import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/CartSlice";

const Footer = () => {
  const dispatch = useDispatch();

  const { carts } = useSelector((state) => state.items);

  // total price
  const totalPrice = carts.reduce((acc, a) => {
    return acc + a.price;
  }, 0);

  return (
    <div className="fixed bottom-0 w-full bg-gray-800  py-2 capitalize">
      <div className="flex items-center justify-around py-6">
        <h4>total items: {totalPrice} </h4>

        <button className="bg-red-500 px-5 py-2 rounded-md" onClick={() => dispatch(clearCart())}>clear cart: {carts.length}</button>
      </div>
    </div>
  );
};

export default Footer;
