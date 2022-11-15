import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { carts } = useSelector((state) => state.items);



  return (
    <nav className="hidden capitalize lg:flex">
      <ul className="flex items-center space-x-12">
        <li className="nav-link">home</li>
        <li className="nav-link">store</li>
        <Link to='/cart'>
          <li
           
            className="nav-link relative mr-10 cursor-pointer "
          >
            <FaShoppingCart size={25} />
            <span className="absolute -right-5 -top-3 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 p-4 font-bold text-white">
              {carts.length}
            </span>
          </li>
        </Link>
      </ul>

    
    </nav>
  );
};

export default Navbar;
