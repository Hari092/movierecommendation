import { useEffect } from "react";
import { apiOptions } from "../utils/Constants";
import { addMovieTrailer } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const MovieJumbotronTrailer = (movieid) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movie.movieTrailer);
  const getTrailer = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
        apiOptions
      );

      const json = await data.json();
      const filterTrailer = json.results.filter(
        (a) => a.type === "Trailer" && a.name === "Official Trailer"
      );
      const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];

      if (trailer) {
        dispatch(addMovieTrailer(trailer));
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };
  useEffect(() => {
    !trailer && getTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default MovieJumbotronTrailer;
