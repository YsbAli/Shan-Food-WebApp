import React, { useState } from "react";

import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  // const [delivery, setDelivery] = useState(false);

  const HandleNav = (state) => {
    setShowNav(!state);
  };
  // const HandleDel = (state) => {
  //   setDelivery(!state);
  // };

  return (
    <>
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
        {/* left side Starts here*/}
        <div className="flex items-center">
          <div className="cursor-pointer">
            <AiOutlineMenu onClick={() => HandleNav(showNav)} size={30} />
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl px-3">
            Shan <span className="font-bold">Food</span>
          </h1>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer">
            <p className="bg-black text-white rounded-full p-2">Delivery</p>
            <p className="p-2">Pickup</p>
          </div>
        </div>
        {/* Search */}
        <div className="flex bg-gray-200 rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={20} />
          <input
            className="bg-transparent w-full p-2 focus:outline-none"
            type="text"
            placeholder="Search Food here..."
          />
        </div>
        {/* Cart */}
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
          <BsFillCartFill className="mr-2" size={18} />
          Cart
        </button>

        {/*  This section is for mobile menu */}

        {/*  Overlay */}
        {showNav ? (
          <div className="w-full h-screen z-10 top-0 left-0 bg-black/80 fixed "></div>
        ) : null}

        {/* Sidebar Menu*/}

        <div
          className={
            showNav
              ? "w-[300px] h-screen fixed top-0 left-0 bg-white z-10 duration-300"
              : "w-[300px] h-screen fixed top-0 left-[-100%] bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => HandleNav(showNav)}
            size={30}
            className="cursor-pointer absolute right-4 top-4"
          />
          <h2 className="text-2xl p-4 cursor-pointer">
            Shan <span className="font-bold">Food</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-5 cursor-pointer text-gray-800 ">
              <li className="flex text-xl py-2  hover:bg-gray-300 rounded-xl">
                <TbTruckDelivery size={25} className="mr-4" /> Order
              </li>
              <li className="flex text-xl py-2  hover:bg-gray-300 rounded-xl">
                <MdFavorite size={25} className="mr-4" /> Wish List
              </li>
              <li className="flex text-xl py-2  hover:bg-gray-300 rounded-xl">
                <FaWallet size={25} className="mr-4" /> Wallet
              </li>
              <li className="flex text-xl py-2  hover:bg-gray-300 rounded-xl">
                <MdHelp size={25} className="mr-4" /> Help
              </li>
              <li className="flex text-xl py-2  hover:bg-gray-300 rounded-xl">
                <AiFillTag size={25} className="mr-4" /> Promotion
              </li>
              <li className="flex text-xl py-2  hover:bg-gray-300 rounded-xl">
                <BsFillSaveFill size={25} className="mr-4" /> Best Ones
              </li>
              <li className="flex text-xl py-2  hover:bg-gray-300 rounded-xl">
                <FaUserFriends size={25} className="mr-4" /> Invite Friends
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
