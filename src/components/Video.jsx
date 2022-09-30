import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//api functions
import { fetchVideo } from "../services/fetchFromAPI";
//components
import ReactPlayer from "react-player";
//functions
import { reduceTitle } from "../services/functions";

const Video = () => {
  const { id } = useParams();
  const [{ videoDetails, videoRelatedContents }, setVideo] = useState({});
  const [more, setMore] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setVideo(await fetchVideo(id));
    };
    fetchData();
  }, [id]);
  if (!videoDetails) return "Loading...";
  if (!videoRelatedContents) return "Loading...";
  const { description, publishedDate, stats, title, videoId } = videoDetails;
  return (
    <div className="max-w-[1200px] mx-auto">
      <div>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={`https://www.youtube.com/watch?v=${videoId}`}
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            pip={true}
          />
        </div>
        <div className="my-2 px-3">
          <p className="mb-1 font-semibold text-lg">{title}</p>
          <p className="text-gray-500 text-sm">
            {stats.views.toLocaleString()} views / {publishedDate}
          </p>
          <p className="text-gray-500 text-sm">
            {stats.likes.toLocaleString()} Likes /{" "}
            {stats.comments.toLocaleString()} Comments
          </p>
        </div>
        <div className={`px-3 lg:w-3/5 ${!more && "flex"}`}>
          <p>{more ? description : reduceTitle(description)}</p>
          <button
            className="bg-transparent text-blue-500"
            onClick={() => setMore(!more)}
          >
            {more ? "less" : "more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
