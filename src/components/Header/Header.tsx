import { useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="logo">
          <img src={logo} alt="Логотип VK" />
        </a>

        <nav
          id="mobile-navigation"
          className={`nav ${menuOpen ? "nav--open" : ""}`}
        >
          <a href="#about" onClick={closeMenu}>
            О чемпионате
          </a>

          <a href="#directions" onClick={closeMenu}>
            Направления
          </a>

          <a href="#prizes" onClick={closeMenu}>
            Призы
          </a>
        </nav>

        <a
          href="#subscribe"
          className="header__button"
          onClick={closeMenu}
        >
          Участвовать
        </a>

        <button
          className={`menu-button ${
            menuOpen ? "menu-button--open" : ""
          }`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;