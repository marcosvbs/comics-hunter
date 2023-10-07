import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HomeLink } from "../components/HomeLink";
import { InfoField } from "../components/InfoField";

import styles from "./ComicPage.module.css";

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
    <>
      <Header />

      <main className={styles.container}>
        <HomeLink />

        <div className={styles.content}>
          <div className={styles.coverContainer}>
            <img src={coverImg} alt="Cover Imagem" />
          </div>

          <div className={styles.infoContainer}>
            <h1>{title}</h1>

            <div className={styles.infoLine}>
              <InfoField label={"Editora"} value={publisher} />
              <InfoField label={"Data de publicação"} value={publicationDate} />
            </div>

            <div className={styles.infoLine}>
              <InfoField label={"Escritor"} value={writer} />
              <InfoField label={"Desenhista"} value={penciler} />
            </div>

            <div className={styles.descriptionLine}>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
