import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";

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
      </main>

      <Footer />
    </>
  );
}
