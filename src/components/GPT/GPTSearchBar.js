import React from "react";
import { useSelector } from "react-redux";
import languageConstants from "../../utils/languageConstants";

const GPTSearchBar = () => {
  const selectedLanguage = useSelector(
    (store) => store.appConfig.preferredLanguage
  );

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={languageConstants[selectedLanguage].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg">
          {languageConstants[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
