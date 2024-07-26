import { useSelector } from "react-redux";
import Header from "../Header";
import BrowseMainContainer from "./BrowseMainContainer";
import BrowseSecondaryContainer from "./BrowseSecondaryContainer";
import { useNowPlayingMovies } from "../../customHooks/useNowPlayingMovies";
import { usePopularMovies } from "../../customHooks/usePopularMovies";
import { useTopRatedMovies } from "../../customHooks/useTopRatedMovies";
import { useUpcomingMovies } from "../../customHooks/useUpcomingMovies";
import GPTSearch from "../GPT/GPTSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <BrowseMainContainer />
          <BrowseSecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
