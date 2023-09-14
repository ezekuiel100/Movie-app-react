import { useLocation } from "react-router-dom";
import styles from "./Filme.module.css";

function Filme() {
  const { state } = useLocation();
  const { movie } = state;

  console.log(movie);

  return (
    <>
      <div className={styles.movieInfo}>
        <div className={styles.movieContainer}>
          <aside>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
          </aside>

          <main className={styles.descricao}>
            <h1>{movie.title}</h1>

            <p className={styles.info}>
              Lançamento: <span>{movie.release_date}</span>
            </p>

            <p>
              Descrição: <span>{movie.overview}</span>
            </p>
          </main>
        </div>
      </div>
    </>
  );
}

export default Filme;
