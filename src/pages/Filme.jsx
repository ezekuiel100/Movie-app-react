import { useParams } from "react-router-dom";
import styles from "./Filme.module.css";

import { useContext, useEffect, useState } from "react";
import MovieList from "../Components/MovieList";
import { PropsContext } from "../App";

function Filme() {
  const { queryMovie, setSearch } = useContext(PropsContext);

  const [state, setState] = useState("");
  const { id } = useParams();

  useEffect(() => {
    let apiKey = "eaa35fd1cb193de2f116b5c1af778740";

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setState(data));
  }, [id]);

  return (
    <>
      {queryMovie.length ? (
        <MovieList movieList={queryMovie} setSearch={setSearch} />
      ) : (
        <div className={styles.movieInfo}>
          <div className={styles.movieContainer}>
            <aside>
              <img
                src={`https://image.tmdb.org/t/p/w300${state.poster_path}`}
              />
            </aside>

            <main className={styles.descricao}>
              <h1>{state.title}</h1>

              <p className={styles.info}>
                Lançamento: <span>{state.release_date}</span>
              </p>

              <p>
                Descrição: <span>{state.overview}</span>
              </p>
            </main>
          </div>
        </div>
      )}
    </>
  );
}

export default Filme;
