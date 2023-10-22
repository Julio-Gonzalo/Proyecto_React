import { useState } from "react";
import { MenuHeader } from "../../componentes/MenuHeader/MenuHeader";
import { useTranslation } from "react-i18next";

export function Gallery({ data }) {
  const [t] = useTranslation("global");
  const [selectedHouses, setSelectedHouses] = useState(null);

  const showHousesInfo = (house) => {
    setSelectedHouses(house);
  };

  const clearSelection = () => {
    setSelectedHouses(null);
  };

  return (
    <>
      <MenuHeader clearSelection={clearSelection} isHouseDetails={!!selectedHouses} />
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
                  {t("main.infoSettlement")} 
                  </h1>
                  <ul className="section2-houses-article-houses-article-div-ul">
                    <li className="section2-houses-article-houses-article-div-ul-li">
                      {selectedHouses.settlement}
                    </li>
                  </ul>
                </div>
                <div className="section2-houses-article-houses-article-div">
                  <h1 className="section2-houses-article-houses-article-div-titulos">
                  {t("main.infoRegion")}
                  </h1>
                  <ul className="section2-houses-article-houses-article-div-ul">
                    <li className="section2-houses-article-houses-article-div-ul-li">
                      {selectedHouses.region}
                    </li>
                  </ul>
                </div>
                <div className="section2-houses-article-houses-article-div">
                  <h1 className="section2-houses-article-houses-article-div-titulos">
                  {t("main.infoAlliances")}
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
                  {t("main.infoReligions")}
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
                  {t("main.infoFoundation")}
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
