import { apiOptions } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  addTopMovies } from "../utils/movieSlice";

const useTopMovies = () => {
  const dispatch = useDispatch();

  const top =useSelector((store)=>store.movie.topMovies);

  const topMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      apiOptions
    );
    const json = await data.json();

    dispatch(addTopMovies(json.results));
  };
  useEffect(() => {
   !top && topMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTopMovies;