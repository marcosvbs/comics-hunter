import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Card } from "./components/Card";

import comic1Cover from "./assets/comic1Cover.jpg";
import comic2Cover from "./assets/comic2Cover.jpg";
import comic3Cover from "./assets/comic3Cover.jpg";

import { Footer } from "./components/Footer";

const comics: Comic[] = [
  {
    coverImg: comic1Cover,
    title: "Red Goblin #9",
    writer: "Alex Paknadel",
    penciler: "Christopher Campana",
  },
  {
    coverImg: comic2Cover,
    title: "X-Men (2021) #27",
    writer: "Gerry Duggan",
    penciler: "Phil Noto",
  },
  {
    coverImg: comic3Cover,
    title: "Strange Academy: Amazing Spider-Man (2023) #1",
    writer: "Carlos Hernandez",
    penciler: "Vasco Georgiev",
  },
];

interface Comic {
  coverImg: string;
  title: string;
  writer: string;
  penciler: string;
}

export function App() {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <div className={styles.intro}>
          <h1>
            <strong>Encontre</strong> sua próxima leitura
            <br />
            <strong>Conheça</strong> leitores como você
          </h1>

          <form className={styles.searchBar}>
            <input
              type="search"
              id="comics-search"
              placeholder="Busque por título, editora, escritor(a) ou desenhista"
            />
            <button>Buscar</button>
          </form>
        </div>

        <div className={styles.cardsList}>
          {comics.map((comic) => {
            return (
              <Card
                coverImg={comic.coverImg}
                title={comic.title}
                writer={comic.writer}
                penciler={comic.penciler}
              />
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}
