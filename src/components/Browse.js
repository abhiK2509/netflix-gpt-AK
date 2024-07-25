import Header from "./Header";
import BrowseMainContainer from "./BrowseMainContainer";
import BrowseSecondaryContainer from "./BrowseSecondaryContainer";
import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies";
import { usePopularMovies } from "../customHooks/usePopularMovies";
import { useTopRatedMovies } from "../customHooks/useTopRatedMovies";
import { useUpcomingMovies } from "../customHooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <BrowseMainContainer />
      <BrowseSecondaryContainer />
    </div>
  );
};

export default Browse;
