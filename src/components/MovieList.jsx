/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ movies, title, type }) => {
  return (
    <div className="px-6 w-screen z-20 overflow-x-hidden ">
      <h1 className="sm:text-2xl text-xl  font-bold py-1">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex flex-warp ">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <Link to={`/popup/${movie.id}/${type}`} key={movie.id}>
                <MovieCard
                  posterPath={movie.poster_path}
                  movieid={movie.id}
                  type={type}
                />
              </Link>
            ))
          ) : (
            <div className="no-movies">No movies available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
