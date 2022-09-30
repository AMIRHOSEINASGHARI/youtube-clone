import React from "react";
import { Link, useNavigate } from "react-router-dom";
//assets
import logo from "../assets/youtube.png";
//components
import { CgSearch } from "react-icons/cg";

const Header = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  const changeHandler = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  const clickHandler = () => {
    if (searchTerm !== "" && searchTerm !== " ") {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <div className="w-full border-b bg-white sticky top-0 z-10">
      <div className="flex items-center justify-between py-3 px-4 max-w-[1400px] mx-auto">
        <Link to={`/`}>
          <img className="w-10" src={logo} alt="logo" />
        </Link>
        <div className="flex items-center">
          <input
            className="bg-gray-100 rounded-md border py-1 px-2 outline-none placeholder:text-gray-300 md:w-[300px] lg:w-[350px]"
            type="text"
            value={searchTerm}
            onChange={changeHandler}
            placeholder="Search..."
          />
          <div
            onClick={clickHandler}
            className="bg-gray-100 p-2 rounded-md border ml-2 cursor-pointer hover:bg-gray-200 transition-all duration-150"
          >
            <CgSearch className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
