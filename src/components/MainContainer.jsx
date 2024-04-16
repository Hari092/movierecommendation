import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const Container = () => {
  const nowPlaying = useSelector((store) => store.movie?.nowPlayingMovies);


  if (!nowPlaying) {
    return;
  }

  const mainMovie = nowPlaying[0];

  const { id, original_language, original_title, overview } = mainMovie;

  return (
    <div>
      <VideoTitle
        title={original_title}
        overview={overview}
        lang={original_language}
      />
      <VideoBackground movieid={id} />
    </div>
  );
};
export default Container;
