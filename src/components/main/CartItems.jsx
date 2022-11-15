import React from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaMinus,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, RemoveFromCart } from "../../store/CartSlice";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="m-auto w-full items-center justify-center border p-4">
      <div className="flex flex-col gap-x-16 lg:flex-row">
        <div>
          <img
            src={item.img}
            alt=""
            className=" rounded-md object-cover lg:h-32 lg:w-32"
          />
        </div>

        <div className="">
          <h1 className="py-2 text-center text-xl font-light capitalize lg:py-0 lg:text-start ">
            {item.title}
          </h1>
          <p className="p-3 text-justify lg:hidden">{item.desc}</p>
          <h4 className="py-4 text-center text-2xl capitalize text-green-500 lg:text-start">
            ${item.price}
          </h4>
        </div>

        <div className=" flex items-center justify-center gap-x-6">
          <button
            onClick={() => dispatch(AddToCart(item.id))}
            className="rounded-md bg-green-500 px-8 py-2"
          >
            add
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default CartItems;
