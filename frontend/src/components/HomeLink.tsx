import { Link } from "react-router-dom";

import styles from "./HomeLink.module.css";

export function HomeLink() {
  return (
    <Link to={"/"} className={styles.homeLink}>
      <span className="material-symbols-outlined">arrow_back</span>
      Voltar ao início
    </Link>
  );
}
