import { PropsContext } from "../App";
import MovieList from "../Components/MovieList";
import { useContext, useEffect } from "react";

function Home() {
  const { setMovieList, queryMovie } = useContext(PropsContext);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=eaa35fd1cb193de2f116b5c1af778740`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  }, [setMovieList]);

  return <div>{queryMovie.length ? <MovieList /> : <MovieList />}</div>;
}

export default Home;
