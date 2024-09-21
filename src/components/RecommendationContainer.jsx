import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const RecommendationContainer = () => {
  const movieList = useSelector((store) => store.movies);
  if (!movieList) return;

  return (
    <div className="bg-black">
      <div className="pl-12 -mt-52 relative z-20">
        <MovieList title={"Now Playing"} movies={movieList?.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movieList?.upcomingMovies} />
        <MovieList title={"Popular"} movies={movieList?.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movieList?.topRatedMovies} />
        
      </div>
    </div>
  );
};

export default RecommendationContainer;
