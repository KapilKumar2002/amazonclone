import {
  PushPinSharpIcon,
  CheckIcon,
  PaymentIcon,
  CheckCircleOutlineSharpIcon,
} from "../assets/icons";

import React from "react";
import { cardimg1 } from "../assets/images";

const ChannelCard = () => {
  return (
    <div className="z-20 relative h-[450px] w-full bg-white rounded-md border-yellow-500 border-2">
      <button className="z-10 absolute w-10 h-10 bg-white rounded-full rotate-[-45deg] m-1">
        <PushPinSharpIcon className="w-10 h-10 text-gray-700" />
      </button>
      <div className="h-[200px] w-ful relative">
        <img src={cardimg1} alt="" className="absolute w-full h-full" />
        <button className="absolute bg-yellow-500 px-4 py-2 rounded-tr-3xl bottom-0">
          {" "}
          <PaymentIcon /> VIP
        </button>
        <button className="bg-yellow-500 px-4 py-2  absolute right-0">
          PREMIUM
        </button>

        <button className="h-8 w-24 bg-green-500 rounded-2xl text-white absolute bottom-0 right-0 m-2">
          <CheckIcon /> pass
        </button>
      </div>
      <button className="w-full h-12 bg-yellow-500 absolute bottom-0">
        Buy Now
      </button>
      <div className="flex flex-col gap-1 items-center m-2">
        <h1 className="text-lg font-bold font-palanquin">
          <CheckCircleOutlineSharpIcon className="text-green-400" />
          PASSIVE INCOME 7.0
        </h1>
        <p className="text-slate-400 text-sm ">Movies & Music</p>
        <h1 className="text-2xl font-bold py-4">$ 156</h1>
        <p><span className="text-sm font-bold">100 00 000  </span> <span className="text-xs text-slate-500">-- Subscriber</span></p>
        <p><span className="text-md font-bold">$60 / month  </span> <span className="text-sm text-slate-500">-- income</span></p>
      </div>
    </div>
  );
};

export default ChannelCard;
