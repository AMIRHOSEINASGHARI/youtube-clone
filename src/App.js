import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
//components
import Home from "./components/Home";
import Header from "./components/Header";
import ChannelDetails from "./components/ChannelDetails";
import Video from "./components/Video";
import SearchedVideo from "./components/SearchedVideo";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="/search/:searchTerm" element={<SearchedVideo />} />
      </Routes>
    </>
  );
};

export default App;
