import { ThemeProvider } from "styled-components";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { HomeLink } from "../components/HomeLink/HomeLink";
import { InfoField } from "../components/InfoField/InfoField";

import { StyledComicPage } from "./ComicPage.styles";
import { defaultTheme } from "../styles/themes/default";
import { GlobalStyle } from "../styles/global";
import { ReadingStatusButton } from "../components/ReadingStatusButton";

interface ComicPageProps {
  coverImg: string;
  title: string;
  publisher: string;
  publicationDate: string;
  writer: string;
  penciler: string;
  description: string;
}

export function ComicPage({
  coverImg,
  title,
  publisher,
  publicationDate,
  writer,
  penciler,
  description,
}: ComicPageProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <StyledComicPage>
        <HomeLink />

        <div className="content">
          <div className="coverContainer">
            <img src={coverImg} alt="Cover Imagem" />
          </div>

          <div className="infoContainer">
            <h1>{title}</h1>

            <div className="infoLine">
              <InfoField label={"Editora"} value={publisher} />
              <InfoField label={"Data de publicação"} value={publicationDate} />
            </div>

            <div className="infoLine">
              <InfoField label={"Escritor"} value={writer} />
              <InfoField label={"Desenhista"} value={penciler} />
            </div>

            <div className="descriptionLine">
              <p>{description}</p>
            </div>
          </div>

          <div className="statusContainer">
            <h2>Eai, já leu esse?</h2>

            <ul>
              <li>
                <ReadingStatusButton selected statusType={"read"} />
              </li>
              <li>
                <ReadingStatusButton statusType={"reading"} />
              </li>
              <li>
                <ReadingStatusButton statusType={"to-read"} />
              </li>
            </ul>
          </div>
        </div>
      </StyledComicPage>

      <Footer />

      <GlobalStyle />
    </ThemeProvider>
  );
}
