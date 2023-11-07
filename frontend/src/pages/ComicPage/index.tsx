import { ThemeProvider } from "styled-components";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HomeLink } from "../../components/HomeLink";
import { InfoField } from "../../components/InfoField";

import { StyledComicPage } from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import { GlobalStyle } from "../../styles/global";
import { StatusController, Status } from "../../components/StatusController";

import { useState } from "react";

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
  const [readingStatus, setReadingStatus] = useState<Status>("");

  function changeStatus(newStatus: Status) {
    setReadingStatus(newStatus);
  }

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

          <StatusController
            currentStatus={readingStatus}
            changeStatus={changeStatus}
          />
        </div>
      </StyledComicPage>

      <Footer />

      <GlobalStyle />
    </ThemeProvider>
  );
}
