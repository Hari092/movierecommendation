/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { addCasteAndCrew } from "../utils/movieSlice";
import { apiOptions } from "../utils/Constants";

const useCasteAndCrew = (id, type) => {
//   const casteStore = useSelector((store) => store.movie.caste);
  const dispatch = useDispatch();
  const getCaste = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`,
      apiOptions
    );
    const json= await data.json();
    dispatch(addCasteAndCrew(json.cast));
  };
  useEffect(() => {
   getCaste();
  }, []);
}

export default useCasteAndCrew;
