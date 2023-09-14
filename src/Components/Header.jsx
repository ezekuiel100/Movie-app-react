import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="logo.png" alt="" className={styles.logo} />
      </Link>
      <input type="text" />
    </header>
  );
}

export default Header;
