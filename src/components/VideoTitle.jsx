/* eslint-disable react/prop-types */
import { IoPlaySharp } from "react-icons/io5";
import { GoInfo } from "react-icons/go";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bg-gradient-to-r from-black text-white ps-2 md:bottom-16 md:left-0 ">
      <h1 className="mt-12 md:mt-1 font-bold md:font-extrabold text-base md:text-2xl md:my-1">
        {title}
      </h1>
      <p className="hidden md:block w-1/3 md:text-sm">{overview}</p>
      <div className="md:flex gap-2 hidden md:my-2 text-sm font-medium ">
        <button className="flex gap-1 border-1 border-white border  rounded-sm py-1 px-5 bg-slate-300 text-black">
          <IoPlaySharp className="mt-1" />
          PLAY
        </button>
        <button className="flex gap-1  text-black   rounded-sm bg-slate-500 py-1 px-5">
          <GoInfo className="mt-1" />
          MORE INFO
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
