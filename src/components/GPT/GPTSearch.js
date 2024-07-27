import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { PAGE_BACKGROUND_IMG } from "../../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen md:h-auto object-cover" src={PAGE_BACKGROUND_IMG} alt="body-background" />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
