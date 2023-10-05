import comicsHunterLogo from "../assets/comicsHunterLogo.png";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.content}>
        <img src={comicsHunterLogo} alt="Comics Hunter Logo" />

        <div>
          <a className={styles.textLink} href="#">
            Criar conta
          </a>

          <a className={styles.containedLink} href="#">
            Acessar conta
          </a>
        </div>
      </nav>
    </header>
  );
}
