import { apiOptions } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopSeries } from "../utils/movieSlice";

const useTopSeries = () => {
  const dispatch = useDispatch();
  const series =useSelector((store)=>store.movie.topSeries)
  const topSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
      apiOptions
    );
    const json = await data.json();
    dispatch(addTopSeries(json.results));
  };
  useEffect(() => {
   !series && topSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTopSeries;