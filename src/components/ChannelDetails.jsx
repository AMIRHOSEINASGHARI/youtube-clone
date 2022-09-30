import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//api functions
import { fetchChannel } from "../services/fetchFromAPI";
//components
import { IoIosArrowRoundBack } from "react-icons/io";
import ChannelVideos from "./ChannelVideos";

const ChannelDetails = () => {
  const { id } = useParams();
  const [{ channelDetails, channelVideos }, setChannelData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      setChannelData(await fetchChannel(id));
    };
    fetchData();
  }, [id]);
  if (!channelDetails) return "Loading...";
  return (
    <div className="max-w-[1200px] mx-auto">
      <div>
        {channelDetails.banner && (
          <img
            className="w-full"
            src={channelDetails.banner.desktop[1].url}
            alt="banner"
          />
        )}
        <div className="flex items-center lg:flex-col my-5 mx-3">
          <img
            className="rounded-full w-10 md:w-14 lg:w-24 mr-3 lg:mr-0 lg:mb-2"
            src={channelDetails.avatar[2].url}
            alt=""
          />
          <div className="text-gray-400 tracking-tight lg:text-center">
            <h6 className="-mb-1">{channelDetails.title}</h6>
            <p>{channelDetails.stats.subscribersText}</p>
          </div>
        </div>
        <div className="mx-3">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-500 capitalize">videos</h1>
            <Link
              to={`/`}
              className="flex items-center capitalize font-semibold text-gray-500"
            >
              <IoIosArrowRoundBack className="text-2xl" /> back to site
            </Link>
          </div>
          <hr className="mt-1 mb-5" />
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-x-2 gap-y-8">
              {channelVideos.map((el, i) => (
                <ChannelVideos key={i} {...el.video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelDetails;
