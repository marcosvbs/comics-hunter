import styles from "./Card.module.css";

interface CardProps {
  coverImg: string;
}

export function Card({ coverImg }: CardProps) {
  return (
    <div className={styles.container}>
      <img src={coverImg} alt="Cover Imagem" />

      <h2>Red Goblin #9</h2>

      <span>Paknadel, Campana</span>
    </div>
  );
}
