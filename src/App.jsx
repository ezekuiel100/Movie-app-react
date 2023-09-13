import { useEffect, useState } from "react";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=eaa35fd1cb193de2f116b5c1af778740`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  }, []);

  return (
    <div>
      <Header />
      <MovieList movieList={movieList} />
    </div>
  );
}

export default App;
