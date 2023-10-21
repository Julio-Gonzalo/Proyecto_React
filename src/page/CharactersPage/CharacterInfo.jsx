export function CharacterInfo({ houseData, ...data }) {
  const houseArray = houseData.houseData;

  const characterData = data.data;
  const houseName = characterData.house;

  const selectedHouse = houseArray.find((house) => house.name === houseName);

  if (selectedHouse) {
    return (
      <>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
            Casa
          </h1>
          <img
            src={`http://localhost:3000/${selectedHouse.image}`}
            alt={houseName}
            className="section2-article-character-article-div-img"
          />
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
            Alianzas
          </h1>
          <div className="section2-article-character-article-div-span">
            <ul className="section2-article-character-article-div-span-ul">
              {characterData.alliances.map((alliance, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-span-ul-li"
                >
                  {alliance}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
            Apariciones
          </h1>
          <div className="section2-article-character-article-div-span div-episodes">
            <ul className="section2-article-character-article-div-span-ul">
              {characterData.episodes.map((episodes, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-span-ul-li"
                >
                  {episodes}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
            Padre
          </h1>
          <div className="section2-article-character-article-div-span">
            <ul className="section2-article-character-article-div-span-ul">
              {characterData.parents.map((parents, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-span-ul-li"
                >
                  {parents}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
            Descendientes
          </h1>
          <div className="section2-article-character-article-div-span">
            <ul className="section2-article-character-article-div-span-ul">
              {characterData.siblings.map((siblings, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-span-ul-li"
                >
                  {siblings}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
            Titulos
          </h1>
          <div className="section2-article-character-article-div-span div-titles">
            <ul className="section2-article-character-article-div-span-ul">
              {characterData.titles.map((titles, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-span-ul-li"
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
            Casa
          </h1>
          <div className="section2-article-character-article-div-span">
            <ul className="section2-article-character-article-div-span-ul">
              <li className="section2-article-character-article-div-span-ul-li">
                {" "}
                No tiene casa
              </li>
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
            Alianzas
          </h1>
          <div className="section2-article-character-article-div-span">
            <ul className="section2-article-character-article-div-span-ul">
              {characterData.alliances.map((alliance, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-span-ul-li"
                >
                  {alliance}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
            Apariciones
          </h1>
          <div className="section2-article-character-article-div-span">
            <ul className="section2-article-character-article-div-span-ul div-episodes">
              {characterData.episodes.map((episodes, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-span-ul-li"
                >
                  {episodes}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
            Padre
          </h1>
          <div className="section2-article-character-article-div-span">
            <ul className="section2-article-character-article-div-span-ul">
              {characterData.parents.map((parents, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-span-ul-li"
                >
                  {parents}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
            Descendientes
          </h1>
          <div className="section2-article-character-article-div-span">
            <ul className="section2-article-character-article-div-span-ul">
              {characterData.siblings.map((siblings, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-span-ul-li"
                >
                  {siblings}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2-article-character-article-div">
          <h1 className="section2-article-character-article-div-titulos">
            Titulos
          </h1>
          <div className="section2-article-character-article-div-span div-titles">
            <ul className="section2-article-character-article-div-span-ul">
              {characterData.titles.map((titles, index) => (
                <li
                  key={index}
                  className="section2-article-character-article-div-span-ul-li"
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
