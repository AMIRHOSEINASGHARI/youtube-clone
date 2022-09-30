import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//api functions
import { fetchSearch } from "../services/fetchFromAPI";
//components
import HomeDetails from "./HomeDetails";
import Loader from "./Loader";

const SearchedVideo = () => {
  const { searchTerm } = useParams();
  const [saerchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setSearchResult([]);
    const fetchData = async () => {
      setSearchResult(await fetchSearch(searchTerm));
    };
    fetchData();
  }, [searchTerm]);
  if (saerchResult.length === 0)
    return <Loader text={`Searching for ${searchTerm}...`} />;
  return (
    <div className="max-w-[1300px] mx-auto">
      <h1 className="text-2xl font-semibold p-3 text-center">
        Search result for <span className="text-red-600">"{searchTerm}"</span>
      </h1>
      <hr className="mx-3" />
      <div className="flex flex-col items-center p-4 md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-x-2.5 gap-y-3">
        {saerchResult.map((el, i) => (
          <HomeDetails key={i} {...el} />
        ))}
      </div>
    </div>
  );
};

export default SearchedVideo;
