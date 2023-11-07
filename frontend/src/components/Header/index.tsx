import { Link } from "react-router-dom";
import comicsHunterLogo from "../../assets/comicsHunterLogo.png";
import { StyledHeader } from "./styles";

export function Header() {
  return (
    <StyledHeader>
      <nav className="content">
        <Link to={"/"}>
          <img src={comicsHunterLogo} alt="Comics Hunter Logo" />
        </Link>

        <div>
          <a className="textLink" href="#">
            Criar conta
          </a>

          <a className="containedLink" href="#">
            Acessar conta
          </a>
        </div>
      </nav>
    </StyledHeader>
  );
}
