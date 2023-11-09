import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";

import { Home } from "./pages/Home";

import { ComicPage } from "./pages/ComicPage";

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

export function Router() {
  const [comics, setComics] = useState([]);

  async function loadComics() {
    const response = await axios.get("http://localhost:3000/comics");
    const data = await response.data;

    setComics(data);
  }

  useEffect(() => {
    loadComics();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {comics.map((comic: Comic) => (
        <Route
          path={`/comic/${comic.id}`}
          element={<ComicPage comicId={comic.id} />}
          key={comic.id}
        />
      ))}
    </Routes>
  );
}
