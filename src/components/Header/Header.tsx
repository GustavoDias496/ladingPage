import { useState } from "react";
import styles from "./styles.module.css";
import { FaRegHeart } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles["responsive-menu-container"]}>
      <span className={styles["menu-logo"]}><FaRegHeart color="#b55409" /><span>Dr. Cristian</span></span>

      <button
        className={`${styles["hamburger-menu"]} ${menuOpen ? styles["is-active"] : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className={styles["hamburger-box"]}>
          <span className={styles["hamburger-inner"]}></span>
        </span>
      </button>

      <nav className={styles.menu}>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#materiais">Materiais</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <nav className={`${styles["menu-mobile"]} ${menuOpen ? styles["menu-mobile-open"] : ""}`}>
        <ul>
          <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a></li>
          <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
          <li><a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a></li>
          <li><a href="#materiais" onClick={() => setMenuOpen(false)}>Materiais</a></li>
          <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
