import React, { useEffect, useState } from "react";
//components
import Sidebar from "./Sidebar";
import HomeDetails from "./HomeDetails";
import Loader from "./Loader";
//api functions
import { fetchSearch } from "../services/fetchFromAPI";

const Home = () => {
  const [homeVideos, setHomeVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  useEffect(() => {
    const fetchData = async () => {
      setHomeVideos(await fetchSearch(selectedCategory));
    };
    fetchData();
  }, [selectedCategory]);
  return (
    <div className="max-w-[1400px] mx-auto">
      <Sidebar setSelectedCategory={setSelectedCategory} />
      {homeVideos.length === 0 && <Loader text={"Loading Videos..."} />}
      {homeVideos.length !== 0 && (
        <div className="lg:pl-48 lg:pt-2 min-h-screen">
          <h1 className="px-4 mt-1 text-xl">
            <span className="font-bold text-red-500">{selectedCategory}</span>{" "}
            videos
          </h1>
          <div className="flex flex-col items-center p-4 md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-x-2.5 gap-y-3">
            {homeVideos.map((el, i) => (
              <HomeDetails key={i} {...el} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
