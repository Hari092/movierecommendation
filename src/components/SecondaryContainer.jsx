import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movieData = useSelector((store) => store.movie);
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <MovieList title={"Now Playing"} movies={movieData?.nowPlayingMovies} type={"movie"} />
      <MovieList title={"Popular Movies"} movies={movieData?.popularMovies} type={"movie"}/>
      <MovieList title={"Top Rated"} movies={movieData?.topMovies} type={"movie"}/>
      <MovieList title={"Up Coming"} movies={movieData?.upComingMovies} type={"movie"} />
      <MovieList title={"Top Series"} movies={movieData?.topSeries} type={"tv"} />
    </div>
  );
};

export default SecondaryContainer;
