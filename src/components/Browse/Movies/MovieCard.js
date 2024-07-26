import React from "react";
import { TMDB_IMAGE_URL_PREFIX } from "../../../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return;

  return (
    <div className="w-48 pr-4">
      <img src={`${TMDB_IMAGE_URL_PREFIX}w500/${poster_path}`} />
    </div>
  );
};

export default MovieCard;
