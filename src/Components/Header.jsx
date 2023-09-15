import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

function Header({ setQueryMovie }) {
  const [search, setSearch] = useState("");

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
          <img src="logo.png" alt="" className={styles.logo} />
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
