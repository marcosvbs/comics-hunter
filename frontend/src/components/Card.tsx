import styles from "./Card.module.css";

import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  coverImg: string;
  title: string;
  writer: string;
  penciler: string;
}

function getLastName(fullName: string) {
  const fullNameAsArray = fullName.split(" ");
  const lastName = fullNameAsArray[fullNameAsArray.length - 1];

  return lastName;
}

export function Card({ id, coverImg, title, writer, penciler }: CardProps) {
  const writerLastName = getLastName(writer);
  const pencilerLastName = getLastName(penciler);

  return (
    <Link to={`/comic/${id}`} className={styles.container}>
      <img src={coverImg} alt="Cover Imagem" />

      <h2>{title}</h2>

      <span>
        {writerLastName}, {pencilerLastName}
      </span>
    </Link>
  );
}
