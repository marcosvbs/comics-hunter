import comicsHunterLogo from "../../assets/comicsHunterLogo.png";
import { StyledHeader } from "./styles";

export function Header() {
  return (
    <StyledHeader>
      <nav className="content">
        <a>
          <img src={comicsHunterLogo} alt="Comics Hunter Logo" />
        </a>

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
