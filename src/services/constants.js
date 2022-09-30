import { AiFillHome } from "react-icons/ai";
import { BsCode, BsMusicNote } from "react-icons/bs";
import { MdCastForEducation, MdMovie, MdTheaterComedy } from "react-icons/md";
import { BiPodcast, BiMobileVibration } from "react-icons/bi";
import { CgGames, CgGym } from "react-icons/cg";
import { RiLiveLine } from "react-icons/ri";
import { GiTransportationRings, GiClothes } from "react-icons/gi";
import { TbDeviceLaptop } from "react-icons/tb";

const categories = [
  { name: "New", icon: <AiFillHome /> },
  { name: "Coding", icon: <BsCode /> },
  { name: "Javascript", icon: <BsCode /> },
  { name: "Python", icon: <BsCode /> },
  { name: "SmartPhone", icon: <BiMobileVibration /> },
  { name: "LapTop", icon: <TbDeviceLaptop /> },
  { name: "Music", icon: <BsMusicNote /> },
  { name: "Education", icon: <MdCastForEducation /> },
  { name: "Podcast", icon: <BiPodcast /> },
  { name: "Movie", icon: <MdMovie /> },
  { name: "Gaming", icon: <CgGames /> },
  { name: "Live", icon: <RiLiveLine /> },
  { name: "Sport", icon: <GiTransportationRings /> },
  { name: "Fashion", icon: <GiClothes /> },
  { name: "Comedy", icon: <MdTheaterComedy /> },
  { name: "Gym", icon: <CgGym /> },
];

export { categories };
