import { Link } from "react-router-dom";
import Style from "./MovieList.module.css";

function MovieList({ movieList }) {
  let baseUrlImage = "https://image.tmdb.org/t/p/w200/";

  return (
    <div className={Style.container}>
      <main className={Style.movieContainer}>
        {movieList &&
          movieList.map((movie, i) => (
            <div key={i} className={Style.Moviecard}>
              <Link to={`/${movie.id}`}>
                <img src={`${baseUrlImage}${movie.poster_path}`} />
                <p>{movie.original_title}</p>
              </Link>
            </div>
          ))}
      </main>
    </div>
  );
}

export default MovieList;
