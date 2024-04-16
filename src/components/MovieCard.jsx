/* eslint-disable react/prop-types */
import { IMG_URL } from "../utils/Constants";
import MoviePopUp from "./MoviePopUp";

const MovieCard = ({ posterPath,type}) => {

  return (
    <div className="w-40 md:w-44 pr-4 cursor-pointer">
      <img src={IMG_URL + posterPath} alt="poster" type={<MoviePopUp type={type}/>} />
    </div>
    
  );
};

export default MovieCard;

