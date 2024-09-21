import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoContainer from "./VideoContainer";
import RecommendationContainer from "./RecommendationContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import SearchMovies from "./SearchMovies";
const Browse = () => {
  // Fetch data from TMDB API and update store using custom hook
  const getSearchView = useSelector((store) => store.search.showSearchView);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {getSearchView ? (
        <SearchMovies />
      ) : (
        <>
          <VideoContainer />
          <RecommendationContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
