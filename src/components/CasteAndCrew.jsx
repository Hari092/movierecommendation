/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import useCasteAndCrew from "../Hooks/useCasteAndCrew";
import { IMG_URL, dummyImg } from "../utils/Constants";

const CasteAndCrew = ({ id, type }) => {
  const castAndCrew = useSelector((store) => store.movie.caste);
  useCasteAndCrew(id, type);
  return (
    <div className="font-bold">
      <h1 className="text-2xl py-2">Cast</h1>
      <div className="sm:flex overflow-x-auto no-scrollbar flex">
        {castAndCrew?.map((cast) => (
          <div key={cast.id} className="sm:flex-shrink-0 w-40 flex flex-col pe-2">
            <img
              alt="cast"
              src={
                cast?.profile_path !== null
                  ? IMG_URL + cast?.profile_path
                  : dummyImg
              }
              className="h-40 w-full sm:h-44"
            />
            <h1 className="text-xs mt-2 truncate">{cast?.original_name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasteAndCrew;
