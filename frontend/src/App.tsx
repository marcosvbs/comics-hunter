import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Card } from "./components/Card";

import coverImg from "./assets/comics-cover.png";
import { Footer } from "./components/Footer";

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
          <Card coverImg={coverImg} />
          <Card coverImg={coverImg} />
          <Card coverImg={coverImg} />
          <Card coverImg={coverImg} />
          <Card coverImg={coverImg} />
          <Card coverImg={coverImg} />
          <Card coverImg={coverImg} />
          <Card coverImg={coverImg} />
          <Card coverImg={coverImg} />
        </div>
      </main>

      <Footer />
    </>
  );
}
