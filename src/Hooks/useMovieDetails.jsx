import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../utils/movieSlice";
import { apiOptions } from "../utils/Constants";

const useMovieDetails = ( id, type ) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const getMovieDetails = async () => {
    try {
      setIsLoading(true);
      const baseUrl = "https://api.themoviedb.org/3/";

      if (!type) {
        throw new Error("Missing movie type");
      }

      const url = new URL(`${baseUrl}${type}/${id}`);
      url.searchParams.append("language", "en-US");

      const data = await fetch(url, apiOptions);
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await data?.json();
      dispatch(addMovieDetails(json));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setError(error); 
    }
  };

  useEffect(() => {
    getMovieDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); 

  return {
    isLoading,
    error,
  };
};

export default useMovieDetails;
