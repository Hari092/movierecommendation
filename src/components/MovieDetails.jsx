/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import useMovieDetails from "../Hooks/useMovieDetails";
import { IMG_URL } from "../utils/Constants";
import CasteAndCrew from "./CasteAndCrew";

const MovieDetails = ({ id, type }) => {
  useMovieDetails(id, type);
  const movieDetails = useSelector((store) => store.movie.movieDetails);
  console.log(movieDetails?.runtime);
  return (
    <div className="flex w-full justify-between my-10 text-white">
      <div className="sm:w-1/4 sm:ps-10 w-32 hidden sm:block">
        <img
          src={IMG_URL + movieDetails?.poster_path}
          alt="bg"
          className="sm:h-96 h-48"
        />
      </div>
      <div className="sm:w-3/4 sm:px-5 px-2">
        <h1 className="font-bold sm:text-5xl text-2xl">
          {movieDetails?.original_title || movieDetails?.name}
          <span className="text-sm">{movieDetails?.original_language}</span>
        </h1>
        <p className="font-bold sm:text-xl text-base py-2 w-64 sm:w-auto">{movieDetails?.release_date}{" "}-Runtime:{(movieDetails?.runtime/60).toFixed(1)}hrs</p>
        <p className="font-bold sm:text-xl text-base py-2 w-64 sm:w-auto">
          18+:{movieDetails?.adult === false ? "False" : "True"} - Genere:{" "}
          {movieDetails?.genres.map((genre) => (
            <span key={genre.id}>
              {genre.name}
              {"   "}
            </span>
          ))}
        </p>
        <h3 className="text-sm sm:text-xl w-64 ">{movieDetails?.tagline}</h3>
        <h2 className="sm:w-11/12 sm:font-semibold sm:text-sm text-xs w-72">
          {movieDetails?.overview}
        </h2>
        <div>
          <CasteAndCrew type={type} id={id} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
