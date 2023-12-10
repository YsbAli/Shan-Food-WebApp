import React from "react";

const Card = ({ title, text, img }) => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative ">
        {/* Overlay */}
        <div className="absolute text-white w-full h-full bg-black/50 rounded-xl ">
          <p className="font-bold text-2xl px-2 pt-2">Best Food Of India</p>
          {/* <p className="font-bold text-2xl px-2 pt-2">{title}</p> */}
          <p className="px-2">Don't be late</p>
          {/* <p className="px-2">{text}</p> */}
          <button className="border-white bg-white font-bold text-black mx-2 absolute bottom-4 transition-scale hover:scale-110 duration-150">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/5531154/pexels-photo-5531154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute text-white w-full h-full bg-black/50 rounded-xl">
          <p className="font-bold text-2xl px-2 pt-2">Best Food Of Kolkata</p>
          {/* <p className="font-bold text-2xl px-2 pt-2">{title}</p> */}
          <p className="px-2">New Restaurants</p>
          {/* <p className="px-2">{text}</p> */}
          <button className="border-white bg-white font-bold text-black mx-2 absolute bottom-4 transition-scale hover:scale-110 duration-150">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1001773/pexels-photo-1001773.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute text-white w-full h-full bg-black/50 rounded-xl">
          <p className="font-bold text-2xl px-2 pt-2">Best Streat Food South</p>
          {/* <p className="font-bold text-2xl px-2 pt-2">{title}</p> */}
          <p className="px-2">Want to taste</p>
          {/* <p className="px-2">{text}</p> */}
          <button className="border-white bg-white font-bold text-black mx-2 absolute bottom-4 transition-scale hover:scale-110 duration-150">
            Order Now
          </button>
        </div>
        +
        <img
          className="max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
