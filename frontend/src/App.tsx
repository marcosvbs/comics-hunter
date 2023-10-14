import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";

import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

import { StyledApp } from "./App.styles";

interface Comic {
  id: number;
  coverImg: string;
  title: string;
  writer: string;
  penciler: string;
}

interface AppProps {
  comics: Comic[];
}

export function App({ comics }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <StyledApp>
        <div className="intro">
          <h1>
            <strong>Encontre</strong> sua próxima leitura
            <br />
            <strong>Conheça</strong> leitores como você
          </h1>

          <form className="searchBar">
            <input
              type="search"
              id="comics-search"
              placeholder="Busque por título, editora, escritor(a) ou desenhista"
            />
            <button>Buscar</button>
          </form>
        </div>

        <div className="cardsList">
          {comics.map((comic) => {
            return (
              <Card
                key={comic.id}
                id={comic.id}
                coverImg={comic.coverImg}
                title={comic.title}
                writer={comic.writer}
                penciler={comic.penciler}
              />
            );
          })}
        </div>
      </StyledApp>

      <Footer />

      <GlobalStyle />
    </ThemeProvider>
  );
}
