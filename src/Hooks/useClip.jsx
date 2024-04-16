import { useDispatch } from "react-redux";
import { addClip } from "../utils/movieSlice";
import { apiOptions } from "../utils/Constants";
import { useEffect } from "react";

const useClip = (id,type) => {
  const dispatch = useDispatch();
  const getTrailer = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`,
        apiOptions
      );

      const json = await data.json();
      dispatch(addClip(json?.results))
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };
  useEffect(() => {
    getTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
};

export default useClip;
