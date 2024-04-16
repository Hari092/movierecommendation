import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Container from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopMovies from "../Hooks/useTopMovies";
import useUpComingMovies from "../Hooks/useUpComingMovies";
import useTopSeries from "../Hooks/useTopSeries";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import MoviePopUp from "./MoviePopUp";

const Browse = () => {
  const gpt = useSelector((store) => store.gpt.showGPT);
  const movieinfo = useSelector((store) => store.movieinfo.toggleMovieInfo);
  useNowPlayingMovies();
  usePopularMovies();
  useTopMovies();
  useUpComingMovies();
  useTopSeries();
  return (
    <div className="flex justify-between overflow-x-hidden ">
      <div>
        <Header />
        {gpt ? (
          <GPTSearch />
        ) : (
          <>
            <Container />
            <SecondaryContainer />
          </>
        )}
        {movieinfo ? (
          <>
            <Header />
            <MoviePopUp />
          </>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default Browse;
