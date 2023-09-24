import React from "react";

const CategoryCard = ({ title, imgURL }) => {
  return (
    <div
      key={imgURL}
      className="bg-white shadow-lg py-6 px-4 flex flex-col justify-between max-sm:gap-2 gap-4 max-sm:h-56 h-92 w-full"
    >
      <h1 className="flex justify-between font-montserrat text-lg max-lg:text-md max-sm:text-xs font-bold ">
        {title}
      </h1>
      <div className="h-60 max-sm:h-40 flex flex-col gap-2 justify-between">
        <img
          src={imgURL}
          alt=""
          className="h-56 max-sm:h-28  w-full max-sm:object-contain object-cover"
        />
        <a href="/" className="text-blue-400 text-sm hover:text-red-400">
          show more
        </a>
      </div>
    </div>
  );
};

export default CategoryCard;
