import Style from "./Header.module.css";

function Header() {
  return (
    <header className={Style.header}>
      <img src="logo.png" alt="" className={Style.logo} />
      <input type="text" />
    </header>
  );
}

export default Header;
