import { useSelector } from "react-redux"
import VideoBg from "./VideoBg"
import VideoTitle from "./VideoTitle"

const VideoContainer = () => {
    
    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies) return;

    const movieToPlay = movies[1];
    const {original_title, overview, id} = movieToPlay
    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBg id={id}/>
        </div>
    )
}

export default VideoContainer


