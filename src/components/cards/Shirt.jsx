import React from "react";
import { toast } from "react-hot-toast";

const Shirt = ({ prod }) => {
  return (
    <div
      className="filter-item p-5 md:p-2 w-full md:w-1/2 lg:w-1/3 z-10 cursor-pointer"
      id="product"
    >
      <div
        className="relative group"
        onClick={() =>
          toast(`Interested in ${prod.title}? Send me a messge below!`)
        }
      >
        <img
          src={prod.images[1].src}
          alt={`${prod.title} (back)`}
          className="w-full absolute rounded-lg opacity-0 group-hover:opacity-100 transition duration-200"
        />
        <img
          src={prod.images[0].src}
          alt={`${prod.title} (front)`}
          className="w-full rounded-lg"
        />
        <div className="absolute top-0 text-black uppercase text-sm w-fit p-2 tracking-widest">
          <div className="scale-x-0 w-full group-hover:scale-x-100 transition duration-200 origin-left h-1 bg-black "></div>
          {prod.title}
          <div className="scale-x-0 w-full group-hover:scale-x-100 transition duration-200 origin-left h-1 bg-black "></div>
        </div>
        <div className="absolute bottom-0 right-0 text-black translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-200 text-sm p-2">
          Interested? Send me a message below!
        </div>
      </div>
    </div>
  );
};

export default Shirt;
