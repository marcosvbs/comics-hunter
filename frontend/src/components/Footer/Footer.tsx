import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.container}>
      <span>
        Comics Hunter 2023
        <br />
        Todos os direitos reservados
      </span>
    </footer>
  );
}
