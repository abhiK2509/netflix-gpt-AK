import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_URL_PREFIX } from "../utils/constants";
import { addTrailerVideo } from "../redux/movieSlice";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `${TMDB_URL_PREFIX}${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterTrailerData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailerData.length
      ? filterTrailerData[0]
      : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
