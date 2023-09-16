import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext, useEffect } from "react";
import { PropsContext } from "../App";

function Header() {
  const { setQueryMovie, search, setSearch } = useContext(PropsContext);

  useEffect(() => {
    let apiKey = "eaa35fd1cb193de2f116b5c1af778740";

    fetch(
      ` https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
    )
      .then((res) => res.json())
      .then((data) => setQueryMovie(data.results));
  }, [search, setQueryMovie]);

  return (
    <div>
      <header className={styles.header}>
        <Link to="/">
          <img
            src="logo.png"
            className={styles.logo}
            onClick={() => setSearch("")}
          />
        </Link>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>
    </div>
  );
}

export default Header;
