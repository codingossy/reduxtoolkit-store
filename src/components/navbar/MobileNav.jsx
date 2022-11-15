import React from "react";
import "./Header.css";
import { IoClose } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";


const MobileNav = ({ setNavMobile }) => {

  return (
    <nav className="h-full w-full bg-black text-gray-300 lg:hidden">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="absolute right-6 top-6 cursor-pointer text-3xl "
      />

      <ul className="font-secondary flex h-full flex-col items-center justify-center space-y-8 capitalize">
        <li className="text-2xl">home</li>
        <li className="text-2xl">store</li>
      </ul>
    </nav>
  );
};

export default MobileNav;
