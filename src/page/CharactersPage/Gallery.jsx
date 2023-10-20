import { useState } from "react";
import "../../main/style.scss";

export function Gallery({ data }) {
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
        <article className="section-article-character" onClick={clearSelection}>
          <div className="section-article-character-div">
            <img
              src={`http://localhost:3000/${selectedCharacter.image}`}
              alt={selectedCharacter.name}
              className="section-article-character-div-img"
            />
            <span className="section-article-character-div-name">
              {selectedCharacter.name}
            </span>
          </div>
          <div className="section-article-div2"></div>
        </article>
      ) : (
        <>
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
        </>
      )}
    </>
  );
}
