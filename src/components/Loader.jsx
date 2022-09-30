import React from "react";
//components
import { Circles } from "react-loader-spinner";

const Loader = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <Circles
        height="80"
        width="80"
        color="red"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <h1 className="text-xl font-bold mt-3">{text}</h1>
    </div>
  );
};

export default Loader;
