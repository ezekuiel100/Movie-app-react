import MovieList from "../Components/MovieList";
import { useEffect } from "react";

function Home({ movieList, setMovieList, queryMovie }) {
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=eaa35fd1cb193de2f116b5c1af778740`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  }, [setMovieList]);

  return (
    <div>
      {queryMovie.length ? (
        <MovieList movieList={queryMovie} />
      ) : (
        <MovieList movieList={movieList} />
      )}
    </div>
  );
}

export default Home;
