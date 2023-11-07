import { Link } from "react-router-dom";
import { StyledHomeLink } from "./styles";

export function HomeLink() {
  return (
    <StyledHomeLink>
      <Link to={"/"} className="homeLink">
        <span className="material-symbols-outlined">arrow_back</span>
        Voltar ao início
      </Link>
    </StyledHomeLink>
  );
}
