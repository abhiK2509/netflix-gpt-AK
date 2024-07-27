import { useSelector } from "react-redux";
import VideoBackground from "./Video/VideoBackground";
import VideoTitle from "./Video/VideoTitle";

const BrowseMainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const { id, original_title, overview } = movies[0];
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default BrowseMainContainer;
