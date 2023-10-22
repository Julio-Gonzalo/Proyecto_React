import { useState } from "react";
import { CharacterInfo } from "./CharacterInfo";
import { MenuHeader } from "../../componentes/MenuHeader/MenuHeader";

export function Gallery({ data, houseData, functionFilter }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const showCharacterInfo = (character) => {
    setSelectedCharacter(character);
  };

  const clearSelection = () => {
    setSelectedCharacter(null);
  };

  return (
    <>
      <MenuHeader
        clearSelection={clearSelection}
        isCharacterInfo={!!selectedCharacter}
        functionFilter={functionFilter}
      />
      <main className="main-characters">
        {selectedCharacter ? (
          <section className="section2">
            <article className="section2-article-character">
              <div className="section2-article-character-div">
                <img
                  src={`http://localhost:3000/${selectedCharacter.image}`}
                  alt={selectedCharacter.name}
                  className="section2-article-character-div-img"
                />
                <span className="section2-article-character-div-name">
                  {selectedCharacter.name}
                </span>
              </div>
              <article className="section2-article-character-article">
                <CharacterInfo houseData={houseData} data={selectedCharacter} />
              </article>
            </article>
          </section>
        ) : (
          <section className="section">
            {data.map((character, index) => (
              <article className={"section-article"} key={index}>
                <div
                  className="section-article-div"
                  onClick={() => showCharacterInfo(character)}
                >
                  <img
                    src={`http://localhost:3000/${character.image}`}
                    alt={character.name}
                    className="section-article-div-img"
                  />
                  <span className="section-article-div-span">
                    {character.name}
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
