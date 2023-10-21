import { useState } from "react";
import { CharacterInfo } from "./CharacterInfo";

export function Gallery({ data, ...houseData }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const showCharacterInfo = (character) => {
    setSelectedCharacter(character);
  };

  const clearSelection = () => {
    setSelectedCharacter(null);
  };

  return (
    <>
      {selectedCharacter ? (
        <section className="section2">
          <article
            className="section2-article-character"
            onClick={clearSelection}
          >
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
    </>
  );
}
