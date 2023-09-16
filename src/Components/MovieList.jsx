import { Link } from "react-router-dom";
import Style from "./MovieList.module.css";
import { useContext } from "react";
import { PropsContext } from "../App";

function MovieList() {
  const { movieList, setSearch } = useContext(PropsContext);

  let baseUrlImage = "https://image.tmdb.org/t/p/w200/";

  return (
    <div className={Style.container}>
      <main className={Style.movieContainer}>
        {movieList &&
          movieList.map((movie, i) => (
            <div key={i} className={Style.Moviecard}>
              <Link to={`/${movie.id}`}>
                <img
                  src={`${baseUrlImage}${movie.poster_path}`}
                  onClick={() => setSearch("")}
                />
                <p>{movie.original_title}</p>
              </Link>
            </div>
          ))}
      </main>
    </div>
  );
}

export default MovieList;
