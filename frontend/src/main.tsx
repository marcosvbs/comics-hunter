import React from "react";
import ReactDOM from "react-dom/client";

import { ComicPage } from "./pages/ComicPage/index.tsx";
import { App } from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import comic1Cover from "./assets/comic1Cover.jpg";
import comic2Cover from "./assets/comic2Cover.jpg";
import comic3Cover from "./assets/comic3Cover.jpg";

const comics: Comic[] = [
  {
    id: 1,
    coverImg: comic1Cover,
    publisher: "Marvel",
    publicationDate: "21 de julho de 2023",
    title: "Red Goblin #9",
    writer: "Alex Paknadel",
    penciler: "Christopher Campana",
    description:
      "Normie Osborn está se perdendo na influência corruptora de seu simbionte – mas sua família e DYLAN BROCK estão prontos para dar um empurrão final para salvar Normie de si!",
  },
  {
    id: 2,
    coverImg: comic2Cover,
    publisher: "Marvel",
    publicationDate: "04 de outubro de 2023",
    title: "X-Men (2021) #27",
    writer: "Gerry Duggan",
    penciler: "Phil Noto",
    description:
      "ALGO CHAMOU SUA ATENÇÃO? Quando Ciclope se juntou a esta iteração dos X-Men, sua proposta era simples - “Eu sou um X-Men”. Se é assim, os inimigos dos X-Men parecem ter essa luta toda costurada.",
  },
  {
    id: 3,
    coverImg: comic3Cover,
    publisher: "Marvel",
    publicationDate: "21 de julho de 2023",
    title: "Strange Academy: Amazing Spider-Man (2023) #1",
    writer: "Carlos Hernandez",
    penciler: "Vasco Georgiev",
    description:
      "O brilhante novo vilão O EQUAÇÃO derrubou Miles Morales, Moon Knight e metade dos alunos da Strange Academy. O INCRÍVEL HOMEM-ARANHA pode ajudar?",
  },
];

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

const comicRoutes = comics.map((comic) => {
  return {
    path: `/comic/${comic.id}`,
    element: (
      <ComicPage
        coverImg={comic.coverImg}
        title={comic.title}
        publisher={comic.publisher}
        publicationDate={comic.publicationDate}
        writer={comic.writer}
        penciler={comic.penciler}
        description={comic.description}
      />
    ),
  };
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App comics={comics} />,
  },
  ...comicRoutes,
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
