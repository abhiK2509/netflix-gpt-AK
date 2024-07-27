import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import languageConstants from "../../utils/languageConstants";
import openAI from "../../utils/openAI";
import {
  API_OPTIONS,
  TMDB_FETCH_MOVIE_URL_PREFIX,
} from "../../utils/constants";
import { addGPTMovieResult } from "../../redux/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (store) => store.appConfig.preferredLanguage
  );
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `${TMDB_FETCH_MOVIE_URL_PREFIX}${movie}`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    //Temporary commented the openAI API, pending to pay for credit limit. So tested with sample dataset.

    // const gptResults = await openAI.chat.completions.create({
    //   messages: [{ role: "assistant", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // if (!gptResults.choices) {
    //   //TODO: Error Handling
    // }

    // console.log(gptResults.choices?.[0]?.message.content);
    // const gptMovies = gptResults.choices?.[0]?.message.content.split(","); //Example: ["Andaz Apna Apna","Hera Pheri","Chupke Chupke","Jaane Bhi Do Yaaro","Padosan"]

    const sampleData = [
      "Andaz Apna Apna",
      "Hera Pheri",
      "Chupke Chupke",
      "Jaane Bhi Do Yaaro",
      "Padosan",
    ];
    const promiseArray = sampleData.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGPTMovieResult({ movieNames: sampleData, movieList: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-8 md:col-span-9 rounded-lg"
          placeholder={languageConstants[selectedLanguage].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 col-span-4 md:col-span-3 bg-red-700 text-white rounded-lg"
          onClick={() => handleGPTSearchClick()}
        >
          {languageConstants[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
