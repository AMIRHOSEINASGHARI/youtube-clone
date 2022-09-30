import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//api functions
import { fetchVideo } from "../services/fetchFromAPI";
//components
import ReactPlayer from "react-player";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Loader from "./Loader";
//functions
import { reduceTitle, setViews } from "../services/functions";

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
  if (!videoDetails) return <Loader text={"Loading Video..."} />;
  if (!videoRelatedContents)
    return <Loader text={"Loading Related Videos..."} />;
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
      <div className="px-3 mt-8 mb-3">
        <hr />
        <p className="font-semibold text-2xl capitalize">related videos</p>
        <hr />
      </div>
      <div className="flex items-center flex-col">
        <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-2 gap-y- p-3">
          {videoRelatedContents.map((el, i) => {
            if (el.type === "video") {
              const {
                author,
                publishedTimeText,
                stats,
                thumbnails,
                title,
                videoId,
              } = el.video;
              return (
                <Link to={`/video/${videoId}`} key={i} className="">
                  <img
                    className="w-[290px] cursor-pointer"
                    src={thumbnails[1].url}
                    alt={title}
                  />
                  <div className="h-[110px] w-[290px]">
                    <p className="font-semibold">{reduceTitle(title)}</p>
                    <div className="flex items-center">
                      <p className="text-gray-500 text-sm">{author.title}</p>
                      <BsFillCheckCircleFill className="fill-gray-400 ml-1 text-sm" />
                    </div>
                    <p className="text-gray-500 text-sm">
                      {setViews(stats.views)} views / {publishedTimeText}
                    </p>
                  </div>
                </Link>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Video;
