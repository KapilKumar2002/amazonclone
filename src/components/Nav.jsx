import React from "react";
import {
  RoomOutlinedIcon,
  SearchRoundedIcon,
  AddShoppingCartIcon,
} from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <section className="w-full">
      <div className="bg-gray-900 flex justify-between items-center gap-5 max-sm:px-4 px-10 py-3">
        <div className="flex items-center gap-4 ">
          <h1 className="text-white font-montserrat font-bold max-sm:text-sm text-3xl">
            amazon
          </h1>
          <div className="flex items-end max-sm:hidden">
            <RoomOutlinedIcon className="invert" />
            <div className="text-base">
              <p className="text-white text-xs font-500 font-montserrat">
                Delivery to
              </p>
              <h2 className="text-white font-bold">Bharat</h2>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-10 max-sm:w-full w-[60%]  max-sm:h-10 h-12 bg-white pl-4 rounded-[5px] ">
          <input type="text" className="w-full outline-none" />
          <div className="flex justify-center items-center w-14 bg-yellow-600 h-full rounded-tr-[5px] rounded-br-[5px]">
            <SearchRoundedIcon />
          </div>
        </div>
        <div className="flex items-center gap-12 max-md:hidden ">
        <span title="Bharat">🇮🇳</span>
          <a href="/" className="text-white font-montserrat text-sm font-semibold underline">login</a>
          <div className="text-base">
            <p className="text-white text-xs font-500 font-montserrat">
              Returns
            </p>
            <h2 className="text-white text-sm font-bold">& Orders</h2>
          </div>
          <span className="flex items-end gap-1"><AddShoppingCartIcon className="invert" /><h1 className="font-bold text-sm text-white">Cart</h1></span>
        </div>
      </div>
      <div className=" h-10 px-10 bg-gray-700 flex items-center text-sm text-white max-sm:hidden  gap-10">
        {navLinks.map(e=> <a href={e.href}>{e.title}</a>)}
      </div>
    </section>
  );
};

export default Nav;
