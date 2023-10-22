import { MenuFooter } from "../../componentes/MenuFooter/MenuFooter";
import { MenuHeader } from "../../componentes/MenuHeader/MenuHeader";
import "./HomePage.css";
import { useTranslation } from "react-i18next";

export function HomePage() {
  const [t] = useTranslation("global");
  return (
    <>
      <MenuHeader />
      <main className="main-home">
        <section className="body">
          <div className="pepe">
            <h1 className="letra">{t("main.hometitle")}</h1>
          </div>
        </section>
      </main>
      <MenuFooter />
    </>
  );
}
