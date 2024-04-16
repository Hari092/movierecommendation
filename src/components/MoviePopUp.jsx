/* eslint-disable react/prop-types */
// import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import useClip from "../Hooks/useClip";
import { useSelector } from "react-redux";
import MovieDetails from "./MovieDetails";

// eslint-disable-next-line no-unused-vars
const MoviePopUp = ({ movieid }) => {
  const movieTrailer = useSelector((store) => store.movie.clip);

  const { id, type } = useParams();
  useClip(id, type);
  return (
    <div className="w-full bg-black h-dvh overflow-x-hidden">
      <Link to={"/browse"}>
        <button className="bg-violet-500 px-5 py-2 text-white  sm:mx-10 absolute">
          Home
        </button>
      </Link>
      <MovieDetails id={id} type={type} />
      <h1 className=" text-white inline-block px-2 text-lg sm:ms-10 bg-violet-600">
        ADD ON
      </h1>
      <div className="flex w-full overflow-x-auto no-scrollbar gap-4 ">
        {movieTrailer?.map((movie) => (
          <iframe
            key={movie?.id}
            className=" h-52 w-80 ms-10"
            src={`https://www.youtube.com/embed/${movie?.key}?&autoplay=0&mute=0&amp;controls=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default MoviePopUp;
