import React, { useState } from "react";
import { data } from "../Data/data";

const DetailsFood = () => {
  const [foodData, setFoodData] = useState(data);

  const FilterType = (type) => {
    setFoodData(
      data.filter((items) => {
        return items.category === type;
      })
    );
  };
  const FilterPrice = (Filterprice) => {
    setFoodData(
      data.filter((items) => {
        return items.price === Filterprice;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-10">
      <h1 className="text-orange-600 bg-red-200 py-3 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Filter Section */}
      <div className="flex flex-col mt-3 lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700 text-xl">Filter Type</p>
          <div className="flex flex-wrap justify-between gap-3 mt-3 active:text-orange-800">
            <button
              onClick={() => setFoodData(data)}
              className="border-orange-600 text-orange-500 active:bg-orange-700 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>

            <button
              onClick={() => FilterType("burger")}
              className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => FilterType("pizza")}
              className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => FilterType("salad")}
              className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => FilterType("chicken")}
              className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* Filtered Price */}
        <div>
          <p className="font-bold text-gray-700 text-xl">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full gap-3 mt-3">
            <button
              onClick={() => FilterPrice("$")}
              className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => FilterPrice("$$")}
              className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => FilterPrice("$$$")}
              className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => FilterPrice("$$$$")}
              className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Food Card section */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foodData.map((items, i) => (
          <div
            key={i}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={items.image}
              alt={items.name}
              className="h-[230px] w-full object-cover rounded-t-lg"
            />
            <div className="flex justify-between p-3">
              <p className="font-bold">{items.name}</p>
              <p>
                <span className="font-medium text-white rounded-full bg-orange-500 p-1">
                  {items.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsFood;
