import { useSelector } from "react-redux";
import { YOUTUBE_EMBED_URL_PREFIX } from "../../../utils/constants";
import { useMovieTrailer } from "../../../customHooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`${YOUTUBE_EMBED_URL_PREFIX}${trailerVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
