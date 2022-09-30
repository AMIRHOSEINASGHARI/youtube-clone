import React, { useState } from "react";
//constant file for sidebar
import { categories } from "../services/constants";

const Sidebar = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex overflow-auto py-3 mx-4 bg-white lg:mx-2 lg:fixed lg:top-18 lg:pt-2 lg:pb-0 lg:pr-3 lg:h-[87vh] lg:block lg:border-r">
      {categories.map((el, i) => {
        const { icon, name } = el;
        return (
          <div
            onClick={() => {
              setIndex(i);
            }}
            key={i}
            className={`flex items-center cursor-pointer hover:bg-gray-200 w-fit mx-0.5 bg-gray-100 transition-all duration-150 ${
              index === i && "bg-gray-200"
            } rounded-full py-0.5 px-2.5 text-sm lg:mb-3 lg:text-lg lg:bg-transparent`}
          >
            <div className="mr-2">{icon}</div>
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
