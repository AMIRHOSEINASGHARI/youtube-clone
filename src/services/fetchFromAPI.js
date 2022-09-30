import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";

const fetchSearch = async (value) => {
  const response = await axios.get(`${BASE_URL}/search/`, {
    params: {
      q: value,
      hl: "en",
      gl: "US",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  });
  return response.data.contents;
};

const fetchChannel = async (id) => {
  const videosResponse = await axios.get(`${BASE_URL}/channel/videos/`, {
    params: { id: id, hl: "en", gl: "US" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  });
  const detailsResponse = await axios.get(`${BASE_URL}/channel/details/`, {
    params: { id: id, hl: "en", gl: "US" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  });
  const data = {
    channelVideos: videosResponse.data.contents,
    channelDetails: detailsResponse.data,
  };
  return data;
};

const fetchVideo = async (id) => {
  const videoDetails = await axios.get(`${BASE_URL}/video/details/`, {
    params: { id: id, hl: "en", gl: "US" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  });
  const videoRelatedContents = await axios.get(
    `${BASE_URL}/video/related-contents/`,
    {
      params: { id: id, hl: "en", gl: "US" },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    }
  );
  const data = {
    videoDetails: videoDetails.data,
    videoRelatedContents: videoRelatedContents.data.contents,
  };
  return data;
};

export { fetchSearch, fetchChannel, fetchVideo };
