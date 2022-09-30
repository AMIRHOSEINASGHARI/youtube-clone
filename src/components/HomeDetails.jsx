import React, { useState } from "react";
import { Link } from "react-router-dom";
//functions
import { reduceTitle, setViews } from "../services/functions";
//components
import { CgMediaLive } from "react-icons/cg";

const HomeDetails = (props) => {
  const [value, setValue] = useState(false);
  return (
    <div>
      {/* if there are any channel type in props,this section will return */}
      {props.type === "channel" && (
        <Link
          to={`/channel/${props.channel.channelId}`}
          className="flex items-center flex-col"
        >
          <div>
            <img
              className="rounded-full mb-5"
              src={props.channel.avatar[1].url}
              alt="avatar"
            />
          </div>
          <p>{props.channel.title}</p>
          <div className="flex flex-col items-center text-sm text-gray-400">
            <p>{props.channel.stats.subscribersText}</p>
            <p>{props.channel.stats.videos} videos</p>
          </div>
        </Link>
      )}
      {/* video types */}
      {props.type === "video" && (
        <div>
          <Link to={`/video/${props.video.videoId}`}>
            <img
              onMouseEnter={() => setValue(true)}
              onMouseLeave={() => setValue(false)}
              className="mb-3 cursor-pointer w-[350px]"
              src={
                props.video.movingThumbnails && value
                  ? props.video.movingThumbnails[0].url
                  : props.video.thumbnails[0].url
              }
            />
          </Link>
          <div className="flex h-[100px]">
            <Link to={`/channel/${props.video.author.channelId}`}>
              <img
                className="rounded-full w-8 h-8 mr-3 mt-1"
                src={props.video.author.avatar[0].url}
                alt="avatar"
              />
            </Link>
            <Link to={`/video/${props.video.videoId}`}>
              <p className="font-medium tracking-tight mb-1 max-w-[250px]">
                {reduceTitle(props.video.title)}
              </p>
              <div>
                <p className="text-[13px] text-gray-400 -mb-0.5">
                  {props.video.author.title}
                </p>
                <div className="flex text-[13px] text-gray-400">
                  {props.video.isLiveNow && (
                    <p className="bg-red-500 text-white flex items-center rounded-md w-fit px-1 mr-2">
                      <CgMediaLive className="mr-2" /> Live
                    </p>
                  )}
                  <p>
                    {props.video.isLiveNow
                      ? `${setViews(props.video.stats.viewers)} viewrs`
                      : `${setViews(props.video.stats.views)} views`}
                  </p>
                  {!props.video.isLiveNow && <span className="mx-1">/</span>}
                  <p>{props.video.publishedTimeText}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeDetails;
