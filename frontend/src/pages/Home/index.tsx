import axios from "axios";
import { Card } from "../../components/Card";
import { Container } from "./styles";

import { useState, useEffect } from "react";

interface Comic {
  id: number;
  coverImg: string;
  title: string;
  writer: string;
  penciler: string;
}

export function Home() {
  const [comics, setComics] = useState<Comic[]>([
    {
      id: 0,
      coverImg: "",
      title: "string",
      writer: "",
      penciler: "",
    },
  ]);

  async function loadComics() {
    const response = await axios.get("http://localhost:3000/comics");
    const data = await response.data;

    setComics(data);
  }

  useEffect(() => {
    loadComics();
  }, []);

  return (
    <Container>
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
    </Container>
  );
}
