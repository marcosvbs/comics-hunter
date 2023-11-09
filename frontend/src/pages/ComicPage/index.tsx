import { ThemeProvider } from "styled-components";
import { HomeLink } from "../../components/HomeLink";
import { InfoField } from "../../components/InfoField";

import { StyledComicPage } from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import { GlobalStyle } from "../../styles/global";
import { StatusController, Status } from "../../components/StatusController";

import { useState, useEffect } from "react";
import axios from "axios";

interface ComicPageProps {
  comicId: number;
}

interface Comic {
  id: number;
  coverImg: string;
  title: string;
  publisher: string;
  publicationDate: string;
  writer: string;
  penciler: string;
  description: string;
}

export function ComicPage({ comicId }: ComicPageProps) {
  const [comic, setComic] = useState<Comic>({
    id: 0,
    coverImg: "",
    title: "string",
    publisher: "string",
    publicationDate: "",
    writer: "",
    penciler: "",
    description: "",
  });
  const [readingStatus, setReadingStatus] = useState<Status>("");

  async function loadComic() {
    const response = await axios.get(`http://localhost:3000/comics/${comicId}`);
    const data = await response.data;

    setComic(data);
  }

  useEffect(() => {
    loadComic();
  }, []);

  function changeStatus(newStatus: Status) {
    setReadingStatus(newStatus);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledComicPage>
        <HomeLink />

        <div className="content">
          <div className="coverContainer">
            <img src={comic.coverImg} alt="Cover Imagem" />
          </div>

          <div className="infoContainer">
            <h1>{comic.title}</h1>

            <div className="infoLine">
              <InfoField label={"Editora"} value={comic.publisher} />
              <InfoField
                label={"Data de publicação"}
                value={comic.publicationDate}
              />
            </div>

            <div className="infoLine">
              <InfoField label={"Escritor"} value={comic.writer} />
              <InfoField label={"Desenhista"} value={comic.penciler} />
            </div>

            <div className="descriptionLine">
              <p>{comic.description}</p>
            </div>
          </div>

          <StatusController
            currentStatus={readingStatus}
            changeStatus={changeStatus}
          />
        </div>
      </StyledComicPage>

      <GlobalStyle />
    </ThemeProvider>
  );
}
