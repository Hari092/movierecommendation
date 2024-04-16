/* eslint-disable react/no-unknown-property */
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

// eslint-disable-next-line react/prop-types
const VideoBackground = ({ movieid }) => {
  const movieTrailer = useSelector((store) => store.movie.movieTrailer);
  useMovieTrailer(movieid);
  return (
    <div className=" overflow-x-hidden">
      <iframe
        className="w-full  md:h-svh mt-12 md:mt-0 aspect-video overflow-x-hidden"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?&autoplay=1&mute=0&amp;controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
