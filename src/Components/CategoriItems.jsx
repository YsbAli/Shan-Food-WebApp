import React from "react";
import { categories } from "../Data/data";

const CategoriItems = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-5">
      <h1 className="text-orange-600 bg-red-200 py-3 font-bold text-4xl text-center">
        Check Our Best Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((items) => (
          <div
            key={items.id}
            className="bg-gray-200 p-4 flex justify-between items-center rounded-lg"
          >
            <h2 className="font-bold sm:text-lg">{items.name}</h2>
            <img
              className="w-20 hover:-translate-y-1 hover:scale-150 duration-300"
              src={items.image}
              alt={items.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriItems;
