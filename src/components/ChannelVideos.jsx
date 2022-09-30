import React, { useState } from "react";
import { Link } from "react-router-dom";
//components
import { CgMediaLive } from "react-icons/cg";
//functions
import { newReduceTitle, setViews } from "../services/functions";

const ChannelVideos = ({
  isLiveNow,
  movingThumbnails,
  publishedTimeText,
  stats,
  thumbnails,
  title,
  videoId,
}) => {
  const [value, setValue] = useState(false);
  return (
    <Link
      to={`/video/${videoId}`}
      onMouseEnter={() => setValue(true)}
      onMouseLeave={() => setValue(false)}
    >
      <img
        className="w-[290px] cursor-pointer"
        src={
          movingThumbnails && value
            ? movingThumbnails[0].url
            : thumbnails[0].url
        }
        alt={videoId}
      />
      <div className="w-[210px]">
        <p className="font-medium my-1">{newReduceTitle(title)}</p>
        <div className="flex text-[13px] text-gray-400">
          {isLiveNow && (
            <p className="bg-red-500 text-white flex items-center rounded-md w-fit px-1 mr-2">
              <CgMediaLive className="mr-2" /> Live
            </p>
          )}
          <p className="">
            {isLiveNow
              ? `${setViews(stats.viewers)} viewrs`
              : `${setViews(stats.views)} views`}
          </p>
          {!isLiveNow && <span className="mx-1">/</span>}
          <p>{publishedTimeText}</p>
        </div>
      </div>
    </Link>
  );
};

export default ChannelVideos;
