import { MenuHeader } from "../../componentes/MenuHeader/MenuHeader";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <MenuHeader />
      <main className="main-home">
        <section className="body">
          <div className="pepe">
            <h1 className="letra">JUEGO DE TRONOS</h1>
          </div>
        </section>
      </main>
    </>
  );
}
