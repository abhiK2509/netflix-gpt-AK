import Header from "./Header";
import BrowseMainContainer from "./BrowseMainContainer";
import BrowseSecondaryContainer from "./BrowseSecondaryContainer";
import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies";

const Browse = () => {
    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <BrowseMainContainer/>
            <BrowseSecondaryContainer/>
        </div>
    )
};

export default Browse;