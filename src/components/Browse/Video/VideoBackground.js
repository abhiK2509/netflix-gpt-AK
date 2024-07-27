import { useSelector } from "react-redux";
import { YOUTUBE_EMBED_URL_PREFIX } from "../../../utils/constants";
import { useMovieTrailer } from "../../../customHooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={`${YOUTUBE_EMBED_URL_PREFIX}${trailerVideo?.key}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
        disablekb="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
