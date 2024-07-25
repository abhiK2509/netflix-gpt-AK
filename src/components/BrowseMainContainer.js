import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const BrowseMainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if (!movies) return;

    const { id, original_title, overview } = movies[0];
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
};

export default BrowseMainContainer;