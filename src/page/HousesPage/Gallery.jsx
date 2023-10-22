import { useState } from "react";
import { MenuHeader } from "../../componentes/MenuHeader/MenuHeader";

export function Gallery({ data }) {
  const [selectedHouses, setSelectedHouses] = useState(null);

  const showHousesInfo = (house) => {
    setSelectedHouses(house);
  };

  const clearSelection = () => {
    setSelectedHouses(null);
  };

  return (
    <>
      <MenuHeader clearSelection={clearSelection} />
      <main className="main-houses">
        {selectedHouses ? (
          <section className="section2-houses">
            <article className="section2-houses-article-houses">
              <div className="section2-houses-article-houses-div">
                <img
                  src={`http://localhost:3000/${selectedHouses.image}`}
                  alt={selectedHouses.name}
                  className="section2-houses-article-houses-div-img"
                />
                <span className="section2-houses-article-houses-div-name">
                  {selectedHouses.name}
                </span>
              </div>
              <article className="section2-houses-article-houses-article">
                <div className="section2-houses-article-houses-article-div">
                  <h1 className="section2-houses-article-houses-article-div-titulos">
                    Sede
                  </h1>
                  <ul className="section2-houses-article-houses-article-div-ul">
                    <li className="section2-houses-article-houses-article-div-ul-li">
                      {selectedHouses.settlement}
                    </li>
                  </ul>
                </div>
                <div className="section2-houses-article-houses-article-div">
                  <h1 className="section2-houses-article-houses-article-div-titulos">
                    Region
                  </h1>
                  <ul className="section2-houses-article-houses-article-div-ul">
                    <li className="section2-houses-article-houses-article-div-ul-li">
                      {selectedHouses.region}
                    </li>
                  </ul>
                </div>
                <div className="section2-houses-article-houses-article-div">
                  <h1 className="section2-houses-article-houses-article-div-titulos">
                    Alianzas
                  </h1>
                  <ul className="section2-houses-article-houses-article-div-ul">
                    {selectedHouses.alliances.map((alliance, index) => (
                      <li
                        key={index}
                        className="section2-houses-article-houses-article-div-ul-li"
                      >
                        {alliance}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="section2-houses-article-houses-article-div">
                  <h1 className="section2-houses-article-houses-article-div-titulos">
                    Religiones
                  </h1>
                  <ul className="section2-houses-article-houses-article-div-ul">
                    {selectedHouses.religions.map((religions, index) => (
                      <li
                        key={index}
                        className="section2-houses-article-houses-article-div-ul-li"
                      >
                        {religions}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="section2-houses-article-houses-article-div">
                  <h1 className="section2-houses-article-houses-article-div-titulos">
                    Fundacion
                  </h1>
                  <ul className="section2-article-houses-article-div-ul">
                    <li className="section2-article-houses-article-div-ul-li">
                      {selectedHouses.foundation}
                    </li>
                  </ul>
                </div>
              </article>
            </article>
          </section>
        ) : (
          <section className="section-houses">
            {data.map((house, index) => (
              <article className={"section-houses-article"} key={index}>
                <div
                  className="section-houses-article-div"
                  onClick={() => showHousesInfo(house)}
                >
                  <img
                    src={`http://localhost:3000/${house.image}`}
                    alt={house.name}
                    className="section-houses-article-div-img"
                  />
                  <span className="section-houses-article-div-span">
                    {house.name}
                  </span>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>
    </>
  );
}
