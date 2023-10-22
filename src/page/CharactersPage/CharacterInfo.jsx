import { useTranslation } from "react-i18next";

export function CharacterInfo({ houseData, ...data }) {
  const [t] = useTranslation("global");
  const houseArray = houseData.houseData;

  const characterData = data.data;
  const houseName = characterData.house;

  const selectedHouse = houseArray.find((house) => house.name === houseName);

  if (selectedHouse) {
    return (
      <>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
          {t("main.infoHome")}
          </h1>
          <img
            src={`http://localhost:3000/${selectedHouse.image}`}
            alt={houseName}
            className="section2-article-character-article-div-img"
          />
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
          {t("main.infoAlliances")}
          </h1>
          <div className="section2-article-character-article-div-div">
            <ul className="section2-article-character-article-div-div-ul">
              {characterData.alliances.map((alliance, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-div-ul-li"
                >
                  {alliance}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
          {t("main.infoAppearances")}
          </h1>
          <div className="section2-article-character-article-div-div div-episodes">
            <ul className="section2-article-character-article-div-div-ul">
              {characterData.episodes.map((episodes, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-div-ul-li"
                >
                  {episodes}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
          {t("main.infoFather")}
          </h1>
          <div className="section2-article-character-article-div-div">
            <ul className="section2-article-character-article-div-div-ul">
              {characterData.parents.map((parents, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-div-ul-li"
                >
                  {parents}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
          {t("main.infoDecendents")}
          </h1>
          <div className="section2-article-character-article-div-div">
            <ul className="section2-article-character-article-div-div-ul">
              {characterData.siblings.map((siblings, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-div-ul-li"
                >
                  {siblings}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
          {t("main.infoTitles")}
          </h1>
          <div className="section2-article-character-article-div-div div-titles">
            <ul className="section2-article-character-article-div-div-ul">
              {characterData.titles.map((titles, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-div-ul-li"
                >
                  {titles}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
          {t("main.infoHome")}
          </h1>
          <div className="section2-article-character-article-div-div">
            <ul className="section2-article-character-article-div-div-ul">
              <li className="section2-article-character-article-div-div-ul-li">
                {" "}
                No tiene casa
              </li>
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
          {t("main.infoAlliances")}
          </h1>
          <div className="section2-article-character-article-div-div">
            <ul className="section2-article-character-article-div-div-ul">
              {characterData.alliances.map((alliance, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-div-ul-li"
                >
                  {alliance}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
          {t("main.infoAppearances")}
          </h1>
          <div className="section2-article-character-article-div-div">
            <ul className="section2-article-character-article-div-div-ul div-episodes">
              {characterData.episodes.map((episodes, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-div-ul-li"
                >
                  {episodes}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
          {t("main.infoFather")}
          </h1>
          <div className="section2-article-character-article-div-div">
            <ul className="section2-article-character-article-div-div-ul">
              {characterData.parents.map((parents, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-div-ul-li"
                >
                  {parents}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
          {t("main.infoDecendents")}
          </h1>
          <div className="section2-article-character-article-div">
            <ul className="section2-article-character-article-div-div-ul">
              {characterData.siblings.map((siblings, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-div-ul-li"
                >
                  {siblings}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
          {t("main.infoTitles")}
          </h1>
          <div className="section2-article-character-article-div-div div-titles">
            <ul className="section2-article-character-article-div-div-ul">
              {characterData.titles.map((titles, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-div-ul-li"
                >
                  {titles}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
