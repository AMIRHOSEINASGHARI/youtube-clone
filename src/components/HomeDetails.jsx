import React from "react";
import { Link } from "react-router-dom";

const HomeDetails = (props) => {
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
    </div>
  );
};

export default HomeDetails;
