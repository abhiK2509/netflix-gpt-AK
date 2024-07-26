import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { PAGE_BACKGROUND_IMG } from "../../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={PAGE_BACKGROUND_IMG}
          alt="body-background"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
