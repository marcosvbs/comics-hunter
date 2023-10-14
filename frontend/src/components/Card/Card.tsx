import { Link } from "react-router-dom";

import { StyledCard } from "./Card.styles";

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
    <StyledCard>
      <Link to={`/comic/${id}`} className="link">
        <img src={coverImg} alt="Cover Imagem" />

        <h2>{title}</h2>

        <span>
          {writerLastName}, {pencilerLastName}
        </span>
      </Link>
    </StyledCard>
  );
}
