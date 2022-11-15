import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { HiMenu } from "react-icons/hi";
import MobileNav from "./MobileNav";

import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.items);

  const [navMobile, setNavMobile] = useState(false);

  return (
    <header className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/">
            <h1>shoppy</h1>
          </Link>


          <Link to={"/cart"}>
          <li className="nav-link relative mr-10 flex cursor-pointer lg:hidden">
            <FaShoppingCart size={25} />
            
              <span className="absolute -right-5 -top-3 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 p-4 font-bold text-white">
                {carts.length}
              </span>
          </li>
          </Link>


          <Navbar />

          {/* mobile nav functionality */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="cursor-pointer text-3xl lg:hidden"
          />

          <div className={`${navMobile ? "-right-0" : "-right-full"} toggle `}>
            <MobileNav setNavMobile={setNavMobile} />
          </div>

          {/* mobile nav ends */}
        </div>
      </div>
    </header>
  );
};

export default Header;
